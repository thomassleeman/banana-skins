const Jobs = require('../models/jobsModel');
const Cats = require('../models/categoryModel');

exports.getAllJobs = async (req, res, next) => {
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

/* As mongoose sort() does not seem to offer the facility to sort by a parent field I have used JS to first 
sort by the parent category index and next by the index of each job within each category which is how the data will be presented.
 */
//BUG This uses parent referencing to the job's category which has been stopped.
exports.getJobsByCat = async (req, res, next) => {
  const jobs = await Jobs.find();
  const doc = jobs.sort((a, b) => {
    return a.category.catIndex - b.category.catIndex;
  });
  // const doc = jobsByOrderedCat.sort((a, b) => {
  //   if (a.category._id === b.category._id) {
  //     return a.jobIndex - b.jobIndex;
  //   }
  // });

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
  const doc = await Jobs.findByIdAndUpdate(req.params.id, req.body);

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

exports.reorderJobs = async (req, res, next) => {
  const doc1 = await Jobs.deleteMany();
  const doc2 = await Jobs.create(req.body.data);

  if (!doc1) {
    return next(new AppError('jobs data Delete failed', 404));
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
