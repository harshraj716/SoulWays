"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class HotelBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HotelBooking.belongsTo(models.User, {
        foreignKey: "userId",
        as: "users",
      });
      HotelBooking.belongsTo(models.Hotel, {
        foreignKey: "hotelId",
        as: "hotels",
      });
    }
  }
  HotelBooking.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "full_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "phone_number",
      },
      checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "check_in_date",
      },
      checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "check_out_date",
      },
      members: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalPrice:{
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "total_price",
      },
      hotelId: {
        type: DataTypes.UUID,
        allowNull: false,
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
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "HotelBooking",
      tableName: "HotelBookings"
    }
  );
  return HotelBooking;
};
