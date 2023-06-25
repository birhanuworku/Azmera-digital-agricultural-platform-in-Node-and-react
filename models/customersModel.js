const Order = require("./ordersModel");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("customer", {
    customerid: {
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
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50], // minimum and maximum length of the password
        notNull: true,
        notEmpty: true,
        // additional validation rules can be added here, such as requiring at least one uppercase letter or special character
      },
    },
    phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10, 15],
      },
    },
    address: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255], // maximum length can be adjusted according to needs
      },
    },
    profieleimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  //Customer.hasMany(Order, { foreignKey: "customerid" });
  return Customer;
};
