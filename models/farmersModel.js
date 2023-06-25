const Product = require("./productsModel");

module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define("farmer", {
    farmerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //FarmerID (Foreign Key)  must b added

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
    },
    password: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
    },
    address: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
    },

    profieleimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  // Farmer.hasMany(Product, { foreignKey: "farmerid" });
  return Farmer;
};
