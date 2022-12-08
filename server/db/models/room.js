/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({ User, User_room, Users_to_User }) {
      this.belongsTo(User, { foreignKey: 'user_id_is_admin' });
      this.hasMany(User_room, { foreignKey: 'room_id' });
      this.hasMany(Users_to_User, { foreignKey: 'room_id' });
    }
  }
  Room.init({
    title: DataTypes.TEXT,
    user_id_is_admin: DataTypes.INTEGER,
    password: DataTypes.TEXT,
    timing: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
