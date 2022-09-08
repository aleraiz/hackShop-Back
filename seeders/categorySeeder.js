const Category = require("../models/Category");

module.exports = async function () {
  const category = [{ categoryName: "Interior", categoryName: "Exterior" }];
  await Category.bulkCreate(category);
};
