const { createToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const getAll = async (req, res) => {
  const { status, message } = await userService.getAll();
  res.status(status).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, status, message } = await userService.getById(id);
  if (type) return res.status(status).json({ message });
  res.status(status).json(message);
};

const create = async (req, res) => {
  const { status, message } = await userService.create(req.body);
  const token = createToken({ data: { email: message.email } });
  res.status(status).json({ token });
};

module.exports = { create, getAll, getById };
