const db = require("../models/main");

// model
const Customer = db.customers;

// functions

//1. Add Review

const addCustomer = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
  };
  const customer = await Customer.create(data);
  res.status(200).send(customer);
};
const getallCustomer = async (req, res) => {
  const customer = await Customer.findAll({});
  res.status(200).send(customer);
};
module.exports = {
  addCustomer,
  getallCustomer,
};
