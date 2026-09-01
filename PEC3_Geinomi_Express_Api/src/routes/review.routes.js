const express = require("express");
const {
  getAllReviews,
  getReviewsById,
  createReviews,
  updateReviews,
  deleteReviews
} = require("../controllers/review.controller");

const router = express.Router();

router.route("/").get(getAllReviews).post(createReviews);
router.route("/:id").get(getReviewsById).put(updateReviews).delete(deleteReviews);

module.exports = router;
