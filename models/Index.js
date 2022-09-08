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
Buyer.hasMeny(Order);
Order.belongsTo(Buyer);

Buyer.hasMeny(PurchaseHistory);
PurchaseHistory.belongsTo(Buyer);

PurchaseHistory.hasMeny(Order);
Order.belongsTo(PurchaseHistory);

Order.hasMeny(Product);
Product.belongsTo(Order);

Product.hasMeny(Category);
Category.belongsTo(Product);

module.export = {
  sequelize,
  Buyer,
  Category,
  Administrator,
  Order,
  Product,
  PurchaseHistory,
};
