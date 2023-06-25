// image Upload
const multer = require("multer");
const path = require("path");

const bcrypt = require("bcrypt");

const db = require("../models/main");
// model
const Farmer = db.farmers;
const Product = db.products;
const Request = db.labor_requests;
const Farmer_kit_order = db.farmer_kit_orders;
const addFarmer = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    profieleimage: req.file.path,
  };
  data.password = await bcrypt.hash(data.password, 10);
  //authentication
  let inputemaill = req.body.email;
  const alreadyexistfarmer = await Farmer.findOne({
    where: { email: inputemaill },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (alreadyexistfarmer) {
    return res.status(409).json({
      message: " Farmer with the email : " + inputemaill + " already exists!",
    });
  }

  const farmer = await Farmer.create(data);
  res.status(200).send(farmer);
};

//Farmer Login Authentication

const Login = async (req, res) => {
  try {
    let data = {
      password: req.body.password,
      email: req.body.email,
    };
    const farmercheck = await Farmer.findOne({
      where: { email: data.email },
    });

    if (!farmercheck) {
      return res.json({ error: "Farmer Doesn't Exist" });
    }

    const match = await bcrypt.compare(data.password, farmercheck.password);
    if (!match) {
      return res.json({ error: "Wrong Username And Password Combination" });
    }

    res.json("YOU LOGGED IN!!!");
  } catch (error) {
    console.log("Error: ", error);
    res.json({ error: "An error occurred while logging in" });
  }
};

//get all farmer
const getallFarmer = async (req, res) => {
  const farmer = await Farmer.findAll({
    include: [
      {
        model: Product,
        as: "product",
      },
      {
        model: Request,
        as: "request",
      },
      {
        model: Farmer_kit_order,
        as: "farmer_kit_order",
      },
    ],
  });
  res.status(200).send(farmer);
};

//get one farmer

const getonefarmer = async (req, res) => {
  let id = req.params.id;
  let farmer = await Farmer.findOne({
    include: [
      {
        model: Product,
        as: "product",
      },
      {
        model: Request,
        as: "request",
      },
      {
        model: Farmer_kit_order,
        as: "farmer_kit_order",
      },
    ],

    where: { farmerid: id },
  });
  res.status(200).send(farmer);
};

//update farmer

const updatefarmer = async (req, res) => {
  let id = req.params.id;
  let farmer = await Farmer.update(req.body, { where: { farmerid: id } });
  res.status(200).send(farmer);
};

//delet farmer

const deletfarmer = async (req, res) => {
  let id = req.params.id;
  await Farmer.destroy({ where: { farmerid: id } });
  res.status(200).send("Farmer is deleted !");
};

// . Upload farmer Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/farmer_image");
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
}).single("profieleimage");

//connect 1 to many relationship

module.exports = {
  addFarmer,
  getallFarmer,
  getonefarmer,
  updatefarmer,
  deletfarmer,
  upload,
  Login,
};
