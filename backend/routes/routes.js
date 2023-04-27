const express = require("express");


const {
  getProduct,
  createProduct,
  update,
  deleteProduct,
  getProductById
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getProduct);
router.route("/createproduct").post( createProduct);
router
  .route("/:id")
  .put(update)
  .delete(deleteProduct)
  .get(getProductById)

module.exports = router;