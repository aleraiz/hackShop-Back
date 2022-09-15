const slugify = require("slugify");

const slugConfig = {
  replacement: "-",
  lower: true,
  strict: true,
  locale: "en",
  trim: true,
};
module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  Product.beforeCreate((product) => {
    product.slug = slugify(product.productName, slugConfig);
  });
  Product.beforeBulkCreate((products) => {
    for (const product of products) {
      product.slug = slugify(product.productName, slugConfig);
    }
  });
  return Product;
};
