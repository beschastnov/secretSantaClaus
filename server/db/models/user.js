/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Room, Interesting, User_room, Users_to_User,
    }) {
      this.hasMany(Room, { foreignKey: 'user_id_is_admin' });
      this.hasMany(Interesting, { foreignKey: 'user_id' });
      this.hasMany(User_room, { foreignKey: 'user_id' });
      this.hasMany(Users_to_User, { foreignKey: 'user_gives' });
      this.hasMany(Users_to_User, { foreignKey: 'user_gets' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
    name: DataTypes.TEXT,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
