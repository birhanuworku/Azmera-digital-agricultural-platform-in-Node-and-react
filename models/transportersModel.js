//const { labor } = require("./main");
const Order = require("./ordersModel");
module.exports = (sequelize, DataTypes) => {
  const Transporter = sequelize.define("transporter", {
    transporterid: {
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
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
      allowNull: false,
    },
    cartype: {
      type: DataTypes.TEXT,
    },
    ratingperkm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    profieleimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  //Transporter.hasMany(Order, { foreignKey: "transporterid" });
  return Transporter;
};
