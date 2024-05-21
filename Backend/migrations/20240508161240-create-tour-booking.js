'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TourBookings', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'full_name',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'phone_number',
      },
      tourDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'tour_date',
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        references:{
          model:"Users",
          key: 'id'
        }
      },
      placeId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'place_id',
        references:{
          model:"places",
          key: 'id'
        }
      },
      tourGuideId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'tour_guide_id',
        references:{
          model:"Guides",
          key: 'id'
        }
      },
      touristId: {
        type: Sequelize.UUID,
        allowNull: false,
       field: 'tourist_id',
       references:{
        model:"tourists",
        key: 'id'
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TourBookings');
  }
};