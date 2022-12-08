/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_room extends Model {
    static associate({ User, Room }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Room, { foreignKey: 'room_id' });
    }
  }
  User_room.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User_room',
  });
  return User_room;
};
