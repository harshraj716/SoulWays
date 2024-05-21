'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.hasMany(models.HotelBooking,{
        foreignKey: 'hotelId',
        as: 'hotels'
      })
      Hotel.hasMany(models.UserReview, {
        foreignKey: "hotelId",
        as: "hotelReviews",
      });
    }
  }
  Hotel.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    Hotel_name: {
      type: DataTypes.STRING,
      field: 'hotel_name',

    },
    Location: {
      type: DataTypes.STRING,
      field: 'location',
    },
    Price: {
      type: DataTypes.INTEGER,
      field: 'price',
    },
    Discount: {
      type: DataTypes.STRING,
      field: 'discount',
    },
    Rating: {
      type: DataTypes.INTEGER,
      field: 'rating',
    },
    imgurl: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
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
    modelName: 'Hotel',
    tableName: 'hotels'
  });
  return Hotel;
};