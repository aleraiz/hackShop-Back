const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../controllers/adminControllers");

adminRoutes.get("/admin", adminController.indexAdmin);
adminRoutes.post("/admin", adminController.store);
adminRoutes.put("/admin/:id", adminController.update);
adminRoutes.delete("/admin/:id", adminController.destroy);

module.exports = adminRoutes;
