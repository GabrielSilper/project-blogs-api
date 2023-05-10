const Joi = require('joi');

const postUserSchema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email(),
  password: Joi.string().required().min(6),
  image: Joi.string(),
});

module.exports = postUserSchema;
