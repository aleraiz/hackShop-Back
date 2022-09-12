const bcrypt = require("bcryptjs");
const { Buyer, Product } = require("../models");
const jwt = require("jsonwebtoken");

async function indexProducts(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

async function indexProductId(req, res) {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
}

async function indexCategory(req, res) {
  const product = await Product.findAll({
    where: { categoryId: req.body.category },
  });
  res.json(product);
}

async function createlogin(req, res) {
  const buyer = await Buyer.findOne({
    where: { email: req.body.email },
  });

  if (!buyer) {
    return res.status(409).json({ error: "Email already not exists" });
  }

  const verifyPassword = await bcrypt.compare(
    req.body.password,
    buyer.password
  );

  if (!verifyPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: buyer.id }, process.env.JWT_TOKEN_KEY);
  res.status(200).json({
    token,
    buyer: {
      id: buyer.id,
      firstname: buyer.firstname,
      lastname: buyer.lastname,
      email: buyer.email,
      address: buyer.email,
      phoneNumber: buyer.phoneNumber,
    },
  });
}

async function storeRegister(req, res) {
  try {
    const buyerCreated = await Buyer.create({
      firstname: req.body.email,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    });
    const token = jwt.sign(
      { userId: buyerCreated.id },
      process.env.JWT_TOKEN_KEY
    );
    res.status(200).json({
      token,
      buyer: {
        id: buyerCreated.id,
        firstname: buyerCreated.firstname,
        lastname: buyerCreated.lastname,
        email: buyerCreated.email,
        address: buyerCreated.email,
        phoneNumber: buyerCreated.phoneNumber,
      },
    });
  } catch {
    return res.status(409).json({ error: "Email already exists" });
  }
}

async function myAccount(req, res) {
  res.send("entraste");
}

async function logoutUser(req, res) {
  if (!req.auth) {
    return res.status(401).json({ error: "Usuario no encontrado" });
  }
  res.sendStatus(200);
}

module.exports = {
  indexProducts,
  indexProductId,
  indexCategory,
  createlogin,
  storeRegister,
  myAccount,
  logoutUser,
};
