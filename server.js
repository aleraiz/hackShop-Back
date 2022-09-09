require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.APP_PORT;
const routes = require("./routes");
const db = require("./dbInitialSetUp");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db();

routes(app);
app.listen(PORT, () => {
  console.log(`Corriendo en el puerto "http://localhost:${PORT}"`);
});
