import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  name: {
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

const Category = mongoose.model('Categories', CategorySchema);
export default Category;