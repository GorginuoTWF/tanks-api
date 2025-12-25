// routes/users.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const codes = new Map();
const verifiedEmails = new Set(); // email -> { code, expires }
// === Prisma ===
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// === Nodemailer ===
const nodemailer = require("nodemailer");

// Replace with your actual email credentials or use environment variables
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER || "ukrastuk@gmail.com",
    pass: process.env.EMAIL_PASS || "fufq xbxk bhow cfwk", // Use app password for Gmail
  },
});

async function sendMail(to, text) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "ukrastuk@gmail.com",
      to,
      subject: "Your Verification Code",
      text,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}

// === Multer: сохранение аватаров ===
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/users/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, filename);
  },
});
const validateRegisterInput = ({ email, password }) => {
  // email: что-то@что-то
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  // пароль: ≥6, 1 заглавная, 1 строчная, 1 спецсимвол
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  if (!passwordRegex.test(password)) {
    return "Password must be at least 6 chars, include upper, lower and special symbol";
  }

  return null;
};
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error("Only images are allowed"));
  },
});

// === Middleware: только админ ===
const isAdmin = (role) => (req, res, next) => {
  const userRole = req.headers["x-role"];
  if (userRole !== role) {
    return res.status(403).json({ error: "Access denied. Admin only." });
  }
  next();
};
// router.get("/search", async (req, res) => {
//   try {
//     const q = (req.query.q || "").trim();

//     // Если слишком короткий запрос — сразу пустой ответ
//     if (q.length < 2) {
//       return res.json([]);
//     }

//     const results = await prisma.user.findMany({
//       where: {
//         OR: [
//           { username: { contains: q, mode: "insensitive" } },
//           { email: { contains: q, mode: "insensitive" } }
//         ]
//       },
//       orderBy: { id: "asc" },
//       take: 20
//     });

