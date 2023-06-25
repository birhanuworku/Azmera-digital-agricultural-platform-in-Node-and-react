/*const Customer = require("./customersModel");
const Product = require("./productsModel");
const Transporter = require("./transportersModel");*/

module.exports = (sequelize, DataTypes) => {
  const Farme_kit_order = sequelize.define("farmer_kit_order", {
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered"),
      allowNull: true,
      defaultValue: "pending",
    },
    //FarmerID (Foreign Key)  must b added
    farmer_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    farmer_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    farmer_email: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    farmer_phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    farmer_address: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
      allowNull: false,
    },
  });
  //Order.belongsTo(Customer, { foreignKey: "customerid" });
  //Order.belongsTo(Product, { foreignKey: "productid" });
  //Order.belongsTo(Transporter, { foreignKey: "transporterid" });
  return Farme_kit_order;
};
