const db = require("../models/main");
const { Op } = require("sequelize");
const Product = db.products;
const Order = db.orders;
// image Upload
const multer = require("multer");
const path = require("path");

const addProduct = async (req, res) => {
  let info = {
    productid: req.body.productid,
    productname: req.body.productname,
    quantity: req.body.quantity,
    //image: req.file.path,
    price: req.body.price,
    description: req.body.description,
    product_catagory: req.body.product_catagory,
    image: req.file.path,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
};
const getAllProducts = async (req, res) => {
  let catagory = req.params.catagory;
  if (catagory === undefined || catagory === null || catagory === "All") {
    let products = await Product.findAll({
      include: [
        {
          model: Order,
          as: "order",
        },
      ],
    });
    res.status(200).send(products);
  } else {
    let bycatagory = await Product.findAll({
      include: [
        {
          model: Order,
          as: "order",
        },
      ],

      where: { product_catagory: catagory },
    });
    res.status(200).send(bycatagory);
  }
};

const getoneproduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({
    include: [
      {
        model: Order,
        as: "order",
      },
    ],

    where: { productid: id },
  });

  res.status(200).json(product);
};

/*const searchproduct = async (req, res) => {
  let keyword = req.params.keyword;
  let product = await Product.findAll({
    include: [
      {
        model: Order,
        as: "order",
      },
    ],

    where: {
      productname: {
        [Op.like]: `%${keyword}%`,
      },
    },
  });

  res.status(200).json(product);
};*/

const updateproduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { productid: id } });
  res.status(200).send(product);
};

//get products by catagory

/*const get_vegetables_and_fruits = async (req, res) => {
  let products = await Product.findAll({
    where: {
      product_category: ["vegetable", "fruit"],
    },
  });
  res.status(200).send(products);
};

const get_all_grocries = async (req, res) => {
  let products = await Product.findAll({
    where: {
      product_category: "groceries",
    },
  });
  res.status(200).send(products);
};

const get_all_meat_product = async (req, res) => {
  let products = await Product.findAll({
    where: {
      product_category: "meat product",
    },
  });
  res.status(200).send(products);
};

const get_all_diary_product = async (req, res) => {
  let products = await Product.findAll({
    where: {
      product_category: "diary",
    },
  });
  res.status(200).send(products);
};

const get_all_beverages = async (req, res) => {
  let products = await Product.findAll({
    where: {
      product_category: "beverages",
    },
  });
  res.status(200).send(products);
};
*/
const deletproduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { productid: id } });
  res.status(200).send("Product is deleted !");
};

// . Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/product_image");
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
}).single("image");

//connect 1 to many relationship
module.exports = {
  addProduct,
  getAllProducts,
  getoneproduct,
  updateproduct,
  deletproduct,
  //searchproduct,
  upload,
};
