const { postService } = require('../services');

const getAll = async (req, res) => {
  const { status, message } = await postService.getAll();
  return res.status(status).json(message);
};

const create = async (req, res) => {
  const { email } = req.data;
  const { message, status } = await postService.create(email, req.body);
  return res.status(status).json(message);
};

module.exports = { create, getAll };
