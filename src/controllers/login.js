const { createToken } = require('../auth/authFunctions');
const { OK } = require('../constants');

const login = (req, res) => {
  const token = createToken({ email: req.body.email });
  res.status(OK).json({ token });
};

module.exports = login;
