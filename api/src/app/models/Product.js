const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    barcode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['imported', 'draft'],
      default: 'imported',
    },
    imported_t: {
      type: Date,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    packaging: {
      type: String,
      required: true,
    },
    brands: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
