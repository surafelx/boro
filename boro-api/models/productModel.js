const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Add additional fields as needed
});

module.exports = mongoose.model("Product", ProductSchema);
