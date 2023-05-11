const { CREATED } = require('../constants');
const { sequelize, BlogPost, PostCategory, User } = require('../models');

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

module.exports = { create };
