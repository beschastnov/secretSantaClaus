/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users_to_User extends Model {
    static associate({ User, Room }) {
      this.belongsTo(User, { foreignKey: 'user_gives' });
      this.belongsTo(User, { foreignKey: 'user_gets' });
      this.belongsTo(Room, { foreignKey: 'room_id' });
    }
  }
  Users_to_User.init({
    user_gives: DataTypes.INTEGER,
    user_gets: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users_to_User',
  });
  return Users_to_User;
};
