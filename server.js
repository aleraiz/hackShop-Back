require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.APP_PORT;
const routes = require("./routes");
const db = require("./dbInitialSetUp");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// db();

routes(app);
app.listen(PORT, () => {
  console.log(`Corriendo en el puerto "http://localhost:${PORT}"`);
});
