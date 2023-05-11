const { BAD_REQUEST } = require('../constants');

const errorCategory = (err, req, res, next) => {
  const fkError = 'SequelizeForeignKeyConstraintError';
  if (err.name && err.name === fkError) {
    return res.status(BAD_REQUEST).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  return next(err);
};

module.exports = errorCategory;
