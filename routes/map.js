const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// === Middleware: only admin ===
const isAdmin = (req, res, next) => {
  const userRole = req.headers["x-role"];
  if (userRole !== "admin") {
    return res.status(403).json({ error: "Access denied. Admin only." });
  }
  next();
};
const locationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/location/");
  },
  filename: async (req, file, cb) => {
    try {
      const locationId = Number(req.params.id);

      const location = await prisma.battlelocation.findUnique({
        where: { id: locationId },
        select: { name: true }
      });

      if (!location) return cb(new Error("Location not found"));

      const safeName = location.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");

      const ext = path.extname(file.originalname).toLowerCase();
      const dir = path.join(__dirname, "../uploads/location");

      let filename = `${safeName}${ext}`;

      const files = await fs.promises.readdir(dir);
      const regex = new RegExp(`^${safeName}(?:_(\\d+))?\\${ext}$`, "i");

      let max = 0;
      files.forEach(f => {
        const m = f.match(regex);
        if (m) max = Math.max(max, m[1] ? Number(m[1]) : 1);
      });

      if (max > 0) filename = `${safeName}_${max + 1}${ext}`;

      cb(null, filename);
    } catch (err) {
      cb(err);
    }
  }
});

const uploadLocation = multer({ storage: locationStorage });
router.post(
  "/:id/photos",
  isAdmin,
  uploadLocation.array("photos", 10),
  async (req, res) => {
    const locationId = Number(req.params.id);

    try {
      const created = [];

      for (const file of req.files) {
        const photo = await prisma.photos.create({
          data: {
            filename: file.filename,
            filepath: file.path.replace(/\\/g, "/")
          }
        });

        await prisma.battlelocation_photos.create({
          data: {
            battlelocation_id: locationId,
            photo_id: photo.photo_id
          }
        });

        created.push(photo);
      }

      res.status(201).json(created);
    } catch (err) {
      console.error("Location photo upload error:", err);
      res.status(500).json({ error: "Photo upload failed" });
    }
  }
);
/* ===========================================================
   GET /map — получить список всех battlelocation
   =========================================================== */
