const productController = require("../controllers/controllersMarco");
const express = require("express");
const publicRoutes = express.Router();

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
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
publicRoutes.get("/products", productController.products);
publicRoutes.get("/product/:id", productController.productId);
publicRoutes.get("/products/:category", productController.category);

module.exports = publicRoutes;
