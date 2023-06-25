const requestcontroller = require("../controllers/labor_requestcontroller.js");
const requestrouter = require("express").Router();
requestrouter.post("/addrequest", requestcontroller.addrequest);
requestrouter.get("/gatallrequest", requestcontroller.getallrequest);
requestrouter.get("/:id", requestcontroller.getonerequest);
requestrouter.put("/:id", requestcontroller.updaterequest);
requestrouter.delete("/:id", requestcontroller.deletrequest);
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = requestrouter;
