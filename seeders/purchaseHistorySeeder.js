const PurchaseHistory = require("../models/PurchaseHistory");
module.export = async function () {
  const purchaseHistory = [
    {
      status: "",
    },
    {
      paymentMethod: "",
    },
    {
      productsList: [],
    },
  ];
  await PurchaseHistory.bulkCreate(purchaseHistory);
};
