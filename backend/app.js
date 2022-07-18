const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const jobRouter = require('./routes/jobRoutes');
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoryRoutes');

//GLOBAL MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/categories', categoryRouter);

app.all('*', (req, res, next) => {
  const err = new Error(`can't find ${req.originalUrl} on this server`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
