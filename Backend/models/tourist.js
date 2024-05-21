'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Tourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tourist.belongsTo(models.Place,{
        foreignKey: 'placeId',
        as: 'tourists'
      })
      Tourist.hasMany(models.TourBooking, {
        foreignKey: "touristId",
        as: "TourBookingTouristPlace",
      });

    }
  }
  Tourist.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    name: DataTypes.TEXT,
    info: DataTypes.TEXT,
    images: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    location: DataTypes.TEXT,
    placeId: {
      type: DataTypes.UUID,
      field: 'place_id',
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
    modelName: 'Tourist',
    tableName: 'tourists',
  });
  return Tourist;
};