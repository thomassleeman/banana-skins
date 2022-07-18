const Users = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  const doc = await Users.find();

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
};
