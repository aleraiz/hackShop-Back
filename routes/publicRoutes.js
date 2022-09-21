const pagesControllers = require("../controllers/pagesControllers");
const express = require("express");
const publicRoutes = express.Router();

publicRoutes.post("/token", pagesControllers.createlogin);

publicRoutes.post("/register", pagesControllers.storeRegister);

publicRoutes.get("/products", pagesControllers.indexProducts);

publicRoutes.get("/product/:slug", pagesControllers.indexProductId);

publicRoutes.get("/products/:category", pagesControllers.indexCategory);

module.exports = publicRoutes;
