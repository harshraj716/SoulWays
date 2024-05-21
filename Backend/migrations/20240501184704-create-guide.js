'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guides', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      Guide_name: {
        type: Sequelize.STRING,
        field: 'guide_name',
        
      },
      Category: {
        type: Sequelize.STRING,
        field: 'category',
      },
      guide_location: {
        type: Sequelize.STRING,
        field: 'guide_location'
      },
      State: {
        type: Sequelize.STRING,
        field: 'state',
      },
      Country: {
        type: Sequelize.STRING,
         field: 'country',
      },
      ProfileImg: {
        type: Sequelize.TEXT,
        field: 'profile_img'
      },
      Experience: {
        type: Sequelize.STRING,
        field: 'experience'
      },
      placeId: {
        type: Sequelize.UUID,
        field: 'place_id',
        references:{
          model:"places",
          key: 'id'
        }
      },
      Rating: {
        type: Sequelize.FLOAT,
        field: 'rating'
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
    await queryInterface.dropTable('Guides');
  }
};