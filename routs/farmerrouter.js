const farmercontroller = require("../controllers/farmercontroller.js");
const routet = require("express").Router();
routet.post("/addfarmer", farmercontroller.upload, farmercontroller.addFarmer);
routet.get("/gatallfarmers", farmercontroller.getallFarmer);
routet.get("/:id", farmercontroller.getonefarmer);
routet.put("/:id", farmercontroller.upload, farmercontroller.updatefarmer);
routet.delete("/:id", farmercontroller.deletfarmer);
routet.post("/login", farmercontroller.Login);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routet;
