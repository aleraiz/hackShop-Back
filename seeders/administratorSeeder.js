const Administrator = require("../models/Administrator");

module.export = async function () {
  const administrator = [
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
  ];
  await Administrator.bulkCreate(administrator);
};
