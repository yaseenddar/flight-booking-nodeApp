'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Airplanes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.STRING,
        references:{
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.STRING,
        references:{
          model: 'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      arrivalDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      departureDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};