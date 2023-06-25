/*const Customer = require("./customersModel");
const Product = require("./productsModel");
const Transporter = require("./transportersModel");*/

module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define("labor_request", {
    requestid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("requested", "rejected", "accepted"),
      allowNull: true,
      defaultValue: "requested",
    },
    //FarmerID (Foreign Key)  must b added
  });
  //Order.belongsTo(Customer, { foreignKey: "customerid" });
  //Order.belongsTo(Product, { foreignKey: "productid" });
  //Order.belongsTo(Transporter, { foreignKey: "transporterid" });
  return Request;
};
