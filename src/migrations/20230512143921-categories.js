'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('categories', {
			id: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.INTEGER,
				autoIncrement: true,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			}
		})
  },

  down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('categories')
  }
};
