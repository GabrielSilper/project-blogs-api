const { CONFLICT } = require('../constants');

const errorEmail = (err, req, res, next) => {
  const uniqueEmail = 'email must be unique';
  if (err.errors && err.errors[0].message === uniqueEmail) {
    return res.status(CONFLICT).json({
      message: 'User already registered',
    });
  }
  return next(err);
};

module.exports = errorEmail;
