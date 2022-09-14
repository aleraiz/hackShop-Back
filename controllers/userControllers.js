const { Client } = require("../models");
const jwt = require("jsonwebtoken");

async function myAccount(req, res) {
  const client = Client.findByPk(req.auth.id);
  res.json(client);
}

async function logoutUser(req, res) {
  if (!req.auth) {
    return res.status(401).json({ error: "Usuario no encontrado" });
  }
  res.sendStatus(200);
}

module.exports = {
  myAccount,
  logoutUser,
};
