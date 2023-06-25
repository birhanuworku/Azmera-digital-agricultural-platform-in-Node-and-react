// image Upload
const multer = require("multer");
const path = require("path");

const db = require("../models/main");
// model
const Admin = db.admins;
const New = db.news;
const Farmer_kit = db.farmer_kits;

const bcrypt = require("bcrypt");
// functions
//1. Add Review
const addAdmin = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    profieleimage: req.file.path,
  };
  //authentication
  //data.password = bcrypt.hash(data.password, 10);
  data.password = await bcrypt.hash(data.password, 10);
  let inputemaill = req.body.email;
  const alreadyexistadmin = await Admin.findOne({
    where: { email: inputemaill },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (alreadyexistadmin) {
    return res.status(409).json({
      message: " Admin with the email : " + inputemaill + " already exists!",
    });
  }
  const admin = await Admin.create(data);
  res.status(200).send(admin);
};

//Admin Login Authentication

const Login = async (req, res) => {
  try {
    let data = {
      password: req.body.password,
      email: req.body.email,
    };
    const admincheck = await Admin.findOne({
      where: { email: data.email },
    });

    if (!admincheck) {
      return res.json({ error: "Admin Doesn't Exist" });
    }

    const match = await bcrypt.compare(data.password, admincheck.password);
    if (!match) {
      return res.json({ error: "Wrong Username And Password Combination" });
    }

    res.json("YOU LOGGED IN!!!");
  } catch (error) {
    console.log("Error: ", error);
    res.json({ error: "An error occurred while logging in" });
  }
};

const getallAdmin = async (req, res) => {
  const admin = await Admin.findAll({
    include: [
      {
        model: New,
        as: "new",
      },
      {
        model: Farmer_kit,
        as: "farmer_kit",
      },
    ],
  });
  res.status(200).send(admin);
};

const getoneadmin = async (req, res) => {
  let id = req.params.id;
  let admin = await Admin.findOne({
    include: [
      {
        model: New,
        as: "new",
      },
      {
        model: Farmer_kit,
        as: "farmer_kit",
      },
    ],

    where: { adminid: id },
  });
  res.status(200).send(admin);
};

const updateadmin = async (req, res) => {
  let id = req.params.id;
  let admin = await Admin.update(req.body, { where: { adminid: id } });
  res.status(200).send(admin);
};

const deletadmin = async (req, res) => {
  let id = req.params.id;
  await Admin.destroy({ where: { adminid: id } });
  res.status(200).send("Admin is deleted !");
};

//Login

// . Upload Admin Image Controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/admin_image");
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

module.exports = {
  addAdmin,
  getallAdmin,
  getoneadmin,
  updateadmin,
  deletadmin,
  upload,
  Login,
};
