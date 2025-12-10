const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// GET /countries — все страны
router.get("/", async (req, res) => {
  const countries = await prisma.countries.findMany({
    include: { tanks: true } // подтягиваем танки этой страны, если нужно
  });
  res.json(countries);
});
// GET /tanks/country/:id — все танки одной страны
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const country = await prisma.countries.findUnique({
    where: { country_id: id },
    include: { tanks: true } // если хочешь подтянуть танки этой страны
  });

  if (!country) {
    return res.status(404).json({ status: "Country not found" });
  }

  res.json(country);
});


// POST /countries — добавить страну
router.post("/", async (req, res) => {
  const { name } = req.body;

  // проверка на существование
  const exists = await prisma.countries.findFirst({ where: { name } });
  if (exists) return res.json({ status: "Country already exists" });

  const newCountry = await prisma.countries.create({ data: { name } });
  res.json(newCountry);
});

// PUT /countries/:id — обновить страну
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const updatedCountry = await prisma.countries.update({
    where: { country_id: parseInt(req.params.id) },
    data: { name }
  });
  res.json(updatedCountry);
});

// DELETE /countries/:id — удалить страну
router.delete("/:id", async (req, res) => {
  const deletedCountry = await prisma.countries.delete({
    where: { country_id: parseInt(req.params.id) }
  });
  res.json(deletedCountry);
});

module.exports = router;
