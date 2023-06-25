const productController = require("../controllers/productcontroller.js");
const router = require("express").Router();

router.post(
  "/addProduct",
  productController.upload,
  productController.addProduct
);
router.get("/bycatagory/:catagory", productController.getAllProducts);
router.get("/", productController.getAllProducts);

router.get("/:id", productController.getoneproduct);
router.put("/:id", productController.upload, productController.updateproduct);
router.delete("/:id", productController.deletproduct);
//router.get("/search/:keyword", productController.searchproduct);
/*router.get(
  "/vegitables_and_fruits",
  productController.get_vegetables_and_fruits
);
router.get("/groceries", productController.get_all_grocries);
router.get("/meatproduct", productController.get_all_meat_product);
router.get("/diary", productController.get_all_diary_product);
router.get("/beverages", productController.get_all_beverages);*/
/*router.post("/addproducts", (req, res) => {
  // your callback function logic here
  res.send(productController.addProduct);
});*/
module.exports = router;
