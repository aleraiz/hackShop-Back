const { Product } = require("../models");

const adminController = {
  indexAdmin: async (req, res) => {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });
    res.json(products);
  },
  update: async (req, res) => {
    await Product.update(
      {
        productName: req.body.productName,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stock: req.body.stock,
        featured: req.body.featured,
        slug: "",
      },
      {
        where: { id: req.params.id },
      }
    );
    res.json("/admin");
  },
  store: async (req, res) => {
    await Product.create({
      productName: req.body.productName,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      stock: req.body.stock,
      featured: req.body.featured,
      slug: "",
    });
    res.json("Me cree");
  },
  destroy: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.json("borrado");
  },
};

module.exports = adminController;
