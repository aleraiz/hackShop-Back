const pagesControllers = require("../controllers/pagesControllers");
const express = require("express");
const publicRoutes = express.Router();

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
});

// publicRoutes.post("/token", pagesControllers.createlogin);

// publicRoutes.post("/register", pagesControllers.storeRegister);

publicRoutes.get("/products", pagesControllers.indexProducts);

publicRoutes.get("/product/:id", pagesControllers.indexProductId);

publicRoutes.get("/products/:category", pagesControllers.indexCategory);

module.exports = publicRoutes;
