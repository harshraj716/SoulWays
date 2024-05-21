'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotels', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      Hotel_name: {
        type: Sequelize.STRING,
        field: 'hotel_name',

      },
      Location: {
        type: Sequelize.STRING,
        field: 'location',
      },
      Price: {
        type: Sequelize.INTEGER,
        field: 'price',
      },
      Discount: {
        type: Sequelize.STRING,
        field: 'discount',
      },
      Rating: {
        type: Sequelize.INTEGER,
        field: 'rating',
      },
      imgurl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
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
    await queryInterface.dropTable('hotels');
  }
};