const { Client } = require("../models");

module.exports = async function () {
  const client = {
    firstname: "User",
    lastname: "User",
    email: "user@user.com",
    password: "123",
    address: "Calle Falsa 123",
    phoneNumber: "13215468",
  };
  await Client.create(client);
};
