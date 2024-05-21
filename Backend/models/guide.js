'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Guide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guide.belongsTo(models.Place,{
        foreignKey: 'placeId',
        as: 'guides',
      })
      Guide.hasMany(models.TourBooking, {
        foreignKey: "tourGuideId",
        as: "TourBookingGuide",
      });
    }
  }
  Guide.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    Guide_name: {
      type: DataTypes.STRING,
      field: 'guide_name'
    },
    Category: {
      type: DataTypes.STRING,
      field: 'category'
    },
    guide_location: {
      type: DataTypes.STRING,
      field: 'guide_location'
    },
    State: {
      type: DataTypes.STRING,
      field: 'state'
    },
    Country: {
      type: DataTypes.STRING,
      field: 'country'
    },
    ProfileImg: {
      type: DataTypes.TEXT,
      field: 'profile_img'
    },
    Experience: {
      type: DataTypes.STRING,
      field: 'experience'
    },
    placeId: {
      type: DataTypes.UUID,
      field: 'place_id',
    },
    Rating: {
      type: DataTypes.FLOAT,
      field: 'rating'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
    
  }, {
    sequelize,
    modelName: 'Guide',
  });
  return Guide;
};