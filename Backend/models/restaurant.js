"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.hasMany(models.Dish, {
        as: "dishes",
        foreignKey: "restaurantId",
      });
    }
  }
  Restaurant.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      cuisine: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      reviews: DataTypes.INTEGER,
      img: DataTypes.STRING,
      phone: DataTypes.STRING,
      website: DataTypes.STRING,
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
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
