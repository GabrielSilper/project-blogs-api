const { verifyToken } = require('../auth/authFunctions');
const { UNAUTHORIZED } = require('../constants');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(UNAUTHORIZED).json({
      message: 'Token not found',
    });
  }
  try {
    const { data } = verifyToken(authorization);
    req.data = data;
  } catch (error) {
    return res.status(UNAUTHORIZED).json({
      message: 'Expired or invalid token',
    });
  }
  return next();
};

module.exports = validateToken;
