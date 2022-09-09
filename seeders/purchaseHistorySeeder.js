const { PurchaseHistory } = require("../models");
module.exports = async function () {
  const purchaseHistory = [
    {
      status: "",
      paymentMethod: "Visa Credito",
      productsList: [],
    },
  ];
  await PurchaseHistory.bulkCreate(purchaseHistory);
};
