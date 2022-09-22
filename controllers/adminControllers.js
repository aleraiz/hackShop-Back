const { Product, Administrator } = require("../models");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const adminController = {
  login: async (req, res) => {
    const admin = await Administrator.findOne({
      where: { email: req.body.email },
    });
    if (!admin) {
      return res.status(409).json({ error: "Invalid credentials" });
    }
    const verifyPassword = admin.comparePassword(req.body.password);

    if (!verifyPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: req.body.email, password: req.body.password },
      process.env.JWT_TOKEN_KEY
    );
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
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const ext = path.extname(files["image.0"].filepath);
      const newFileName = `image_${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files["image.0"].filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files["image.0"].mimetype,
        });

      const productName = fields.productName;

      const images = [];
      const imagesKeys = [
        "imageOne",
        "imageTwo",
        "imageThree",
        "imageDetailOne",
        "imageDetailTwo",
      ];

      for (let i = 0; i < 5; i++) {
        const tempImg = {};
        if (files[`image.${i}`]) {
          tempImg[imagesKeys[i]] = `${process.env.SUPABASE_BUCKET_URL}${
            files[`image.${i}`].newFilename
          }`;
        } else {
          tempImg[imagesKeys[i]] = "";
        }
        images.push(tempImg);
      }

      await Product.create({
        productName: productName,
        description: fields.description,
        image: images,
        price: fields.price,
        stock: fields.stock,
        featured: fields.featured,
        slug: productName,
      });
      res.json("Me cree");
    });
  },
  destroy: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.json("borrado");
  },
};

module.exports = adminController;
