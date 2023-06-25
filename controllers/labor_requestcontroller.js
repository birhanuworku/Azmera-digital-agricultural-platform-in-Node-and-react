const db = require("../models/main");

// model
const Labor_request = db.labor_requests;
// functions
//1. Add Review
const addrequest = async (req, res) => {
  let data = {
    status: req.body.status,
  };
  const labor_request = await Labor_request.create(data);
  res.status(200).send(labor_request);
};
const getallrequest = async (req, res) => {
  const labor_request = await Labor_request.findAll({});
  res.status(200).send(labor_request);
};
const getonerequest = async (req, res) => {
  let id = req.params.id;
  let labor_request = await Admin.findOne({ where: { requestid: id } });
  res.status(200).send(labor_request);
};
const updaterequest = async (req, res) => {
  let id = req.params.id;
  let labor_request = await Labor_request.update(req.body, {
    where: { requestid: id },
  });
  res.status(200).send(labor_request);
};
const deletrequest = async (req, res) => {
  let id = req.params.id;
  await Labor_request.destroy({ where: { requestid: id } });
  res.status(200).send("Request is deleted !");
};
module.exports = {
  addrequest,
  getallrequest,
  getonerequest,
  updaterequest,
  deletrequest,
};
