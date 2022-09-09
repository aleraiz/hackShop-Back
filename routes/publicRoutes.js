const express = require("express");
const publicRoutes = express.Router();
const pagesControllers = require("../controllers/pagesControllers");

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
  n;
});
publicRoutes.get("/products", (req, res) => {
  res.send("Soy el admin");
});

// publicRoutes.post("/token", pagesControllers.createlogin);

// publicRoutes.post("/register", pagesControllers.storeRegister);

publicRoutes.get("/product/:id", (req, res) => {
  res.send("Soy un unico producto");
});
publicRoutes.get("/products/:category", (req, res) => {
  res.send("Soy las categorias");
});

module.exports = publicRoutes;
