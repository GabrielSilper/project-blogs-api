const { CREATED, OK } = require('../constants');
const { sequelize, BlogPost, PostCategory, User, Category } = require('../models');

// Função auxiliar para cadastrar o post e a lista de categorias em posts_categoires.
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

module.exports = { create, getAll };
