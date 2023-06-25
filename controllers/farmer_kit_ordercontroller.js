const db = require("../models/main");
// model
const Farmer_kit_order = db.farmer_kit_orders;
// functions
//1. Add Review

const addkitOrder = async (req, res) => {
  let data = {
    status: req.body.status,
    deliveryDate: req.body.deliveryDate,
    farmer_firstname: req.body.farmer_firstname,
    farmer_lastname: req.body.farmer_lastname,
    farmer_email: req.body.farmer_email,
    farmer_phone_number: req.body.farmer_phone_number,
    farmer_address: req.body.farmer_address,
  };

  const kitorder = await Farmer_kit_order.create(data);
  res.status(200).send(kitorder);
};
const get_all_kit_order = async (req, res) => {
  const kitorder = await Farmer_kit_order.findAll({});
  res.status(200).send(kitorder);
};
const get_one_kit_order = async (req, res) => {
  let id = req.params.id;
  let kitorder = await Farmer_kit_order.findOne({ where: { orderid: id } });
  res.status(200).send(kitorder);
};
const update_kit_order = async (req, res) => {
  let id = req.params.id;
  let kitorder = await Farmer_kit_order.update(req.body, {
    where: { orderid: id },
  });
  res.status(200).send(kitorder);
};

const delete_kit_order = async (req, res) => {
  let id = req.params.id;
  await Farmer_kit_order.destroy({ where: { orderid: id } });
  res.status(200).send("Order is deleted !");
};

module.exports = {
  addkitOrder,
  get_all_kit_order,
  get_one_kit_order,
  update_kit_order,
  delete_kit_order,
};
