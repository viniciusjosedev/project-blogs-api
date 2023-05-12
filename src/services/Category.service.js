const { Category } = require('../models');

const insertCategory = (data) => Category.create(data);

const findAll = () => Category.findAll();

module.exports = {
  insertCategory,
  findAll,
};
