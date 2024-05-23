'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactUs', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobileNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'mobile_number'
      },
      status:{
        type: Sequelize.STRING,
      },
      resolve:{
        type: Sequelize.STRING,
      },
      userId:{
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        references:{
          model:"Users",
          key: 'id'
        }
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ContactUs');
  }
};