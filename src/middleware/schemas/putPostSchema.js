const Joi = require('joi');

const putPostSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
});

module.exports = putPostSchema;
