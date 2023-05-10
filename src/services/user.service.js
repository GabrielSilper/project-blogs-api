const { CREATED } = require('../constants');
const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return { type: null, status: CREATED, message: newUser };
};

module.exports = { create };
