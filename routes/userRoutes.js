const userControllers = require("../controllers/userControllers");
const express = require("express");
const userRoutes = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

userRoutes.use(
  checkJwt({ secret: process.env.JWT_TOKEN_KEY, algorithms: ["HS256"] })
);

userRoutes.get("/myaccount", userControllers.myAccount);

userRoutes.post("/logout", userControllers.logoutUser);

module.exports = userRoutes;
