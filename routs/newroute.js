const newscontroller = require("../controllers/newcontroller.js");
const routenew = require("express").Router();
routenew.post("/addnew", newscontroller.upload, newscontroller.addNews);
routenew.get("/getallnew", newscontroller.getallNews);
routenew.delete("/:id", newscontroller.deletnews);
routenew.get("/:id", newscontroller.getonenews);

/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routenew;
