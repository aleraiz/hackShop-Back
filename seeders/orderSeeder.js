const Order = require("../models/Order");

module.export = async function () {
  const order = [
    {
      productList: [
        {
          id: 1,
          quantity: 1,
          price: 14,
        },
        {
          id: 4,
          quantity: 3,
          price: 11,
        }, // Preguntar
      ],
      paymentMethod: "Visa Crédito",
      address: "Rivera 2342",
    },
    {
      productList: [4, 2, 3],
      paymentMethod: "Visa Crédito",
      address: "Soca 1342",
    },
    {
      productList: [5, 6, 7, 8],
      paymentMethod: "Visa Débito",
      address: "Ponce 4334",
    },
  ];
  await Order.bulkCreate(order);
};
