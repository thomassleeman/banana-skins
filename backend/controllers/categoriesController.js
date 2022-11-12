const Category = require('../models/categoryModel');
const { json } = require('express');
const AppError = require('../utils/appError');

exports.getAllCats = async (req, res, next) => {
  const doc = await Category.find().sort({ catIndex: 'asc' });

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
};

exports.getAllCatsInclJobs = async (req, res, next) => {
  const doc = await Category.find().sort({ catIndex: 'asc' }).populate('jobs');

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
};

exports.getCat = async (req, res, next) => {
  const doc = await Category.findById(req.params.id);
  // console.log(req.params);

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};

exports.deleteCat = async (req, res, next) => {
  const doc = await Category.findByIdAndDelete(req.params.id);
  console.log(req.params);

  res.status(204).json({
    status: 'success',
    data: {
      data: null,
    },
  });
};

exports.createNewCat = async (req, res, next) => {
  await Category.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: null,
    },
  });
};

exports.updateCat = async (req, res, next) => {
  const doc = await Category.findByIdAndUpdate(req.params.id, req.body);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};

exports.updateCats = async (req, res, next) => {
  const doc1 = await Category.deleteMany();
  const doc2 = await Category.create(req.body.data);

  if (!doc1) {
    return next(new AppError('No documents found with that ID', 404));
  }
  if (!doc2) {
    return next(new AppError('Data not found in request body', 400));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc2,
    },
  });
};
