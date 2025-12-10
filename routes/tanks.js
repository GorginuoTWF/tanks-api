const express = require("express");
const router = express.Router();

const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const multer = require("multer");
const upload = multer({ dest: "uploads/tankphoto/" }); 

// GET /tanks — получить все танки
router.get('/', async (req, res) => {
  const tanks = await prisma.tanks.findMany({
    include: {
      countries: true,
      vehicle_types: true
      
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
        countries: true,
        vehicle_types: true,
        photos: { include: { photos: true } }
      }
    });

    res.json(tanks);
  } catch (err) {
    console.error(err);   // сюда смотрим в консоли
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
    include: { vehicle_types: true } // точное имя связи из schema.prisma
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
    include: { photos: true } // подтягиваем данные о файле
  });

  res.json(photos.map(p => p.photos)); // возвращаем только фото
});

// POST /tanks/:id/photos — загрузить фото к танку
router.post("/:id/photos", upload.array("photos", 10), async (req, res) => {
  const tankId = Number(req.params.id);

  const createdPhotos = [];

  for (const file of req.files) {
    const photo = await prisma.photos.create({
      data: {
        filename: file.originalname,
        filepath: file.path
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
    include: { countries: true, vehicle_types: true }
  });

  if (!tank) return res.status(404).json({ error: "Tank not found" });
  res.json(tank);
});



// POST /tanks — добавить новый танк
router.post('/', async (req, res) => {
  const { name, country_id, type_id, weight_kg, crew, engine_power_hp,
          top_speed_kmh, armor_front_mm, armor_side_mm, armor_rear_mm,
          gun_caliber_mm, year_introduced, notes } = req.body;

  const newTank = await prisma.tanks.create({
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
      notes
    }
  });

  res.json(newTank);
});

// DELETE /tanks/:id — удалить танк по ID
router.delete('/:id', async (req, res) => {
  const deletedTank = await prisma.tanks.delete({
    where: { tank_id: parseInt(req.params.id) }
  });
  res.json(deletedTank);
});

// PUT /tanks/:id — обновить танк по ID
router.put('/:id', async (req, res) => {
  const updatedTank = await prisma.tanks.update({
    where: { tank_id: parseInt(req.params.id) },
    data: req.body // предполагаем, что тело запроса содержит все обновляемые поля
  });
  res.json(updatedTank);
});

module.exports = router;
