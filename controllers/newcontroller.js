// image Upload
const multer = require("multer");
const path = require("path");

const db = require("../models/main");
// model
const New = db.news;
// functions

//1. Add Review

const addNews = async (req, res) => {
  let data = {
    title: req.body.title,
    content: req.body.content,
    image: req.file.path,
    adminid: req.body.adminid,
  };

  const news = await New.create(data);
  res.status(200).send(news);
};
const getallNews = async (req, res) => {
  const news = await New.findAll({});
  res.status(200).send(news);
};

const getonenews = async (req, res) => {
  let idd = req.params.id;
  let news = await New.findOne({
    where: { id: idd },
  });

  res.status(200).json(news);
};

const deletnews = async (req, res) => {
  let id = req.params.id;
  await New.destroy({ where: { newsid: id } });
  res.status(200).send("News is deleted !");
};

// . Upload Admin Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/news_image");
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

module.exports = {
  addNews,
  getallNews,
  deletnews,
  getonenews,
  upload,
};
