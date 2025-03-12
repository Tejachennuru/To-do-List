require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
