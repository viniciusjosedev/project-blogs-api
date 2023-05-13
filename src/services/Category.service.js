const { Category, sequelize } = require('../models');

const insertCategory = (data) => sequelize.transaction(async (t) => 
  Category.create(data, { transaction: t }));

const findAll = () => Category.findAll();

const findById = (arrayOrId) => Category.findAll({ where: { id: arrayOrId } });

module.exports = {
  insertCategory,
  findAll,
  findById,
};
