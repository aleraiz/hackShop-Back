const { Category } = require("../models");

module.exports = async function () {
  const category = [{ categoryName: "Interior" }, { categoryName: "Exterior" }];
  await Category.bulkCreate(category);
};
