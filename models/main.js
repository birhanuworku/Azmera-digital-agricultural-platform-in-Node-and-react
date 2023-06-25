const dbConfig = require("../config/dbconfig.js");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require("./customersModel.js")(sequelize, DataTypes);
db.farmers = require("./farmersModel.js")(sequelize, DataTypes);
db.admins = require("./adminsModel.js")(sequelize, DataTypes);
db.transporters = require("./transportersModel.js")(sequelize, DataTypes);
db.labors = require("./laborsModel.js")(sequelize, DataTypes);
db.products = require("./productsModel.js")(sequelize, DataTypes);
db.orders = require("./ordersModel.js")(sequelize, DataTypes);
db.news = require("./newsModel.js")(sequelize, DataTypes);
db.labor_requests = require("./labor_requestModel.js")(sequelize, DataTypes);
db.farmer_kits = require("./farmer_kitsModel.js")(sequelize, DataTypes);
db.contacts = require("./contactModel.js")(sequelize, DataTypes);
db.farmer_kit_orders = require("./farmer_kit_orderModel.js")(
  sequelize,
  DataTypes
);

// Transaction table is required I think
/*db.sequelize.sync({ alter: true }).then(() => {
  console.log("yes re-sync done!");
});*/
//1 to many relationships
db.farmers.hasMany(db.products, {
  foreignKey: "farmerid",
  as: "product",
});
db.products.belongsTo(db.farmers, {
  foreignKey: "farmerid",
  as: "farmer",
});
/*db.customers.hasMany(db.orders, {
  foreignKey: "customerid",
  as: "order",
});
db.orders.belongsTo(db.customers, {
  foreignKey: "customerid",
  as: "customer",
});*/
// one to one relation for product and order
db.products.hasMany(db.orders, {
  foreignKey: "productid",
  as: "order",
});
db.orders.belongsTo(db.products, {
  foreignKey: "productid",
  as: "product",
});

db.admins.hasMany(db.news, {
  foreignKey: "adminid",
  as: "new",
});
db.news.belongsTo(db.admins, {
  foreignKey: "adminid",
  as: "admin",
});
/* request tabel */
db.farmers.hasMany(db.labor_requests, {
  foreignKey: "farmerid",
  as: "request",
});
db.labor_requests.hasMany(db.farmers, {
  foreignKey: "farmerid",
  as: "farmer",
});

db.labor_requests.hasMany(db.labor_requests, {
  foreignKey: "laborid",
  as: "request",
});
db.labor_requests.belongsTo(db.labor_requests, {
  foreignKey: "laborid",
  as: "labor",
});

db.admins.hasMany(db.farmer_kits, {
  foreignKey: "adminid",
  as: "farmer_kit",
});

db.farmer_kits.belongsTo(db.admins, {
  foreignKey: "adminid",
  as: "admin",
});

// between farmer and farmer_kit_order
db.farmers.hasMany(db.farmer_kit_orders, {
  foreignKey: "farmerid",
  as: "farmer_kit_order",
});

db.farmer_kit_orders.belongsTo(db.farmers, {
  foreignKey: "farmerid",
  as: "farmer",
});

module.exports = db;
