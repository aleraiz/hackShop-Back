const Order = require("../models/Order");

module.export = async function () {
  const order = [
    {
      productList: [],
    },
    {
      paymentMethod: "",
    },
    {
      address: "",
    },
  ];
  await Order.bulkCreate(order);
};
