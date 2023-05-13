const { Category } = require('../models');

const insertCategory = (data) => Category.create(data);

const findAll = () => Category.findAll();

const findById = (arrayOrId) => Category.findAll({ where: { id: arrayOrId } });

module.exports = {
  insertCategory,
  findAll,
  findById,
};
