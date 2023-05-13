module.exports = (Sequelize, DataTypes) => {
  const postCategorySchema = Sequelize.define('PostCategory', {
		postId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'blog_posts',
				key: 'id'
			},
			field: 'post_id',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
			unique: true,
		},
		categoryId: {
			unique: true,
			type: DataTypes.INTEGER,
			references: {
				model: 'categories',
				key: 'id'
			},
			field: 'category_id',
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE'
		}
	}, {
		tableName: 'posts_categories',
		underscored: true,
		timestamps: false,
	});

	postCategorySchema.associate = (models) => {
		models.BlogPost.belongsToMany(models.Category, {
			through: postCategorySchema,
			foreignKey: 'postId',
			otherKey: 'categoryId',
			as: 'categories'
		});
		models.Category.belongsToMany(models.BlogPost, {
			through: postCategorySchema,
			foreignKey: 'categoryId',
			otherKey: 'postId',
			as: 'BlogPost'
		})
	};

	return postCategorySchema;
}