'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.HotelBooking,{
        foreignKey: 'userId',
        as: 'users'
      })
      User.hasMany(models.UserReview, {
        foreignKey: "userId",
        as: "usersReviews",
      });
      User.hasMany(models.TourBooking, {
        foreignKey: "userId",
        as: "TourBookingUsers",
      });
      User.hasMany(models.ContactUs,{
        foreignKey: 'user_id',
        as: 'usercontact'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    uid: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    photoURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};