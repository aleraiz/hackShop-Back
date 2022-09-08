const db = require("./models/Index");

// const administratorSeeder = require("./seeders/administratorSeeder");
// // const productSeeder = require("./seeders/productSeeder");
// // const categorySeeder = require("./seeders/categorySeeder");
// // const orderSeeder = require("./seeders/orderSeeder");
// // const purchaseHistorySeeder = require("./seeders/purchaseHistorySeeder");
const buyerSeeder = require("./seeders/buyerSeeder");

module.exports = async function () {
  await db.sequelize.sync({ force: true });
  // await administratorSeeder();
  await buyerSeeder();
  // await categorySeeder();
  // await orderSeeder();
  // await productSeeder();
  // await purchaseHistorySeeder();

  console.log("Se crearon las tablas");
};
