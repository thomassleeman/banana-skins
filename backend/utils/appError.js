class AppError extends Error {
  //extends the built in error class.
  constructor(message, statusCode) {
    super(message); //Because we are extending another class we call super to get access to the original class.

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperation = true; //Useful for debugging.

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
