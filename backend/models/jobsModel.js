const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A job must have a name'],
    },
    description: {
      type: String,
    },
    cost: {
      type: Number,
    },
    images: {
      type: String,
    },
    subjectTo: {
      type: Number, //ie the ID of the job(s) it is subject to.
    },
    quotes: [
      {
        supplierName: {
          type: String,
        },
        tel: {
          type: Number,
        },
        email: {
          type: String,
        },
        address: {
          type: String,
        },
        netPrice: {
          type: Number,
        },
        vat: {
          type: Number,
        },
        price: {
          type: Number,
        },
        attachments: {
          type: String,
        },
      },
    ],
  },
  { collection: 'jobs' }
);

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
