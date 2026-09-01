const Product = require("../models/Product");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllProducts = asyncHandler(async (req, res) => {
  const items = await Product.find().sort({ createdAt: -1 });
  res.status(200).json({ status: "success", count: items.length, data: items });
});

const getProductsById = asyncHandler(async (req, res) => {
  const item = await Product.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", data: item });
});

const createProducts = asyncHandler(async (req, res) => {
  const item = await Product.create(req.body);
  res.status(201).json({ status: "success", message: "Elemento creado correctamente", data: item });
});

const updateProducts = asyncHandler(async (req, res) => {
  const item = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento actualizado correctamente", data: item });
});

const deleteProducts = asyncHandler(async (req, res) => {
  const item = await Product.findByIdAndDelete(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento eliminado correctamente" });
});

module.exports = {
  getAllProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts
};
