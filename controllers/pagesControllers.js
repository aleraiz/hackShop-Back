const bcrypt = require("bcryptjs");
const { Client, Product } = require("../models");
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
    where: { categoryId: req.params.category },
  });
  res.json(product);
}

async function createlogin(req, res) {
  const client = await Client.findOne({
    where: { email: req.body.email },
  });
  console.log(client);
  if (!client) {
    return res.status(409).json({ error: "Email already not exists" });
  }

  const verifyPassword = await bcrypt.compare(
    req.body.password,
    client.password
  );

  if (!verifyPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: client.id }, process.env.JWT_TOKEN_KEY);

  res.status(200).json({
    token,
    client: {
      id: client.id,
      firstname: client.firstname,
      lastname: client.lastname,
      email: client.email,
      address: client.address,
      phoneNumber: client.phoneNumber,
    },
  });
}

async function storeRegister(req, res) {
  try {
    const clientCreated = await Client.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
    });
    const token = jwt.sign(
      { userId: clientCreated.id },
      process.env.JWT_TOKEN_KEY
    );
    res.status(200).json({
      token,
      client: {
        id: clientCreated.id,
        firstname: clientCreated.firstname,
        lastname: clientCreated.lastname,
        email: clientCreated.email,
        address: clientCreated.address,
        phoneNumber: clientCreated.phoneNumber,
      },
    });
  } catch {
    return res.status(409).json({ error: "Email already exists" });
  }
}

module.exports = {
  indexProducts,
  indexProductId,
  indexCategory,
  createlogin,
  storeRegister,
};
