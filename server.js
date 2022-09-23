require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./dbInitialSetUp");
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db();

routes(app);
app.listen(PORT, () => {
  console.log(`Corriendo en el puerto "http://localhost:${PORT}"`);
});
