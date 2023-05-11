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

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, status, message } = await postService.getById(id);
  if (type) return res.status(status).json({ message });
  return res.status(status).json(message);
};

module.exports = { create, getAll, getById };
