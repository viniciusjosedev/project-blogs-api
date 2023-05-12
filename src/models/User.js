/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
	const userModel = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		displayName: {
			field: 'display_name',
			allowNull: false,
			type: DataTypes.STRING,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		image: {
			allowNull: true,
			type: DataTypes.STRING,
		}
	},
	{
		tableName: 'users',
		underscored: true,
		timestamps: false
	});

	userModel.associate = (models) => {
		userModel.hasMany(models.BlogPost, {
			foreignKey: 'id',
			as: 'BlogPost'
		})
	}

  return userModel;
}