const { BAD_REQUEST } = require('../constants');
const postCategorySchema = require('./schemas/postCategorySchema');

const validatePostCategory = (req, res, next) => {
  const { error } = postCategorySchema.validate(req.body);
  if (error) {
    const [{ message }] = error.details;
    return res.status(BAD_REQUEST).json({ message });
  }
  return next();
};

module.exports = validatePostCategory;
