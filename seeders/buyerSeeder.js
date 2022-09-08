const Buyer = require("../models/Buyer");

module.exports = async function () {
  const buyer = [
    {
      firstname: "Juan",
      lastname: "Sanchez",
      email: "juansanchez@gmail.com",
      password: "123",
      address: [],
      phoneNumber: "13215468",
    },

    {
      firstname: "Roberto",
      lastname: "Rodriguez",
      email: "robertorodriguez@gmail.com",
      password: "123",
      address: [],
      phoneNumber: "2213215468",
    },

    {
      firstname: "Matias",
      lastname: "Martinez",
      email: "matiasmartinez@gmail.com",
      password: "123",
      address: [],
      phoneNumber: "132154638",
    },
  ];
  await Buyer.bulkCreate(buyer);
};
