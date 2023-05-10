const { INTERNAL_SERVER_ERROR } = require('../constants');

const error = (err, req, res, _next) => {
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({ message: 'Deu algo de errado', err });
};

module.exports = error;
