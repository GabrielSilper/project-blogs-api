/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories',
      through: PostCategory,
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'posts',
      through: PostCategory,
    });
  };

  return PostCategory;
};
