const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    loggin: false,
  }
);

const Administrator = require("./Administrator")(sequelize, Model, DataTypes);
const Buyer = require("./Buyer")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const PurchaseHistory = require("./PurchaseHistory")(
  sequelize,
  Model,
  DataTypes
);

// Relations
Buyer.hasMany(Order);
Order.belongsTo(Buyer);

Order.hasMany(Product);
Product.belongsTo(Order);

Category.hasMany(Product);
Product.belongsTo(Category);

// Buyer.hasMany(PurchaseHistory);
// PurchaseHistory.belongsTo(Buyer);

// PurchaseHistory.hasMany(Order);
// Order.belongsTo(PurchaseHistory);
Order.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(Order);

module.exports = {
  sequelize,
  Buyer,
  Category,
  Administrator,
  Order,
  Product,
  PurchaseHistory,
};
