const { BAD_REQUEST } = require('../constants');
const postUserSchema = require('./schemas/postUserSchema');

const validatePostUser = (req, res, next) => {
  const { error } = postUserSchema.validate(req.body);
  if (error) {
    const [{ message }] = error.details;
    return res.status(BAD_REQUEST).json({ message });
  }
  return next();
};

module.exports = validatePostUser;
