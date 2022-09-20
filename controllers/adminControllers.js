const { Product, Administrator } = require("../models");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminController = {
  login: async (req, res) => {
    console.log(req.body);
    const admin = await Administrator.findOne({
      where: { email: req.body.email },
    });
    console.log(admin);
    if (!admin) {
      return res.status(409).json({ error: "Invalid credentials" });
    }
    const verifyPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!verifyPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: req.body.email, password: req.body.password },
      process.env.JWT_TOKEN_KEY
    );
    console.log(token);
    return res.json({ token });
  },

  indexAdmin: async (req, res) => {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });
    res.json(products);
  },
  update: async (req, res) => {
    const productName = req.body.productName;
    await Product.update(
      {
        productName: productName,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stock: req.body.stock,
        featured: req.body.featured,
        slug: productName,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.json("/admin");
  },
  store: async (req, res) => {
    const productName = req.body.productName;
    await Product.create({
      productName: productName,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      stock: req.body.stock,
      featured: req.body.featured,
      slug: productName,
    });
    res.json("Me cree");
  },
  destroy: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.json("borrado");
  },
};

module.exports = adminController;
