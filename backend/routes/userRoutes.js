const express = require('express');

const {
  getAllUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

// const { protect, restrictTo } = require('../controllers/authController');

/* Merge Params
The mergeParams Option is selected here to give access to req.params from parent
routers when they have been routed here. Eg from the tourRouter 

See tourRoutes - Merge Params for more details*/
const router = express.Router({ mergeParams: true });

// router.use(protect);

router.route('/').get(getAllUsers);

// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
