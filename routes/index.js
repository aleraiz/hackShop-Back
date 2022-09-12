const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(adminRoutes);
  app.use(userRoutes);
};
