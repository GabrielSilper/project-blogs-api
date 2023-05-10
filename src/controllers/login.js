const { createToken } = require('../auth/authFunctions');
const { OK } = require('../constants');

const login = (req, res) => {
    const token = createToken(req.body);
    res.status(OK).json({ token });
};

module.exports = login;
