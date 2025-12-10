// routes/users.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// === Prisma ===
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

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
          include: { tanks: true },
        },
      },
      orderBy: { user_id: "asc" },
    });
    res.json(users);
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

  try {
    const exists = await prisma.users.findUnique({ where: { email } });
    if (exists) return res.status(400).json({ error: "Email already taken" });

    const hashed = await bcrypt.hash(password, 12);

    const role = nickname.toLowerCase().includes("erika") ? "admin" : "user";

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
          favourite_tanks: { include: { tanks: true } },
        },
      });

      res.json({ message: "Updated successfully", user: updatedUser });
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

// ===========================================================
// 7. Удаление любимого танка
// ===========================================================
router.delete("/:id/favourite", isAdmin("admin"), async (req, res) => {
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

module.exports = router;