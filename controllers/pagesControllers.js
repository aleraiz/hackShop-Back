const { Buyer } = require("../models");

async function indexProducts(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

async function indexProductId(req, res) {
  const product = await Product.findByPk(1);
  res.json(product);
}

async function indexCategory(req, res) {
  const product = await Product.findAll({ where: { categoryId: 1 } });
  res.json(product);
}
async function createlogin(req, res) {
  const buyer = await Buyer.findOne({
    where: { email: req.body.email },
  });

  if (!buyer.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.status(200).json(buyer);
}

async function storeRegister(req, res) {
  const buyerFind = await Buyer.findOne({
    where: { email: req.body.email },
  });

  if (buyerFind) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const buyerCreated = await Buyer.create({
    firstname: req.body.email,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  });

  res.status(200).json(buyerCreated);
}

module.exports = {
  indexProducts,
  indexProductId,
  indexCategory,
  createlogin,
  storeRegister,
};
