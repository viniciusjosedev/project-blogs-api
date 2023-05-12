'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('posts_categories', {
			postId: {
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'blog_posts',
				  key: 'id'
				},
				field: 'post_id',
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			categoryId: {
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id'
				},
				field: 'category_id',
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			}
		})
  },

  down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('posts_categories')
  }
};
