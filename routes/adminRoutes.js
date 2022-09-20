const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../controllers/adminControllers");
const { expressjwt: checkJwt } = require("express-jwt");

adminRoutes.post("/login", adminController.login);

adminRoutes.use(
  checkJwt({ secret: process.env.JWT_TOKEN_KEY, algorithms: ["HS256"] })
);
adminRoutes.get("/admin", adminController.indexAdmin);
adminRoutes.post("/admin", adminController.store);
adminRoutes.put("/admin/:id", adminController.update);
adminRoutes.delete("/admin/:id", adminController.destroy);

module.exports = adminRoutes;
