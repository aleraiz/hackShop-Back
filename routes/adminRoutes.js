const express = require("express");
const adminRoutes = express.Router();

adminRoutes.get("/admin", (req, res) => {
  res.send("Soy el admin");
});
adminRoutes.post("/admin", (req, res) => {
  res.send("Soy el admin");
});
adminRoutes.delete("/admin", (req, res) => {
  res.send("Soy el admin");
});
adminRoutes.put("/admin", (req, res) => {
  res.send("Soy el admin");
});

module.exports = adminRoutes;
