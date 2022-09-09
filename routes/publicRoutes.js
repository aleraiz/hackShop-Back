const pagesControllers = require("../controllers/pagesControllers");
const express = require("express");
const publicRoutes = express.Router();
const { showProducts } = require("../controllers/controllersAle");

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
});
<<<<<<< HEAD
publicRoutes.get("/products", showProducts);
publicRoutes.get("/cart", (req, res) => {
  res.send("Soy el cart");
});
publicRoutes.post("/cart", (req, res) => {
  res.send("Soy el cart");
});
publicRoutes.delete("/cart", (req, res) => {
  res.send("Soy el cart");
});
=======
>>>>>>> e5d161918dbde17055a06c9dd620764546233c63

// publicRoutes.post("/token", pagesControllers.createlogin);

// publicRoutes.post("/register", pagesControllers.storeRegister);

publicRoutes.get("/products", pagesControllers.indexProducts);

//deberia ser pruducts, en plural
publicRoutes.get("/product/:id", pagesControllers.indexProductId);

publicRoutes.get("/products/:category", pagesControllers.indexCategory);

module.exports = publicRoutes;
