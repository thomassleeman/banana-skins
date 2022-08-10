const Category = require('../models/categoryModel');
const { json } = require('express');

exports.getAllCats = async (req, res, next) => {
  const doc = await Category.find();

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
  console.log(req.params);

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
