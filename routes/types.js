const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// GET /vehicle_types — все типы техники
router.get("/", async (req, res) => {
  const types = await prisma.vehicle_types.findMany({
    include: { tanks: true } // подтягиваем танки этого типа
  });
  res.json(types);
});
// GET /vehicle_types/:id — получить конкретный тип по id
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const type = await prisma.vehicle_types.findUnique({
    where: { type_id: id },
    include: { tanks: true } // если хочешь подтянуть танки этого типа
  });

  if (!type) {
    return res.status(404).json({ status: "Vehicle type not found" });
  }

  res.json(type);
});

// POST /vehicle_types — добавить тип
router.post("/", async (req, res) => {
  const { name } = req.body;

  // проверка на существование
  const exists = await prisma.vehicle_types.findFirst({ where: { name } });
  if (exists) return res.json({ status: "Vehicle type already exists" });

  const newType = await prisma.vehicle_types.create({ data: { name } });
  res.json(newType);
  
});


// PUT /vehicle_types/:id — обновить тип
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const updatedType = await prisma.vehicle_types.update({
    where: { type_id: parseInt(req.params.id) },
    data: { name }
  });
  res.json(updatedType);
});

// DELETE /vehicle_types/:id — удалить тип
router.delete("/:id", async (req, res) => {
  const deletedType = await prisma.vehicle_types.delete({
    where: { type_id: parseInt(req.params.id) }
  });
  res.json(deletedType);
});

module.exports = router;
