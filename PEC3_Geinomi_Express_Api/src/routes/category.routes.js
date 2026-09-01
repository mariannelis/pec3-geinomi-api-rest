const express = require("express");
const {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories
} = require("../controllers/category.controller");

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategories);
router.route("/:id").get(getCategoriesById).put(updateCategories).delete(deleteCategories);

module.exports = router;
