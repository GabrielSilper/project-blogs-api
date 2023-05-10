/**
 *
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
      id: { primaryKey: true, type: DataTypes.INTEGER },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  //   User.associate = (models) => {
  //     User.hasMany(models.BlogPost, { foreignKey: 'id' , as: 'blogs'})
  //   }
  return User;
};
