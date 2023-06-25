const db = require("../models/main");
// model
const Contact = db.contacts;
// functions
//1. Add Review
const addcomment = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    comment: req.body.comment,
  };
  console.log(data);
  const contact = await Contact.create(data);
  res.status(200).send(contact);
};
const getallcomment = async (req, res) => {
  const contact = await Contact.findAll({});
  res.status(200).send(contact);
};
module.exports = {
  addcomment,
  getallcomment,
};
