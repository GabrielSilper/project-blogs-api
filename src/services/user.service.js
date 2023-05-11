const { CREATED, OK, NOT_FOUND, NO_CONTENT } = require('../constants');
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { type: null, status: OK, message: users };
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });
  if (!user) {
    return {
      type: 'NOT_FOUND',
      status: NOT_FOUND,
      message: 'User does not exist',
    };
  }
  return { type: null, status: OK, message: user };
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

const autoDestroy = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  await User.destroy({ where: { id } });
  return { type: null, status: NO_CONTENT, message: null };
};

module.exports = { create, getAll, getById, autoDestroy };