router.get("/", async (req, res) => {
  try {
    const locations = await prisma.battlelocation.findMany({
      include: {
        battleCountries: {
          include: { country: true }
        },
        battleTanks: {
          include: { tank: true }
        }
      }
    });

    // Keep API backward-compatible: frontend expects nested objects to have `id` field
    const mapped = locations.map(loc => ({
      ...loc,
      battleCountries: (loc.battleCountries || []).map(bc => ({
        ...bc,
        country: bc.country ? { ...bc.country, id: bc.country.country_id } : null
      })),
      battleTanks: (loc.battleTanks || []).map(bt => ({
        ...bt,
        tank: bt.tank ? { ...bt.tank, id: bt.tank.tank_id } : null
      }))
    }));

    res.json(mapped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* ===========================================================
   GET /map/:id — получить конкретную battlelocation
   =========================================================== */
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const location = await prisma.battlelocation.findUnique({
      where: { id },
      include: {
        battleCountries: { include: { country: true } },
        battleTanks:     { include: { tank: true } }
      }
    });

    if (!location)
      return res.status(404).json({ error: "Not found" });

    const mapped = {
      ...location,
      battleCountries: (location.battleCountries || []).map(bc => ({
        ...bc,
        country: bc.country ? { ...bc.country, id: bc.country.country_id } : null
      })),
      battleTanks: (location.battleTanks || []).map(bt => ({
        ...bt,
        tank: bt.tank ? { ...bt.tank, id: bt.tank.tank_id } : null
      }))
    };

    res.json(mapped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



router.get("/:id/text", async (req, res) => {
  try {
    const id = Number(req.params.id);

    // ✔ Получаем локацию через Prisma
    const location = await prisma.battlelocation.findUnique({
      where: { id }
    });

    if (!location)
      return res.status(404).send("Location not found");

    
    const slug = location.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

    // ✔ Путь без подпапки
    const filePath = path.join(
      __dirname,
      "../uploads/location",
      `${slug}.txt`
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).send("No description available yet.");
    }

    const content = await fs.promises.readFile(filePath, "utf8");
    res.type("text/plain").send(content);

  } catch (err) {
    console.error("Text load error:", err);
    res.status(500).send("Server error");
  }
});

/* ===========================================================
   POST /map — создать battlelocation
   =========================================================== */
/*
Пример JSON:
{
  "name": "El Alamein",
  "latitude": 30.817,
  "longitude": 28.955,
  "description": "Big desert battle",
  "countries": [1, 2, 3],
  "tanks": [1, 4, 6]
}
*/
router.post("/", async (req, res) => {
  const { name, latitude, longitude, description, countries, tanks } = req.body;

  if (!name)
    return res.status(400).json({ error: "Name is required" });

  try {
    const created = await prisma.battlelocation.create({
      data: {
        name,
        latitude,
        longitude,
        description,
        battleCountries: {
          create: (countries || []).map(id => ({
            country_id: id
          }))
        },
        battleTanks: {
          create: (tanks || []).map(id => ({
            tank_id: id
          }))
        }
      },
      include: {
        battleCountries: true,
        battleTanks: true
      }
    });

    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot create location" });
  }
});

// Admin-only create (duplicate of above but protected)
router.post("/admin", isAdmin, async (req, res) => {
  // reuse same logic but ensure only admin can create
  const { name, latitude, longitude, description, countries, tanks } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    const created = await prisma.battlelocation.create({
      data: {
        name,
        latitude,
        longitude,
        description,
        battleCountries: {
          create: (countries || []).map(id => ({ country_id: id }))
        },
        battleTanks: {
          create: (tanks || []).map(id => ({ tank_id: id }))
        }
      },
      include: { battleCountries: true, battleTanks: true }
    });

    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot create location" });
  }
});
router.get("/:id/photos", async (req, res) => {
  const id = Number(req.params.id);

  const photos = await prisma.battlelocation_photos.findMany({
    where: { battlelocation_id: id },
    include: { photo: true },
    orderBy: { photo_id: 'asc' } // Ensure consistent order (oldest first, so main is [0])
  });

  // Return only photo objects and add `id` field for compatibility
  const mapped = photos.map(p => p.photo ? { ...p.photo, id: p.photo.photo_id } : null).filter(Boolean);
  res.json(mapped);
});

// Admin-only: update a battlelocation (supports changing/setting main photo)
router.put("/:id/admin-update", isAdmin, uploadLocation.single("mainPhoto"), async (req, res) => {
  const id = Number(req.params.id);
  const mainPhotoFilename = req.body.mainPhotoFilename; // e.g., 'uploads/location/el_alamein_2.jpg'

  try {
    const updateData = {};
    if (req.body.name) updateData.name = req.body.name;
    if (req.body.latitude) updateData.latitude = Number(req.body.latitude);
    if (req.body.longitude) updateData.longitude = Number(req.body.longitude);
    if (req.body.description) updateData.description = req.body.description;

    // Get current photos, ordered oldest first (main is [0])
    const currentPhotos = await prisma.battlelocation_photos.findMany({
      where: { battlelocation_id: id },
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

        await prisma.battlelocation_photos.create({
          data: {
            battlelocation_id: id,
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

    // Update location details
    const updatedLocation = await prisma.battlelocation.update({
      where: { id },
      data: updateData
    });

    res.json({ message: "Location updated", location: updatedLocation });
  } catch (err) {
    console.error("Location admin update error:", err);
    if (err.code === "P2025") return res.status(404).json({ error: "Location not found" });
    res.status(500).json({ error: "Update failed" });
  }
});

// Admin-only: update a battlelocation
router.put("/:id", isAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { name, latitude, longitude, description } = req.body;

  try {
    const updated = await prisma.battlelocation.update({
      where: { id },
      data: { name, latitude, longitude, description }
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    if (err.code === "P2025") return res.status(404).json({ error: "Location not found" });
    res.status(500).json({ error: "Cannot update location" });
  }
});

// Admin-only: replace any photo with a new upload
router.put("/:id/photos/:photo_id", isAdmin, uploadLocation.single("photo"), async (req, res) => {
  const locationId = Number(req.params.id);
  const photoId = Number(req.params.photo_id);

  if (!req.file) return res.status(400).json({ error: "No photo uploaded" });

  try {
    // Find the link between location and photo (use findFirst — composite unique not declared)
    const link = await prisma.battlelocation_photos.findFirst({
      where: { battlelocation_id: locationId, photo_id: photoId },
      include: { photo: true }
    });

    if (!link) {
      // Clean up uploaded file if not linked
      if (req.file && fs.existsSync(req.file.path)) {
        try { fs.unlinkSync(req.file.path); } catch (e) { /* ignore */ }
      }
      return res.status(404).json({ error: "Photo not found for this location" });
    }

    const oldPhoto = link.photo;
    const oldFilePath = path.join(__dirname, '..', oldPhoto.filepath);

    // Delete old file if it exists (ignore failures)
    try {
      if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
    } catch (e) {
      console.warn('Failed to delete old file:', e);
    }

    // Update photo record with new file details
    const newFilepath = req.file.path.replace(/\\/g, '/');
    const newFilename = req.file.filename;
    const updatedPhoto = await prisma.photos.update({
      where: { photo_id: photoId },
      data: {
        filename: newFilename,
        filepath: newFilepath
      }
    });

    // Return consistent shape
    res.json({ ...updatedPhoto, id: updatedPhoto.photo_id });
  } catch (err) {
    console.error("Photo update error:", err);
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      try { fs.unlinkSync(req.file.path); } catch (e) { console.warn('Cleanup failed:', e); }
    }
    res.status(500).json({ error: "Photo update failed" });
  }
});

// Admin-only: delete a photo from a location
router.delete("/:id/photos/:photo_id", isAdmin, async (req, res) => {
  const locationId = Number(req.params.id);
  const photoId = Number(req.params.photo_id);

  try {
    const link = await prisma.battlelocation_photos.findFirst({
      where: { battlelocation_id: locationId, photo_id: photoId },
      include: { photo: true }
    });

    if (!link) return res.status(404).json({ error: "Photo not found for this location" });

    const photo = link.photo;
    const filePath = path.join(__dirname, '..', photo.filepath);

    // Delete DB link first
    await prisma.battlelocation_photos.delete({ where: { id: link.id } });

    // Delete photo record
    await prisma.photos.delete({ where: { photo_id: photoId } });

    // Delete file (ignore failures)
    try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch (e) { console.warn('File delete failed:', e); }

    res.json({ message: "Photo deleted" });
  } catch (err) {
    console.error("Photo delete error:", err);
    res.status(500).json({ error: "Photo delete failed" });
  }
});

// Admin-only: delete a battlelocation
router.delete("/:id", isAdmin, async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleted = await prisma.battlelocation.delete({ where: { id } });
    res.json(deleted);
  } catch (err) {
    console.error(err);
    if (err.code === "P2025") return res.status(404).json({ error: "Location not found" });
    res.status(500).json({ error: "Cannot delete location" });
  }
});

// Admin-only: add/remove country relation
router.post("/:id/add-country", isAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { country_id } = req.body;
  if (!country_id) return res.status(400).json({ error: "country_id is required" });

  try {
    // prevent duplicates
    const exists = await prisma.battlelocation_country.findUnique({ where: { battlelocation_id_country_id: { battlelocation_id: id, country_id } } }).catch(() => null);
    if (exists) return res.status(409).json({ error: "Relation already exists" });

    const created = await prisma.battlelocation_country.create({ data: { battlelocation_id: id, country_id } });
    res.json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot add country to location" });
  }
});

router.delete("/:id/remove-country", isAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { country_id } = req.body;
  if (!country_id) return res.status(400).json({ error: "country_id is required" });

  try {
    const deleted = await prisma.battlelocation_country.delete({ where: { battlelocation_id_country_id: { battlelocation_id: id, country_id } } });
    res.json(deleted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot remove country from location" });
  }
});

// Admin-only: add/remove tank relation
router.post("/:id/add-tank", isAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { tank_id } = req.body;
  if (!tank_id) return res.status(400).json({ error: "tank_id is required" });

  try {
    const exists = await prisma.battlelocation_tank.findUnique({ where: { battlelocation_id_tank_id: { battlelocation_id: id, tank_id } } }).catch(() => null);
    if (exists) return res.status(409).json({ error: "Relation already exists" });

    const created = await prisma.battlelocation_tank.create({ data: { battlelocation_id: id, tank_id } });
    res.json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot add tank to location" });
  }
});

router.delete("/:id/remove-tank", isAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const { tank_id } = req.body;
  if (!tank_id) return res.status(400).json({ error: "tank_id is required" });

  try {
    const deleted = await prisma.battlelocation_tank.delete({ where: { battlelocation_id_tank_id: { battlelocation_id: id, tank_id } } });
    res.json(deleted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot remove tank from location" });
  }
});
/* ===========================================================
   DELETE /map/:id — удалить battlelocation
   =========================================================== */


module.exports = router;