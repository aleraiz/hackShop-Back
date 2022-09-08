const productSeeder = require("./seeders/productSeeder");
const categorySeeder = require("./seeders/categorySeeder");
const orderSeeder = require("./seeders/orderSeeder");
const purchaseHistorySeeder = require("./seeders/purchaseHistorySeeder");
const buyerSeeder = require("./seeders/buyerSeeder");
const administratorSeeder = require("./seeders/administratorSeeder");

module.export = async function () {
  await sequelize.sync({ force: true });
  await categorySeeder();
  await productSeeder();
  await orderSeeder();
  await purchaseHistorySeeder();
  await buyerSeeder();
  await administratorSeeder();
};
