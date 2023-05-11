const { categoryService } = require('../services');

const getAll = async (req, res) => {
  const { status, message } = await categoryService.getAll();
  res.status(status).json(message);
};

const create = async (req, res) => {
  const { status, message } = await categoryService.create(req.body);
  res.status(status).json(message);
};

module.exports = { create, getAll };
