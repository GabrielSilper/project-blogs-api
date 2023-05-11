const { CREATED, OK } = require('../constants');
const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();
  return { type: null, status: OK, message: categories };
};

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return { type: null, status: CREATED, message: newCategory };
};

module.exports = { create, getAll };
