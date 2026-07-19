const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    isPublished: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
