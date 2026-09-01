const express = require("express");
const {
  getAllOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrders
} = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrders);
router.route("/:id").get(getOrdersById).put(updateOrders).delete(deleteOrders);

module.exports = router;
