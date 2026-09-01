const Order = require("../models/Order");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllOrders = asyncHandler(async (req, res) => {
  const items = await Order.find().sort({ createdAt: -1 });
  res.status(200).json({ status: "success", count: items.length, data: items });
});

const getOrdersById = asyncHandler(async (req, res) => {
  const item = await Order.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", data: item });
});

const createOrders = asyncHandler(async (req, res) => {
  const item = await Order.create(req.body);
  res.status(201).json({ status: "success", message: "Elemento creado correctamente", data: item });
});

const updateOrders = asyncHandler(async (req, res) => {
  const item = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento actualizado correctamente", data: item });
});

const deleteOrders = asyncHandler(async (req, res) => {
  const item = await Order.findByIdAndDelete(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento eliminado correctamente" });
});

module.exports = {
  getAllOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrders
};
