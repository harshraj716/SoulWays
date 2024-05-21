'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tourists', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      name: {
        type: Sequelize.TEXT
      },
      info: {
        type: Sequelize.TEXT
      },
      images: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      location: {
        type: Sequelize.TEXT
      },
      placeId: {
        type: Sequelize.UUID,
        field: 'place_id',
        references:{
          model:"places",
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tourists');
  }
};