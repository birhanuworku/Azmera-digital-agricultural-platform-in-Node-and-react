const Order = require("./ordersModel.js");
const Farmer = require("./farmersModel.js");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //FarmerID (Foreign Key)  must b added
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstamountincart: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    product_catagory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  //Product.belongsTo(Farmer, { foreignKey: "farmerid" });

  //Product.hasMany(Order, { foreignKey: "productid" });

  return Product;
};

/**
In Order.js file:



const Product = require('./Product');

// define Order model associations
Order.belongsTo(Product, { foreignKey: 'productId' });
 */
/*
In Product.js file:

const Order = require('./Order');

// define Product model associations
Product.hasMany(Order, { foreignKey: 'productId' });

*/
