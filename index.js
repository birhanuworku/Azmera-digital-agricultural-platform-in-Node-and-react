const express = require("express");
const cors = require("cors");
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
var corOptions = {
  origin: "http://localhost:3000",
};
//static Images Folder
app.use("/Images", express.static("./Images"));
// routers
const router = require("./routs/productrouter.js");
const routet = require("./routs/farmerrouter.js");
const routeadmin = require("./routs/adminroute.js");
const routecustomer = require("./routs/customerroute.js");
const routelabor = require("./routs/laborroute.js");
const routenew = require("./routs/newroute.js");
const routeorder = require("./routs/orderroute.js");
const routetransporter = require("./routs/transporterrute.js");
const requestrouter = require("./routs/labor_requestroute.js");
const farmer_kitrouter = require("./routs/farmer_kitroute.js");
const contactus_router = require("./routs/contactroute.js");
const farmer_kit_order_route = require("./routs/farmer_kit_order_route.js");

app.use("/api/products", router);
app.use("/api/farmers", routet);
app.use("/api/admins", routeadmin);
app.use("/api/customers", routecustomer);
app.use("/api/labors", routelabor);
app.use("/api/news", routenew);
app.use("/api/orders", routeorder);
app.use("/api/transporters", routetransporter);
app.use("/api/requests", requestrouter);
app.use("/api/items", farmer_kitrouter);
app.use("/api/comments", contactus_router);
app.use("/api/farmer_kit_orders", farmer_kit_order_route);

app.get("/", (req, res) => {
  res.json({
    message: "hello from node js and express and today is shine day",
  });
});
app.listen(8000, () => {
  console.log("Server running on port 8000...");
});
