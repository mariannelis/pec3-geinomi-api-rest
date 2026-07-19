const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    capacity: { type: String, default: "" },
    weight: { type: String, default: "" },
    material: { type: String, default: "" },
    color: { type: String, default: "" },
    image: { type: String, default: "" },
    status: { type: String, enum: ["available", "out_of_stock", "draft"], default: "available" },
    featured: { type: Boolean, default: false },
    createdBy: { type: String, default: "admin@geinomi.com" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
