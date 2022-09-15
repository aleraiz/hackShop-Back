const { Client, Order } = require("../models");
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

async function orderSend(req, res) {
  await Order.create({
    productList: req.body.productList,
    paymentMethod: "visa Crédito",
    address: req.body.address,
    clientId: req.auth.userId,
  });
  res.json("Me cree");
}

module.exports = {
  myAccount,
  logoutUser,
  orderSend,
};
