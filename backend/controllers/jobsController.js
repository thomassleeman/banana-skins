const Jobs = require('../models/jobsModel');

exports.getAllJobs = async (req, res, next) => {
  // const doc = await Jobs.find().populate('Category');
  const doc = await Jobs.find();

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
};

exports.getJob = async (req, res, next) => {
  const doc = await Jobs.findById(req.params.id);
  console.log(req.params);

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};

exports.deleteJob = async (req, res, next) => {
  const doc = await Jobs.findByIdAndDelete(req.params.id);
  console.log(req.params);

  res.status(204).json({
    status: 'success',
    data: {
      data: null,
    },
  });
};

exports.createNewJob = async (req, res, next) => {
  await Jobs.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: null,
    },
  });
};

exports.updateJob = async (req, res, next) => {
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body);

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
