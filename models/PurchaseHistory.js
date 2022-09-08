module.exports = (sequelize, Model, DataTypes) => {
  class PurchaseHistory extends Model {}

  PurchaseHistory.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      paymentMethod: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      productsList: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "purchaseHistory",
    }
  );
  return PurchaseHistory;
};
