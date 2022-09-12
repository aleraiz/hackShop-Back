const { Order } = require("../models");

module.exports = async function () {
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
        },
      ],
      paymentMethod: "Visa Crédito",
      address: "Rivera 2342",
      buyerId: 2,
    },
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
        },
      ],
      paymentMethod: "Visa Crédito",
      address: "Soca 1342",
      buyerId: 1,
    },
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
        },
      ],
      paymentMethod: "Visa Débito",
      address: "Ponce 4334",
      buyerId: 3,
    },
  ];
  await Order.bulkCreate(order);
};
