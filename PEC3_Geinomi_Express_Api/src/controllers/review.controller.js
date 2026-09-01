const Review = require("../models/Review");
const asyncHandler = require("../middlewares/asyncHandler");

const getAllReviews = asyncHandler(async (req, res) => {
  const items = await Review.find().sort({ createdAt: -1 });
  res.status(200).json({ status: "success", count: items.length, data: items });
});

const getReviewsById = asyncHandler(async (req, res) => {
  const item = await Review.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", data: item });
});

const createReviews = asyncHandler(async (req, res) => {
  const item = await Review.create(req.body);
  res.status(201).json({ status: "success", message: "Elemento creado correctamente", data: item });
});

const updateReviews = asyncHandler(async (req, res) => {
  const item = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento actualizado correctamente", data: item });
});

const deleteReviews = asyncHandler(async (req, res) => {
  const item = await Review.findByIdAndDelete(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Elemento no encontrado");
  }

  res.status(200).json({ status: "success", message: "Elemento eliminado correctamente" });
});

module.exports = {
  getAllReviews,
  getReviewsById,
  createReviews,
  updateReviews,
  deleteReviews
};
