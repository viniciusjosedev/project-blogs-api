const categoryService = require('../services/Category.service');

const insertCategory = async (req, res) => {
  try {
    const { body } = req;
    const result = await categoryService.insertCategory(body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: 'teste', error: error.message });
  }
};

module.exports = {
  insertCategory,
};
