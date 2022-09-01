const express = require('express');

const {
  getAllJobs,
  getJob,
  createNewJob,
  deleteJob,
  updateJob,
  getJobsByCat,
  reorderJobs,
} = require('../controllers/jobsController');

// const { protect, restrictTo } = require('../controllers/authController');

/* Merge Params
The mergeParams Option is selected here to give access to req.params from parent
routers when they have been routed here. Eg from the tourRouter 

See tourRoutes - Merge Params for more details*/
const router = express.Router({ mergeParams: true });

// router.use(protect);

router.route('/').get(getAllJobs).post(createNewJob);
router.route('/byCategory').get(getJobsByCat);
router.route('/reorder').put(reorderJobs);

router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
