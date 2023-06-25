const customercontroller = require("../controllers/customercontroller.js");
const routecustomer = require("express").Router();
routecustomer.post("/addcustomer", customercontroller.addCustomer);
routecustomer.get("/getallcustomer", customercontroller.getallCustomer);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routecustomer;
