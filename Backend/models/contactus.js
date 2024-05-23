'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class ContactUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContactUs.belongsTo(models.User,{
        foreignKey: 'user_id',
        as: 'usercontact'
      })
    }
  }
  ContactUs.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
     allowNull: false,
     defaultValue: () => uuidv4()
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'mobile_number'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status:{
      type: DataTypes.STRING,
    },
    resolve:{
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'ContactUs',
  });
  return ContactUs;
};