//     res.json(results);
//   } catch (err) {
//     console.error("Search error:", err);
//     res.status(500).json({ error: "Search failed" });
//   }
// });
// ===========================================================
// 1. Получить всех пользователей
// ===========================================================
router.get("/", async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      include: {
        favourite_tanks: {
          include: { tank: true },
        },
      },
      orderBy: { user_id: "asc" },
    });
    // Map `favourite_tanks[].tank` -> `favourite_tanks[].tanks` to keep API shape
    const mapped = users.map(u => ({
      ...u,
      favourite_tanks: (u.favourite_tanks || []).map(f => ({
        ...f,
        tanks: f.tank,
      }))
    }));
    res.json(mapped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
// ===========================================================
// 2. Поиск по id (для твоего поиска)
// ===========================================================
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { password, ...rest } = req.body;

  try {
    const dataToUpdate = { ...rest };

    // Если обновляют пароль — хэшируем
    if (password) {
      dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    const updated = await prisma.users.update({
      where: { user_id: id },
      data: dataToUpdate
    });

    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
});
// ===========================================================
// 2. avatar (для твоего поиска)
// ===========================================================
router.post("/:id/avatar", upload.single("avatar"), async (req, res) => {
  const id = Number(req.params.id);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const url = `http://localhost:3000/uploads/users/${req.file.filename}`;

  try {
    const user = await prisma.users.update({
      where: { user_id: id },
      data: { avatar_url: url }
    });

    res.json({ message: "Avatar updated", url, user });
  } catch (err) {
    res.status(500).json({ error: "Cannot update avatar" });
  }
});

// ===========================================================
// 3. Логин
// ===========================================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });

    const cleanUser = {
      user_id: user.user_id,
      nickname: user.nickname,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url,
    };

    res.json({ user: cleanUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// ===========================================================
// 4. Регистрация
// ===========================================================
router.post("/register", async (req, res) => {
  const { nickname, email, password } = req.body;

  if (!nickname || !email || !password) {
    return res.status(400).json({ error: "All fields required" });
  }
  


  // === VALIDATION (BEFORE DB) ===
  const validationError = validateRegisterInput({ email, password });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  if (!verifiedEmails.has(email.toLowerCase())) {
  return res.status(400).json({ error: "Email not verified" });
}

  try {
    const exists = await prisma.users.findUnique({ where: { email } });
    if (exists) {
      return res.status(400).json({ error: "Email already taken" });
    }

    const hashed = await bcrypt.hash(password, 12);

    const role = nickname.toLowerCase().includes("erika")
      ? "admin"
      : "user";

    const newUser = await prisma.users.create({
      data: {
        nickname,
        email,
        password: hashed,
        role,
      },
    });

    res.status(201).json({ message: "Registered!", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});

// ===========================================================
// 5. АДМИН: Полное редактирование пользователя (ник, email, пароль, аватар, удаление аватара)
// ===========================================================
router.put(
  "/:id/admin-update",
  isAdmin("admin"),
  upload.single("avatar"),
  async (req, res) => {
    const id = Number(req.params.id);

    try {
      const updateData = {};

      if (req.body.nickname) updateData.nickname = req.body.nickname;
      if (req.body.email) updateData.email = req.body.email;

      if (req.body.password && req.body.password.trim()) {
        updateData.password = await bcrypt.hash(req.body.password, 12);
      }

      // Новый аватар
      if (req.file) {
        updateData.avatar_url = `http://localhost:3000/uploads/users/${req.file.filename}`;
      }

      // Удаление аватара
      if (req.body.removeAvatar === "true") {
        updateData.avatar_url = null;
      }

      if (Object.keys(updateData).length === 0) {
        return res.json({ message: "Nothing to update" });
      }

      const updatedUser = await prisma.users.update({
        where: { user_id: id },
        data: updateData,
        include: {
          favourite_tanks: { include: { tank: true } },
        },
      });

      // keep compatibility: return `tanks` key inside favourite_tanks
      const mappedUser = {
        ...updatedUser,
        favourite_tanks: (updatedUser.favourite_tanks || []).map(f => ({
          ...f,
          tanks: f.tank,
        }))
      };

      res.json({ message: "Updated successfully", user: mappedUser });
    } catch (err) {
      console.error("Admin update error:", err);
      if (err.code === "P2025") {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(500).json({ error: "Update failed" });
    }
  }
);

// ===========================================================
// 6. Удаление пользователя
// ===========================================================
router.delete("/:id", isAdmin("admin"), async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.users.delete({ where: { user_id: id } });
    res.json({ message: "User deleted" });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(500).json({ error: "Delete failed" });
  }
});
router.post("/:id/favourite", async (req, res) => {
  const user_id = Number(req.params.id);
  const { tank_id } = req.body;

  if (!tank_id) return res.status(400).json({ error: "tank_id required" });

  try {
    // Проверка пользователя и танка
    const user = await prisma.users.findUnique({ where: { user_id } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const tank = await prisma.tanks.findUnique({ where: { tank_id: Number(tank_id) } });
    if (!tank) return res.status(404).json({ error: "Tank not found" });

    // Проверяем, есть ли уже любимый танк
    const existing = await prisma.favourite_tanks.findFirst({ where: { user_id } });
    if (existing) {
      // если есть, обновляем запись
      const updated = await prisma.favourite_tanks.update({
        where: { id: existing.id }, // уникальный id записи
        data: { tank_id: Number(tank_id) }
      });
      return res.json({ message: "Favourite tank updated", favourite: updated });
    }

    // если нет — создаём
    const favourite = await prisma.favourite_tanks.create({
      data: { user_id, tank_id: Number(tank_id) }
    });

    res.json({ message: "Favourite tank set", favourite });
  } catch (err) {
    console.error("Favourite tank error:", err);
    res.status(500).json({ error: "Cannot set favourite tank" });
  }
});
// ===========================================================
// 7. Удаление любимого танка
// ===========================================================
router.delete("/:id/favourite",  async (req, res) => {
  const user_id = Number(req.params.id);

  try {
    const result = await prisma.favourite_tanks.deleteMany({
      where: { user_id },
    });
    res.json({ removed: result.count });
  } catch (err) {
    res.status(500).json({ error: "Cannot remove favourite tank" });
  }
});
router.get("/:id/favourite", async (req, res) => {
  const user_id = Number(req.params.id);

  try {
    const fav = await prisma.favourite_tanks.findFirst({
      where: { user_id },
      include: { tank: true }
    });

    res.json(fav || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot get favourite tank" });
  }
});


router.post("/send-email-code", async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  codes.set(email, {
    code,
    expires: Date.now() + 5 * 60 * 1000, // 5 min
  });

  try {
    await sendMail(email, `Your verification code: ${code}`);
    res.json({ success: true });
  } catch (err) {
    console.error("Send code error:", err);
    res.status(500).json({ error: "Failed to send verification code" });
  }
});
router.put("/:id/favourite", async (req, res) => {
  const user_id = Number(req.params.id);
  const { tank_id } = req.body;

  if (!tank_id) return res.status(400).json({ error: "tank_id required" });

  try {
    // Проверка пользователя и танка
    const user = await prisma.users.findUnique({ where: { user_id } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const tank = await prisma.tanks.findUnique({ where: { tank_id: Number(tank_id) } });
    if (!tank) return res.status(404).json({ error: "Tank not found" });

    // Удаляем старый любимый танк
    await prisma.favourite_tanks.deleteMany({ where: { user_id } });

    // Ставим новый
    const favourite = await prisma.favourite_tanks.create({
      data: { user_id, tank_id: Number(tank_id) }
    });

    res.json({ message: "Favourite tank updated", favourite });
  } catch (err) {
    console.error("Update favourite tank error:", err);
    res.status(500).json({ error: "Cannot update favourite tank" });
  }
});
router.post("/verify-email-code", (req, res) => {
  const { email, code } = req.body;
  const entry = codes.get(email);

  if (!entry) {
    return res.status(400).json({ error: "Code not found" });
  }

  if (Date.now() > entry.expires) {
    codes.delete(email);
    return res.status(400).json({ error: "Code expired" });
  }

  if (entry.code !== code) {
    return res.status(400).json({ error: "Invalid code" });
  }

  codes.delete(email);
  verifiedEmails.add(email.toLowerCase());

  res.json({ success: true });
});
module.exports = router;