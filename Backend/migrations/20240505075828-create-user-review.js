'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserReviews', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      reviews: {
        type: Sequelize.STRING
      },
      hotelId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'hotel_id',
        references:{
          model:"hotels",
          key: 'id'
        }
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
    await queryInterface.dropTable('UserReviews');
  }
};