const contactcontroller = require("../controllers/contactcontroller.js");
const routecontact = require("express").Router();
routecontact.post("/addcomment", contactcontroller.addcomment);
routecontact.get("/getallcomment", contactcontroller.getallcomment);
//routeadmin.get("/:id", admincontroller.getoneadmin);
//routeadmin.put("/:id", admincontroller.upload, admincontroller.updateadmin);
//routeadmin.delete("/:id", admincontroller.deletadmin);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routecontact;
