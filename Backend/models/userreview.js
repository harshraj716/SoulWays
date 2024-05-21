'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class UserReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserReview.belongsTo(models.User, {
        foreignKey: "userId",
        as: "usersReviews",
      });
      UserReview.belongsTo(models.Hotel, {
        foreignKey: "hotelId",
        as: "hotelReviews",
      });
      
    }
  }
  UserReview.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    reviews: DataTypes.STRING,
    hotelId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: "hotel_id",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'UserReview',
    tableName: 'UserReviews',
  });
  return UserReview;
};