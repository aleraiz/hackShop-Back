const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class Client extends Model {
    async comparePassword(password, passwordFront) {
      const verifyPassword = await bcrypt.compare(passwordFront, password);
      // if (!verifyPassword) {
      //   return res.status(401).json({ error: "Invalid credentials" });
      // }
    }
  }
  Client.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(319),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "client",
      hooks: {
        beforeCreate: async (user, options) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
    }
  );
  return Client;
};
