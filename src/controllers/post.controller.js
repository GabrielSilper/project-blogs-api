const { postService } = require('../services');

const create = async (req, res) => {
  const { email } = req.data;
  const { message, status } = await postService.create(email, req.body);
  return res.status(status).json(message);
};

module.exports = { create };
