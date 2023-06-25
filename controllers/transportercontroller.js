// image Upload
const multer = require("multer");
const path = require("path");

const db = require("../models/main");
// model
const Transporter = db.transporters;
// functions
const bcrypt = require("bcrypt");
const addTransporter = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    cartype: req.body.cartype,
    profieleimage: req.file.path,
    ratingperkm: req.body.ratingperkm,
  };

  //authentication
  data.password = await bcrypt.hash(data.password, 10);
  let inputemaill = req.body.email;
  const alreadyexisttransporter = await Transporter.findOne({
    where: { email: inputemaill },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (alreadyexisttransporter) {
    return res.status(409).json({
      message:
        " Transporter with the email : " + inputemaill + " already exists!",
    });
  }
  const transporter = await Transporter.create(data);
  res.status(200).send(transporter);
};

const Login = async (req, res) => {
  try {
    let data = {
      password: req.body.password,
      email: req.body.email,
    };
    const transportercheck = await Transporter.findOne({
      where: { email: data.email },
    });

    if (!transportercheck) {
      return res.json({ error: "Transporter Doesn't Exist" });
    }

    const match = await bcrypt.compare(
      data.password,
      transportercheck.password
    );
    if (!match) {
      return res.json({ error: "Wrong Username And Password Combination" });
    }

    res.json("YOU LOGGED IN!!!");
  } catch (error) {
    console.log("Error: ", error);
    res.json({ error: "An error occurred while logging in" });
  }
};

const getalltransporter = async (req, res) => {
  const transporter = await Transporter.findAll({});
  res.status(200).send(transporter);
};
const getonetransporter = async (req, res) => {
  let id = req.params.id;
  let transporter = await Product.findOne({ where: { transporterid: id } });
  res.status(200).send(transporter);
};

const updatetransporter = async (req, res) => {
  let id = req.params.id;
  let transporter = await Transporter.update(req.body, {
    where: { transporterid: id },
  });
  res.status(200).send(transporter);
};

const delettransporter = async (req, res) => {
  let id = req.params.id;
  await Transporter.destroy({ where: { transporterid: id } });
  res.status(200).send("Transporter is deleted !");
};

// . Upload Admin Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/transporter_image");
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
  addTransporter,
  getalltransporter,
  getonetransporter,
  updatetransporter,
  delettransporter,
  upload,
  Login,
};
