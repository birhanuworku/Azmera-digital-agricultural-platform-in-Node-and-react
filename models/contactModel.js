module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("contact", {
    contactid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //FarmerID (Foreign Key)  must b added

    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT, // or DataTypes.STRING, depending on the maximum length
      allowNull: true,
    },
  });
  //Admin.hasMany(News, { foreignKey: "adminid" });

  return Contact;
};
