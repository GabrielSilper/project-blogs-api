const { BAD_REQUEST } = require('../constants');
const { User } = require('../models');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return res.status(BAD_REQUEST).json({
      message: 'Invalid fields',
    });
  }
  return next();
};

module.exports = validateLogin;
