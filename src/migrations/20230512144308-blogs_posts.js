'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('blog_posts', {
			id: {
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				field: 'user_id',
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			published: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated: {
				type: Sequelize.DATE,
				allowNull: false,
			}
		})
  },

  down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('blog_posts')
  }
};
