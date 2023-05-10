const { createToken } = require('../auth/authFunctions');
const { userService } = require('../services');

const create = async (req, res) => {
  const { status, message } = await userService.create(req.body);
  const token = createToken({ data: { email: message.email } });
  res.status(status).json({ token });
};

module.exports = { create };
