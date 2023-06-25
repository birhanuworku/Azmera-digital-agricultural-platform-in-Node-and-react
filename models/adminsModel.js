module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("admin", {
    adminid: {
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
    profieleimage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  //Admin.hasMany(News, { foreignKey: "adminid" });

  return Admin;
};
