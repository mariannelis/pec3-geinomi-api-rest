const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

const shippingAddressSchema = new mongoose.Schema(
  {
    city: { type: String, required: true },
    country: { type: String, required: true },
    addressLine: { type: String, required: true }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    items: { type: [orderItemSchema], required: true, default: [] },
    total: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
    shippingAddress: { type: shippingAddressSchema, required: true },
    paymentMethod: { type: String, enum: ["card", "paypal", "cash"], default: "card" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
