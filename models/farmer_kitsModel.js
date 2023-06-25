module.exports = (sequelize, DataTypes) => {
  const Farmer_kit = sequelize.define("farmer_kit", {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    //FarmerID (Foreign Key)  must b added
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_catagory: {
      type: DataTypes.STRING, // or DataTypes.TEXT, depending on the maximum length
      allowNull: false,
    },
    item_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  //Admin.hasMany(News, { foreignKey: "adminid" });

  return Farmer_kit;
};
