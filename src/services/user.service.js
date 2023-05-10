const { CREATED, OK } = require('../constants');
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { type: null, status: OK, message: users };
};

const create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return { type: null, status: CREATED, message: newUser };
};

module.exports = { create, getAll };
