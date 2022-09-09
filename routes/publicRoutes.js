const express = require("express");
const publicRoutes = express.Router();

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
});
publicRoutes.get("/products", (req, res) => {
  res.send("Soy el admin");
});
publicRoutes.get("/cart", (req, res) => {
  res.send("Soy el cart");
});
publicRoutes.post("/cart", (req, res) => {
  res.send("Soy el cart");
});
publicRoutes.delete("/cart", (req, res) => {
  res.send("Soy el cart");
});

publicRoutes.post("/token", (req, res) => {
  res.send("Soy el login");
});
publicRoutes.post("/register", (req, res) => {
  res.send("Soy el registro");
});
publicRoutes.get("/product/:id", (req, res) => {
  res.send("Soy un unico producto");
});
publicRoutes.get("/products/:category", (req, res) => {
  res.send("Soy las categorias");
});

module.exports = publicRoutes;
