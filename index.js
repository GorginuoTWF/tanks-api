const express = require("express");
const cors = require("cors");
const app = express();

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

// All the tank-related routes
const tanksRouter = require("./routes/tanks"); // твой файл с CRUD для танков
const countriesRouter = require("./routes/countries"); // CRUD для стран
const typesRouter = require("./routes/types"); // CRUD для типов техники
const usersRouter = require("./routes/users"); // CRUD для пользователей
const mapRouter = require("./routes/map"); // CRUD для локаций боёв


app.use("/users", usersRouter);
app.use("/tanks", tanksRouter);
app.use("/countries", countriesRouter);
app.use("/types", typesRouter);
app.use("/map", mapRouter);


console.log("...Erika is overjoyed...");

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
