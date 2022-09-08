const Administrator = require("../models/Administrator");

module.export = async function () {
  const administrator = [
    {
      firstname: "Carlos",
      lastname: "Castro",
      email: "carloscastro@gmail.com",
      password: "123",
    },
    {
      firstname: "Pablo",
      lastname: "Perez",
      email: "pabloperez@gmail.com",
      password: "123",
    },

    {
      firstname: "Martin",
      lastname: "Rodriguez",
      email: "martinrodriguez@gmail.com",
      password: "123",
    },
  ];
  await Administrator.bulkCreate(administrator);
};
