const laborcontroller = require("../controllers/laborcontroller");
const routelabor = require("express").Router();
routelabor.post("/addlabor", laborcontroller.upload, laborcontroller.addLabor);
routelabor.get("/getalllabor", laborcontroller.getallLabor);
routelabor.get("/:id", laborcontroller.getonelabor);
routelabor.put("/:id", laborcontroller.upload, laborcontroller.updatelabor);
routelabor.delete("/:id", laborcontroller.deletlabor);
routelabor.post("/login", laborcontroller.Login);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routelabor;
