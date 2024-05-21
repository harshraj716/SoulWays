// models/place.js

'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate(models) {
      // Define associations here
      Place.hasMany(models.Tourist,{
        foreignKey: 'placeId',
        as: 'tourists'
      })
      Place.hasMany(models.Guide,{
        foreignKey: 'placeId',
        as: 'guides',
      })
      Place.hasMany(models.TourBooking, {
        foreignKey: "placeId",
        as: "TourBookingPlace",
      });
    }
  };
  Place.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4()
    },
    name: DataTypes.STRING,
    capital: DataTypes.STRING,
    about: DataTypes.TEXT,
    climate: DataTypes.TEXT,
    history: DataTypes.TEXT,
    time: DataTypes.TEXT,
    food: DataTypes.TEXT,
    img: {
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
    modelName: 'Place',
    tableName: 'places',
    timestamps: true,
    underscored: true
  });
  return Place;
}
