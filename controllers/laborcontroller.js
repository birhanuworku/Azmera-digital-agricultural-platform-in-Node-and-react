// image Upload
const multer = require("multer");
const path = require("path");

const db = require("../models/main");

// model
const Labor = db.labors;

const bcrypt = require("bcrypt");

const addLabor = async (req, res) => {
  let data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    selfdescription: req.body.selfdescription,
    profieleimage: req.file.path,
  };
  //authentication
  data.password = await bcrypt.hash(data.password, 10);

  let inputemaill = req.body.email;
  const alreadyexistlabor = await Labor.findOne({
    where: { email: inputemaill },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (alreadyexistlabor) {
    return res.status(409).json({
      message: " Labor with the email : " + inputemaill + " already exists!",
    });
  }
  //up to here
  const labor = await Labor.create(data);
  res.status(200).send(labor);
};

const Login = async (req, res) => {
  try {
    let data = {
      password: req.body.password,
      email: req.body.email,
    };
    const laborcheck = await Labor.findOne({
      where: { email: data.email },
    });

    if (!laborcheck) {
      return res.json({ error: "Labor Doesn't Exist" });
    }

    const match = await bcrypt.compare(data.password, laborcheck.password);
    if (!match) {
      return res.json({ error: "Wrong Username And Password Combination" });
    }

    res.json("YOU LOGGED IN!!!");
  } catch (error) {
    console.log("Error: ", error);
    res.json({ error: "An error occurred while logging in" });
  }
};

const getallLabor = async (req, res) => {
  const labor = await Labor.findAll({});
  res.status(200).send(labor);
};

const getonelabor = async (req, res) => {
  let id = req.params.id;
  let labor = await Admin.findOne({ where: { laborid: id } });
  res.status(200).send(labor);
};

const updatelabor = async (req, res) => {
  let id = req.params.id;
  let labor = await Labor.update(req.body, { where: { laborid: id } });
  res.status(200).send(labor);
};

const deletlabor = async (req, res) => {
  let id = req.params.id;
  await Labor.destroy({ where: { laborid: id } });
  res.status(200).send("Labor is deleted !");
};

// . Upload Admin Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/labor_image");
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
  addLabor,
  getallLabor,
  getonelabor,
  updatelabor,
  deletlabor,
  upload,
  Login,
};
