'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelBookings', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      field: 'full_name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'phone_number'
      },
      checkInDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'check_in_date'
      },
      checkOutDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'check_out_date'
      },
      members: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      totalPrice:{
        type: Sequelize.INTEGER,
        allowNull: true,
        field: "total_price",
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HotelBookings');
  }
};