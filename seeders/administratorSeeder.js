const { Administrator } = require("../models");

module.exports = async function () {
  const administrator = [
    {
      firstname: "Carlos",
      lastname: "Castro",
      email: "carloscastro@gmail.com",
      password: "123",
    },
    {
      firstname: "Admin",
      lastname: "Admin",
      email: "admin@admin.com",
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
