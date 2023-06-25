const admincontroller = require("../controllers/admincontroller.js");
const routeadmin = require("express").Router();
routeadmin.post("/addadmin", admincontroller.upload, admincontroller.addAdmin);
routeadmin.get("/getalladmin", admincontroller.getallAdmin);
routeadmin.get("/:id", admincontroller.getoneadmin);
routeadmin.put("/:id", admincontroller.upload, admincontroller.updateadmin);
routeadmin.delete("/:id", admincontroller.deletadmin);
routeadmin.post("/login", admincontroller.Login);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routeadmin;
