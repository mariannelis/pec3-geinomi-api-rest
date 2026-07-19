const express = require("express");
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUsers);
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

module.exports = router;
