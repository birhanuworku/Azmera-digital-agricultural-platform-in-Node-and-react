const transportercontroler = require("../controllers/transportercontroller.js");
const routetransporter = require("express").Router();
routetransporter.post(
  "/addtransporter",
  transportercontroler.upload,
  transportercontroler.addTransporter
);
routetransporter.get(
  "/getalltransporter",
  transportercontroler.getalltransporter
);
routetransporter.get("/:id", transportercontroler.getonetransporter);
routetransporter.put(
  "/:id",
  transportercontroler.upload,
  transportercontroler.updatetransporter
);
routetransporter.delete("/:id", transportercontroler.delettransporter);
routetransporter.post("/login", transportercontroler.Login);

module.exports = routetransporter;
