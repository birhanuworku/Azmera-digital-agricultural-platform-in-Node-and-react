const farmer_kitcontroller = require("../controllers/farmer_kitscontroller.js");
const routefarmer_kit = require("express").Router();
routefarmer_kit.post(
  "/additem",
  farmer_kitcontroller.upload,
  farmer_kitcontroller.additem
);
routefarmer_kit.get("/getallitem", farmer_kitcontroller.getallitem);
routefarmer_kit.get("/:id", farmer_kitcontroller.getoneitem);
routefarmer_kit.put(
  "/:id",
  farmer_kitcontroller.upload,
  farmer_kitcontroller.updateitem
);
routefarmer_kit.delete("/:id", farmer_kitcontroller.deletitem);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = routefarmer_kit;
