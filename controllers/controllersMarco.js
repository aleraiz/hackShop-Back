const { Product } = require("../models");

const productos = {
  products: async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
  },
  productId: async (req, res) => {
    const product = await Product.findByPk(1);
    res.json(product);
  },
  category: async (req, res) => {
    const product = await Product.findAll({ where: { categoryId: 1 } });
    res.json(product);
  },
};

module.exports = productos;
