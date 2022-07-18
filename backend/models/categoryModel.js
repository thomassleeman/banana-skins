const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Every category must have a title'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters'],
    },
    description: {
      type: String,
      trim: true,
    },
    subTotal: {
      type: Number,
    },
  },
  { collection: 'categories' }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
