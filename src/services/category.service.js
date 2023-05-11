const { CREATED } = require('../constants');
const { Category } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return { type: null, status: CREATED, message: newCategory };
};

module.exports = { create };
