const { Category } = require('../models');

const insertCategory = (data) => Category.create(data);

module.exports = {
  insertCategory,
};
