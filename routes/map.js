const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/* ===========================================================
   GET /map — получить список всех battlelocation
   =========================================================== */
router.get("/", async (req, res) => {
  try {
    const locations = await prisma.battlelocation.findMany({
      include: {
        battleCountries: {
          include: { countries: true }
        },
        battleTanks: {
          include: { tanks: true }
        }
      }
    });

    res.json(locations);
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
        battleCountries: { include: { countries: true } },
        battleTanks:     { include: { tanks: true } }
      }
    });

    if (!location)
      return res.status(404).json({ error: "Not found" });

    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:id/photos", async (req, res) => {
  const id = Number(req.params.id);

  
    const photos = await prisma.battlelocation_photos.findMany({
      where: { battlelocation_id: id },
      include: {
        photos: true
      }
    });

    res.json(photos);
  
    
    
  }
);
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

/* ===========================================================
   DELETE /map/:id — удалить battlelocation
   =========================================================== */
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleted = await prisma.battlelocation.delete({
      where: { id }
    });

    res.json(deleted);
  } catch (err) {
    res.status(404).json({ error: "Location not found" });
  }
});

module.exports = router;
