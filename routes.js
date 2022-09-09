const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("soy el HOME");
});
router.get("/products", (req, res) => {
  res.send("Soy el admin");
});
router.get("/cart", (req, res) => {
  res.send("Soy el cart");
});
router.post("/cart", (req, res) => {
  res.send("Soy el cart");
});
router.delete("/cart/:id", (req, res) => {
  res.send("Soy el cart");
});
router.get("/admin", (req, res) => {
  res.send("Soy el admin");
});
router.post("/admin", (req, res) => {
  res.send("Soy el admin");
});
router.delete("/admin", (req, res) => {
  res.send("Soy el admin");
});
router.put("/admin", (req, res) => {
  res.send("Soy el admin");
});
router.post("/token", (req, res) => {
  res.send("Soy el login");
});
router.post("/register", (req, res) => {
  res.send("Soy el registro");
});
router.get("/product/:id", (req, res) => {
  res.send("Soy un unico producto");
});
router.get("/products/:category", (req, res) => {
  res.send("Soy las categorias");
});

module.exports = router;
