const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interesting extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Interesting.init({
    title: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Interesting',
  });
  return Interesting;
};
