/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define(
    'Category',
    {
      id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return Category;
};
