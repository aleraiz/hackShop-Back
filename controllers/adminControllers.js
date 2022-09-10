const { Product } = require("../models");
const slugify = require("slugify");
const adminController = {
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
