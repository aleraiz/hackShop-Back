const { Client } = require("../models");

module.exports = async function () {
  const client = [
    {
      firstname: "Juan",
      lastname: "Sanchez",
      email: "juansanchez@gmail.com",
      password: "123",
      address: [],
      phoneNumber: "13215468",
    },
    {
      firstname: "User",
      lastname: "User",
      email: "user@user.com",
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
  await Client.bulkCreate(client);
};
