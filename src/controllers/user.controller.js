const User = require("../models/User");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllUsers = asyncHandler(async (req, res) => {
  const items = await User.find().sort({ createdAt: -1 });
  res.status(200).json({ status: "success", count: items.length, data: items });
});

const getUsersById = asyncHandler(async (req, res) => {
  const item = await User.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", data: item });
});

const createUsers = asyncHandler(async (req, res) => {
  const item = await User.create(req.body);
  res.status(201).json({ status: "success", message: "Elemento creado correctamente", data: item });
});

const updateUsers = asyncHandler(async (req, res) => {
  const item = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento actualizado correctamente", data: item });
});

const deleteUsers = asyncHandler(async (req, res) => {
  const item = await User.findByIdAndDelete(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento eliminado correctamente" });
});

module.exports = {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
};
