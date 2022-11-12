const express = require('express');

const categoryController = require('../controllers/categoriesController');

// const { protect, restrictTo } = require('../controllers/authController');

/* Merge Params
The mergeParams Option is selected here to give access to req.params from parent
routers when they have been routed here. Eg from the tourRouter 

See tourRoutes - Merge Params for more details*/
const router = express.Router({ mergeParams: true });

// router.use(protect);

router
  .route('/')
  .get(categoryController.getAllCats)
  .post(categoryController.createNewCat);

router.route('/includingJobs').get(categoryController.getAllCatsInclJobs);

router
  .route('/:id')
  .get(categoryController.getCat)
  .patch(categoryController.updateCat)
  .delete(categoryController.deleteCat);

router.route('/update').patch(categoryController.updateCats);

module.exports = router;
