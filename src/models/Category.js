module.exports = (sequelize, DataTypes) => {
  const categorySchema = sequelize.define('Category', {
		id: {
			primaryKey: true,
			allowNull: false,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		}
	}, {
		tableName: 'categories',
		timestamps: false,
		underscored: true,
	})

  return categorySchema;
}