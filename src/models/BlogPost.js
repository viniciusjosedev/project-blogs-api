module.exports = (Sequelize, DataTypes) => {
	const BlogsPostsSchema = Sequelize.define('BlogPost', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		title: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		content: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id',
			references: {
				model: 'users',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE'
		},
		published: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		},
		updated: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		}
	}, {
		tableName: 'blog_posts',
		timestamps: false,
		underscored: true,
	})
	
	BlogsPostsSchema.associate = (models) => {
		BlogsPostsSchema.belongsTo(models.User, {
			foreignKey: 'id',
			as: 'User'
		})
	};

	return BlogsPostsSchema;
}