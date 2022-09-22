const db = require("./models");

const administratorSeeder = require("./seeders/administratorSeeder");
const productSeeder = require("./seeders/productSeeder");
const categorySeeder = require("./seeders/categorySeeder");
const orderSeeder = require("./seeders/orderSeeder");
const clientSeeder = require("./seeders/clientSeeder");

module.exports = async function () {
  await db.sequelize.sync({ force: true });
  await administratorSeeder();
  await clientSeeder();
  await categorySeeder();
  await orderSeeder();
  await productSeeder();
  console.log("Se crearon las tablas");
};
