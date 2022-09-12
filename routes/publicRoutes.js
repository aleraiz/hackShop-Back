const pagesControllers = require("../controllers/pagesControllers");
const express = require("express");
const publicRoutes = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

publicRoutes.get("/", (req, res) => {
  res.send("soy el HOME");
});

publicRoutes.post("/token", pagesControllers.createlogin);

publicRoutes.post("/register", pagesControllers.storeRegister);

publicRoutes.get("/products", pagesControllers.indexProducts);

//deberia ser pruducts, en plural
publicRoutes.get("/product/:id", pagesControllers.indexProductId);

publicRoutes.get("/products/:category", pagesControllers.indexCategory);

publicRoutes.use(
  checkJwt({ secret: process.env.JWT_TOKEN_KEY, algorithms: ["HS256"] })
);

publicRoutes.get("/myaccount", pagesControllers.myAccount);

publicRoutes.post("/logout", pagesControllers.logoutUser);

module.exports = publicRoutes;
