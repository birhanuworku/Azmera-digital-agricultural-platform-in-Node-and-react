const farmer_kit_order_controller = require("../controllers/farmer_kit_ordercontroller.js");
const farmer_kit_order_route = require("express").Router();
farmer_kit_order_route.post(
  "/addorder",
  farmer_kit_order_controller.addkitOrder
);
farmer_kit_order_route.get(
  "/getallorder",
  farmer_kit_order_controller.get_all_kit_order
);
farmer_kit_order_route.get(
  "/:id",
  farmer_kit_order_controller.get_one_kit_order
);
farmer_kit_order_route.put(
  "/:id",
  farmer_kit_order_controller.update_kit_order
);
farmer_kit_order_route.delete(
  "/:id",
  farmer_kit_order_controller.delete_kit_order
);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = farmer_kit_order_route;
