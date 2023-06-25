const Admin = require("./adminsModel");

module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define("news", {
    newsid: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publishedby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  //News.belongsTo(Admin, { foreignKey: "adminid" });
  return News;
};
