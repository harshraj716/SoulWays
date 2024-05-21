'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('places', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       allowNull: false,
       defaultValue: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT 
      },
      climate: {
        type: Sequelize.TEXT 
      },
      history: {
        type: Sequelize.TEXT 
      },
      time: {
        type: Sequelize.TEXT 
      },
      food: {
        type: Sequelize.TEXT 
      },
      img: {
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
    await queryInterface.dropTable('places');
  }
};
