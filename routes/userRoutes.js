const userControllers = require("../controllers/userControllers");
const express = require("express");
const userRoutes = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

userRoutes.use(
  checkJwt({ secret: process.env.JWT_TOKEN_KEY, algorithms: ["HS256"] })
);

userRoutes.get("/myaccount", userControllers.myAccount);

userRoutes.patch("/myaccount", userControllers.udpateUser);

userRoutes.get("/order", userControllers.orderFinded);

userRoutes.post("/order", userControllers.orderSend);

module.exports = userRoutes;
