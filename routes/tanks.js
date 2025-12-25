const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/tankphoto/");
  },
  filename: async (req, file, cb) => {
    try {
      const tankId = Number(req.params.id);
      const tank = await prisma.tanks.findUnique({
        where: { tank_id: tankId },
        select: { name: true }
      });
      if (!tank) {
        return cb(new Error("Tank not found"));
      }
      // Normalize tank name: "Tiger 1" -> "tiger_1"
      const safeName = tank.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[-\u001f\u007f-\u009f]/g, '')
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "")
        .replace(/^_+|_+$/g, '');
      const ext = path.extname(file.originalname).toLowerCase(); // .png / .jpg
      // Find existing files that match the safeName pattern in uploads/tankphoto
      const uploadDir = path.join(__dirname, "../uploads/tankphoto");
      let nextName = `${safeName}${ext}`;
      try {
        const files = await fs.promises.readdir(uploadDir);
        // pattern: safeName.ext or safeName_2.ext, safeName_3.ext ...
        // look for files like safeName.ext, safeName_2.ext, safeName_3.ext ...
        const regexAll = new RegExp(`^${safeName}(?:_(\\d+))?\\.[a-z0-9]+$`, 'i');
        let max = 0;
        let baseExists = false;
        for (const f of files) {
          const m = f.match(regexAll);
          if (!m) continue;
          const fExt = path.extname(f).toLowerCase();
          if (fExt !== ext) continue; // only consider same extension
          if (!m[1]) baseExists = true;
          const num = m[1] ? parseInt(m[1], 10) : 1;
          if (num > max) max = num;
        }
        if (!baseExists && max === 0) {
          nextName = `${safeName}${ext}`;
        } else {
          const start = Math.max((max || 1) + 1, 2);
          nextName = `${safeName}_${start}${ext}`;
        }
      } catch (e) {
        // If readdir fails for any reason, fall back to safeName + ext
        nextName = `${safeName}${ext}`;
      }
      cb(null, nextName);
    } catch (err) {
      cb(err);
    }
  }
});
const upload = multer({ storage });
const isAdmin = (role) => (req, res, next) => {
  const userRole = req.headers["x-role"];
  if (userRole !== role) {
    return res.status(403).json({ error: "Access denied. Admin only." });
  }
  next();
};
// Function to strip HTML tags
const stripHtml = (str) => {
  return str ? str.replace(/<[^>]*>?/g, '') : '';
};
// GET /tanks — получить все танки
router.get('/', async (req, res) => {
  const tanks = await prisma.tanks.findMany({
    include: {
      country: true,
      vehicle_type: true,
      photos: { include: { photo: true } }
      
    }
  });
  res.json(tanks);
});
// GET /tanks/by-country/:countryId — получить танки по стране
// GET /tanks/filter?country=1&type=2
router.get("/filter", async (req, res) => {
  const country = req.query.country ? Number(req.query.country) : undefined;
  const type = req.query.type ? Number(req.query.type) : undefined;
  const where = {};
  if (country) where.country_id = country;
  if (type) where.type_id = type;
  try {
    const tanks = await prisma.tanks.findMany({
      where,
      include: {
        country: true,
        vehicle_type: true,
        photos: { include: { photo: true } }
      }
    });
    res.json(tanks);
  } catch (err) {
    console.error(err); // сюда смотрим в консоли
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.get("/search/:letter", async (req, res) => {
  const letter = req.params.letter;
  const tanks = await prisma.tanks.findMany({
    where: {
      name: {
        contains: letter // ищем только по первой букве
      }
    },
    include: { vehicle_type: true } // точное имя связи из schema.prisma
  });
  if (tanks.length === 0) {
    return res.status(404).json({ status: "Tanks not found" });
  }
  res.json(tanks);
});
router.get("/:id/photos", async (req, res) => {
  const tankId = Number(req.params.id);
  const photos = await prisma.tank_photos.findMany({
    where: { tank_id: tankId },
    include: { photo: true }, // подтягиваем данные о файле
    orderBy: { photo_id: 'asc' } // Ensure consistent order (oldest first, so main is [0])
  });
  res.json(photos.map(p => p.photo)); // возвращаем только фото
});
// POST /tanks/:id/photos — загрузить фото к танку
router.post("/:id/photos", upload.array("photos", 10), async (req, res) => {
  const tankId = Number(req.params.id);
  const createdPhotos = [];
  for (const file of req.files) {
    const photo = await prisma.photos.create({
      data: {
        filename: file.filename,
        filepath: file.path.replace(/\\/g, '/')
      }
    });
    await prisma.tank_photos.create({
      data: {
        tank_id: tankId,
        photo_id: photo.photo_id
      }
    });
    createdPhotos.push(photo);
  }
  res.json(createdPhotos);
});
// GET /tanks/name/:name — найти танк по имени или части имени
// GET /tanks/name/:name — найти все танки по подстроке имени
// GET /tanks/first-letter/:letter — найти все танки, имя которых начинается с буквы
// GET /tanks/:id — получить один танк
router.get("/:id", async (req, res) => {
  const tankId = Number(req.params.id);
  if (isNaN(tankId)) return res.status(400).json({ error: "Invalid tank ID" });
  const tank = await prisma.tanks.findUnique({
    where: { tank_id: tankId },
    include: { country: true, vehicle_type: true }
  });
  if (!tank) return res.status(404).json({ error: "Tank not found" });
  res.json(tank);
});
// POST /tanks — добавить новый танк
router.post('/', async (req, res) => {
  const { name, country_id, type_id, weight_kg, crew, engine_power_hp,
          top_speed_kmh, armor_front_mm, armor_side_mm, armor_rear_mm,
          gun_caliber_mm, year_introduced, notes, summary } = req.body;
  const cleanedNotes = stripHtml(notes).trim();
  const cleanedSummary = summary ? stripHtml(summary).trim() : null;

  // Try creating with summary; on certain DB setups (no migration) fallback to creating without it.
  let newTank;
  try {
    newTank = await prisma.tanks.create({
      data: {
        name,
        country_id,
        type_id,
        weight_kg,
        crew,
        engine_power_hp,
        top_speed_kmh,
        armor_front_mm,
        armor_side_mm,
        armor_rear_mm,
        gun_caliber_mm,
        year_introduced,
        notes: cleanedNotes,
        summary: cleanedSummary
      }
    });
  } catch (err) {
    console.error('Create tank error:', err);
    const msg = (err && err.message) ? err.message : 'Unknown error';
    // If DB doesn't have the column (migration not applied), try without summary as a fallback
    if (/Unknown column|Unknown column|ER_BAD_FIELD_ERROR|has no column named/i.test(msg)) {
      try {
        console.warn('Summary column missing in DB — retrying without it');
        newTank = await prisma.tanks.create({
          data: {
            name,
            country_id,
            type_id,
            weight_kg,
            crew,
            engine_power_hp,
            top_speed_kmh,
            armor_front_mm,
            armor_side_mm,
            armor_rear_mm,
            gun_caliber_mm,
            year_introduced,
            notes: cleanedNotes
          }
        });
      } catch (err2) {
        console.error('Retry without summary failed:', err2);
        return res.status(500).json({ error: 'Failed to create tank (retry without summary failed)', details: err2.message });
      }
    } else {
      return res.status(500).json({ error: 'Failed to create tank', details: msg });
    }
  }

  // Create notes file
  try {
    const notesDir = path.join(__dirname, '../notes');
    if (!fs.existsSync(notesDir)) {
      fs.mkdirSync(notesDir, { recursive: true });
    }

    const safeName = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[-\u001f\u007f-\u009f]/g, '')
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "")
      .replace(/^_+|_+$/g, '');

    let fileName = `${safeName}.txt`;
    let fullPath = path.join(notesDir, fileName);
    let counter = 2;
    while (fs.existsSync(fullPath)) {
      fileName = `${safeName}_${counter}.txt`;
      fullPath = path.join(notesDir, fileName);
      counter++;
    }

    fs.writeFileSync(fullPath, cleanedNotes);
  } catch (err) {
    console.error('Error creating notes file:', err);
    // Continue even if file creation fails, as it's secondary to DB insert
  }

  res.json(newTank);
});
// DELETE /tanks/:id — удалить танк по ID
router.delete('/:id', async (req, res) => {
  const deletedTank = await prisma.tanks.delete({
    where: { tank_id: parseInt(req.params.id) }
  });
  res.json(deletedTank);
});
router.put(
  "/:id/admin-update",
  isAdmin("admin"),
  upload.single("mainPhoto"),
  async (req, res) => {
    const id = Number(req.params.id);
    const mainPhotoFilename = req.body.mainPhotoFilename; // e.g., 'uploads/tankphoto/tiger_2.jpg'
    try {
      const updateData = {};
      // Text fields
      if (req.body.name) updateData.name = req.body.name;
      if (req.body.weight_kg) updateData.weight_kg = Number(req.body.weight_kg);
      if (req.body.crew) updateData.crew = Number(req.body.crew);
      if (req.body.engine_power_hp) updateData.engine_power_hp = Number(req.body.engine_power_hp);
      if (req.body.top_speed_kmh) updateData.top_speed_kmh = Number(req.body.top_speed_kmh);
      if (req.body.armor_front_mm) updateData.armor_front_mm = Number(req.body.armor_front_mm);
      if (req.body.armor_side_mm) updateData.armor_side_mm = Number(req.body.armor_side_mm);
      if (req.body.armor_rear_mm) updateData.armor_rear_mm = Number(req.body.armor_rear_mm);
      if (req.body.gun_caliber_mm) updateData.gun_caliber_mm = Number(req.body.gun_caliber_mm);
      if (req.body.penetration_mm) updateData.penetration_mm = Number(req.body.penetration_mm);
      if (req.body.year_introduced) updateData.year_introduced = Number(req.body.year_introduced);
      if (req.body.notes) updateData.notes = stripHtml(req.body.notes).trim();
      if (req.body.summary) updateData.summary = stripHtml(req.body.summary).trim();
      // Get current photos, ordered oldest first (main is [0])
      const currentPhotos = await prisma.tank_photos.findMany({
        where: { tank_id: id },
        orderBy: { photo_id: 'asc' },
        include: { photo: true }
      });
      let photoUpdated = false;
      if (req.file) {
        // Case 1: New photo uploaded — replace current main if exists (delete old file, update DB to new path), or add if none
        photoUpdated = true;
        if (currentPhotos.length > 0) {
          const mainLink = currentPhotos[0];
          const mainPhoto = mainLink.photo;
          const oldFilePath = path.join(__dirname, '..', mainPhoto.filepath); // Absolute path to old file
          // Delete old file
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
          }
          // Update main photo record to point to the new uploaded file's path/filename
          const newFilepath = req.file.path.replace(/\\/g, '/');
          const newFilename = req.file.filename;
          await prisma.photos.update({
            where: { photo_id: mainPhoto.photo_id },
            data: {
              filename: newFilename,
              filepath: newFilepath
            }
          });
        } else {
          // No existing photos: Create new photo and link (becomes main)
          const newPhoto = await prisma.photos.create({
            data: {
              filename: req.file.filename,
              filepath: req.file.path.replace(/\\/g, '/')
            }
          });
          await prisma.tank_photos.create({
            data: {
              tank_id: id,
              photo_id: newPhoto.photo_id
            }
          });
        }
      } else if (mainPhotoFilename) {
        // Case 2: No new upload, but existing photo selected as main — swap DB records with current main
        const selectedPhoto = await prisma.photos.findFirst({
          where: { filepath: mainPhotoFilename }
        });
        if (!selectedPhoto) {
          return res.status(404).json({ error: "Selected photo not found" });
        }
        if (currentPhotos.length === 0) {
          return res.status(400).json({ error: "No main photo to swap with" });
        }
        const mainLink = currentPhotos[0];
        const mainPhoto = mainLink.photo;
        if (selectedPhoto.photo_id === mainPhoto.photo_id) {
          // Already main, no-op
          photoUpdated = false;
        } else {
          photoUpdated = true;
          // Swap filenames and filepaths in DB (no file movement needed)
          const mainFilename = mainPhoto.filename;
          const mainFilepath = mainPhoto.filepath;
          const selectedFilename = selectedPhoto.filename;
          const selectedFilepath = selectedPhoto.filepath;
          await prisma.photos.update({
            where: { photo_id: mainPhoto.photo_id },
            data: {
              filename: selectedFilename,
              filepath: selectedFilepath
            }
          });
          await prisma.photos.update({
            where: { photo_id: selectedPhoto.photo_id },
            data: {
              filename: mainFilename,
              filepath: mainFilepath
            }
          });
        }
      }
      // If nothing to update, return early
      if (Object.keys(updateData).length === 0 && !photoUpdated) {
        return res.json({ message: "Nothing to update" });
      }
      // Update tank details
      const updatedTank = await prisma.tanks.update({
        where: { tank_id: id },
        data: updateData,
        include: {
          country: true,
          vehicle_type: true
        }
      });
      // Update notes file if notes were changed
      if ('notes' in updateData) {
        const notesDir = path.join(__dirname, '../notes');
        if (!fs.existsSync(notesDir)) {
          fs.mkdirSync(notesDir, { recursive: true });
        }
        const safeName = updatedTank.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[-\u001f\u007f-\u009f]/g, '')
          .replace(/\s+/g, "_")
          .replace(/[^a-z0-9_]/g, "")
          .replace(/^_+|_+$/g, '');
        let fileName = `${safeName}.txt`;
        let fullPath = path.join(notesDir, fileName);
        // Check if file exists, if not try with _2 etc., but for simplicity assume base name
        // To handle properly, you might need to store filename in DB or search, but for now overwrite base
        fs.writeFileSync(fullPath, updateData.notes);
      }
      res.json({ message: "Tank updated", tank: updatedTank });
    } catch (err) {
      console.error("Tank admin update error:", err);
      if (err.code === "P2025") {
        return res.status(404).json({ error: "Tank not found" });
      }
      res.status(500).json({ error: "Update failed" });
    }
  }
);
// PUT /tanks/:id — обновить танк по ID
router.put('/:id', async (req, res) => {
  const body = { ...req.body };
  if (body.notes) {
    body.notes = stripHtml(body.notes).trim();
  }
  if (body.summary) {
    body.summary = stripHtml(body.summary).trim();
  }
  const updatedTank = await prisma.tanks.update({
    where: { tank_id: parseInt(req.params.id) },
    data: body // предполагаем, то тело запроса содержит все обновляемые полей
  });
  res.json(updatedTank);
});
// Serve notes files
router.get('/notes/:file', (req, res) => {
  const filePath = path.join(__dirname, '../notes', req.params.file);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Notes not found');
  }
});
module.exports = router;