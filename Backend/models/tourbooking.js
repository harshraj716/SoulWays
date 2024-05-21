"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class TourBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourBooking.belongsTo(models.User, {
        foreignKey: "userId",
        as: "TourBookingUsers",
      });
      TourBooking.belongsTo(models.Place, {
        foreignKey: "placeId",
        as: "TourBookingPlace",
      });
      TourBooking.belongsTo(models.Guide, {
        foreignKey: "tourGuideId",
        as: "TourBookingGuide",
      });
      TourBooking.belongsTo(models.Tourist, {
        foreignKey: "touristId",
        as: "TourBookingTouristPlace",
      });
    }
  }
  TourBooking.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: () => uuidv4()
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'full_name',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone_number',
      },
      tourDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'tour_date',
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
      },
      placeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'place_id'
      },
      tourGuideId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'tour_guide_id'
      },
      touristId: {
        type: DataTypes.UUID,
        allowNull: false,
       field: 'tourist_id',
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
    },
    {
      sequelize,
      modelName: "TourBooking",
    }
  );
  return TourBooking;
};
