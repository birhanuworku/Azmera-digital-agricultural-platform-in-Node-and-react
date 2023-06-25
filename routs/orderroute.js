const ordercontroller = require("../controllers/ordercontroller");
const routeorder = require("express").Router();
routeorder.post("/addorder", ordercontroller.upload, ordercontroller.addOrder);
routeorder.get("/getallorder", ordercontroller.getallorder);
routeorder.get("/:id", ordercontroller.getoneorder);
routeorder.put("/:id", ordercontroller.upload, ordercontroller.updateorder);
routeorder.delete("/:id", ordercontroller.deletorder);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routeorder;
