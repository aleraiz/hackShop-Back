module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      stock: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      slug: {
        type: DataTypes.STRING(200),
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
