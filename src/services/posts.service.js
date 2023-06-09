const { Op } = require('sequelize');
const {
  CREATED,
  OK,
  NOT_FOUND,
  UNAUTHORIZED,
  NO_CONTENT,
} = require('../constants');
const {
  sequelize,
  BlogPost,
  PostCategory,
  User,
  Category,
} = require('../models');

const notFoundPost = {
  type: 'NOT_FOUND',
  status: NOT_FOUND,
  message: 'Post does not exist',
};

const unauthorizedUser = {
  type: 'UNAUTHORIZED',
  status: UNAUTHORIZED,
  message: 'Unauthorized user',
};

// Função auxiliar para cadastrar o post e a lista de categorias em posts_categories.
const createPostCategory = async (postId, categoryIds, t) => {
  await Promise.all(
    categoryIds.map(async (categoryId) =>
      PostCategory.create(
        {
          postId,
          categoryId,
        },
        {
          transaction: t,
        },
      )),
  );
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { type: null, status: OK, message: posts };
};

const create = async (email, { title, content, categoryIds }) => {
  const user = await User.findOne({ where: { email } });
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      {
        title,
        content,
        userId: user.id,
        categoryIds,
      },
      {
        transaction: t,
      },
    );
    await createPostCategory(newPost.id, categoryIds, t);
    return newPost;
  });
  return { type: null, status: CREATED, message: result };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return notFoundPost;
  return { type: null, status: OK, message: post };
};

const update = async (id, email, { title, content }) => {
  const user = await User.findOne({ where: { email } });
  const post = await BlogPost.findByPk(id);

  if (!post) return notFoundPost;
  if (post.userId !== user.id) return unauthorizedUser;

  await BlogPost.update(
    { title, content, updated: Date.now() },
    { where: { id } },
  );

  const { message, status, type } = await getById(id);
  return { type, status, message };
};

const destroy = async (id, email) => {
  const user = await User.findOne({ where: { email } });
  const post = await BlogPost.findByPk(id);

  if (!post) return notFoundPost;
  if (post.userId !== user.id) return unauthorizedUser;

  await BlogPost.destroy({ where: { id } });
  return { type: null, status: NO_CONTENT, message: null };
};

const getByTerm = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: q } },
        { content: { [Op.substring]: q } },
      ],
    },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { type: null, status: OK, message: posts };
};

module.exports = { create, getAll, getById, update, destroy, getByTerm };
