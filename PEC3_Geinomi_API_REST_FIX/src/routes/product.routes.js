const express = require("express");
const {
  getAllProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts
} = require("../controllers/product.controller");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProducts);
router.route("/:id").get(getProductsById).put(updateProducts).delete(deleteProducts);

module.exports = router;
