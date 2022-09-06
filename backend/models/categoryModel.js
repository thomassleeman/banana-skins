const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    catIndex: {
      type: Number,
      unique: true,
      required: [true, 'Every category must have an index'],
    },
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
    jobs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Jobs',
      },
    ],
  },
  { collection: 'categories' }
);

// Child Referencing: This code populates the Jobs.
// regex below is equivalent to calling `pre()` on `find`, `findOne`, `findOneAndUpdate`.

// categorySchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'jobs',
//   });
//   next();
// });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
