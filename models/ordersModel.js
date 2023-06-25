/*const Customer = require("./customersModel");
const Product = require("./productsModel");
const Transporter = require("./transportersModel");*/

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
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
    /*status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered"),
      allowNull: true,
      defaultValue: "pending",
    },*/
    //FarmerID (Foreign Key)  must b added
    customer_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    customer_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    customer_address: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255], // maximum length can be adjusted according to needs
      },
    },
    /*customer_profieleimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },*/
  });
  //Order.belongsTo(Customer, { foreignKey: "customerid" });
  //Order.belongsTo(Product, { foreignKey: "productid" });
  //Order.belongsTo(Transporter, { foreignKey: "transporterid" });
  return Order;
};
