const { categoryService } = require('../services');

const create = async (req, res) => {
  const { status, message } = await categoryService.create(req.body);
  res.status(status).json(message);
};

module.exports = { create };
