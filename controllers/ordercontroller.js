// image Upload
const multer = require("multer");
const path = require("path");

const db = require("../models/main");
// model
const Order = db.orders;
// functions
//1. Add Review

const addOrder = async (req, res) => {
  let data = {
    //status: req.body.status,
    //deliveryDate: req.body.deliveryDate,
    customer_firstname: req.body.customer_firstname,
    customer_lastname: req.body.customer_lastname,
    customer_email: req.body.customer_email,
    customer_password: req.body.customer_password,
    customer_phone_number: req.body.customer_phone_number,
    customer_address: req.body.customer_address,
    //customer_profieleimage: req.file.path,
  };

  const order = await Order.create(data);
  res.status(200).send(order);
};
const getallorder = async (req, res) => {
  const order = await Order.findAll({});
  res.status(200).send(order);
};
const getoneorder = async (req, res) => {
  let id = req.params.id;
  let order = await Admin.findOne({ where: { orderid: id } });
  res.status(200).send(order);
};
const updateorder = async (req, res) => {
  let id = req.params.id;
  let order = await Order.update(req.body, { where: { orderid: id } });
  res.status(200).send(order);
};

const deletorder = async (req, res) => {
  let id = req.params.id;
  await Order.destroy({ where: { orderid: id } });
  res.status(200).send("Order is deleted !");
};

// . Upload Admin Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/customer_image");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "10000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("customer_profieleimage");

module.exports = {
  addOrder,
  getallorder,
  getoneorder,
  updateorder,
  deletorder,
  upload,
};
