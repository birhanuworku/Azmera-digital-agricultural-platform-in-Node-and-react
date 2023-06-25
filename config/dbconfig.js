module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "azmera",
  dialect: "mysql",
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
