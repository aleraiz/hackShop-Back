const Buyer = require("../models/Buyer");

module.export = async function () {
  const buyer = [
    {
      firstname: "",
    },
    {
      lastname: "",
    },
    {
      email: "",
    },
    {
      password: "",
    },
    {
      address: [],
    },
    {
      phoneNumber: "",
    },
  ];
  await Buyer.bulkCreate(buyer);
};
