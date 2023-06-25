const db = require("../models/main");
const Farmer_kit = db.farmer_kits;

// image Upload
const multer = require("multer");
const path = require("path");

const additem = async (req, res) => {
  let info = {
    item_id: req.body.item_id,
    item_name: req.body.item_name,
    //image: req.file.path,
    item_description: req.body.item_description,
    item_catagory: req.body.item_catagory,
    item_image: req.file.path,
    item_price: req.body.item_price,
  };

  const farmer_kit = await Farmer_kit.create(info);
  res.status(200).send(farmer_kit);
  console.log(farmer_kit);
};
const getallitem = async (req, res) => {
  let farmer_kit = await Farmer_kit.findAll();
  res.status(200).send(farmer_kit);
};

const getoneitem = async (req, res) => {
  let id = req.params.id;
  let farmer_kit = await Farmer_kit.findOne({ where: { item_id: id } });
  res.status(200).send(farmer_kit);
};

const updateitem = async (req, res) => {
  let id = req.params.id;
  let farmer_kit = await Farmer_kit.update(req.body, {
    where: { item_id: id },
  });
  res.status(200).send(farmer_kit);
};

const deletitem = async (req, res) => {
  let id = req.params.id;
  await Farmer_kit.destroy({ where: { item_id: id } });
  res.status(200).send("Farmer kit  is deleted !");
};

// . Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/farmers_kit");
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
}).single("item_image");

//connect 1 to many relationship
module.exports = {
  upload,
  additem,
  getallitem,
  getoneitem,
  updateitem,
  deletitem,
};
