const bcrypt = require("bcryptjs");
const { Buyer, Product } = require("../models");

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

  res.status(200).json(buyer);
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
    res.status(200).json(buyerCreated);
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
