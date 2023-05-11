const { BAD_REQUEST } = require('../constants');
const postPostsCategorySchema = require('./schemas/postPostsCategorySchema');

const validatePostPostsCategorys = async (req, res, next) => {
  const { error } = postPostsCategorySchema.validate(req.body);
  if (error) {
    const { type } = error.details[0];
    if (type === 'string.empty' || type === 'array.min' || type.includes('require')) {
      return res.status(BAD_REQUEST).json({
        message: 'Some required fields are missing',
      });
    }
  }
  next();
};

module.exports = validatePostPostsCategorys;
