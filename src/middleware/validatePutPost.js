const { BAD_REQUEST } = require('../constants');
const putPostSchema = require('./schemas/putPostSchema');

const validatePutPost = async (req, res, next) => {
  const { error } = putPostSchema.validate(req.body);
  if (error) {
    const { type } = error.details[0];
    if (type === 'string.empty' || type.includes('require')) {
      return res.status(BAD_REQUEST).json({
        message: 'Some required fields are missing',
      });
    }
  }
  next();
};

module.exports = validatePutPost;
