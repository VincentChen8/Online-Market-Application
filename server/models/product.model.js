import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  description: {
    type: String,

  },
  price: {
    type: Number,

  },
  quantity: {
    type: Number,

  },
  category: {
    type: String,
    
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;

