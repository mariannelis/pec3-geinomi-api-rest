const Category = require("../models/Category");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllCategories = asyncHandler(async (req, res) => {
  const items = await Category.find().sort({ createdAt: -1 });
  res.status(200).json({ status: "success", count: items.length, data: items });
});

const getCategoriesById = asyncHandler(async (req, res) => {
  const item = await Category.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", data: item });
});

const createCategories = asyncHandler(async (req, res) => {
  const item = await Category.create(req.body);
  res.status(201).json({ status: "success", message: "Elemento creado correctamente", data: item });
});

const updateCategories = asyncHandler(async (req, res) => {
  const item = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento actualizado correctamente", data: item });
});

const deleteCategories = asyncHandler(async (req, res) => {
  const item = await Category.findByIdAndDelete(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento eliminado correctamente" });
});

module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategories,
  deleteCategories
};
