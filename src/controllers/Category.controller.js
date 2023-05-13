const categoryService = require('../services/Category.service');

const messageDefault = 'Algo de errado aconteceu!';

const insertCategory = async (req, res) => {
  try {
    const { body } = req;
    const result = await categoryService.insertCategory(body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: messageDefault, error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await categoryService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: messageDefault, error: error.message });
  }
};

module.exports = {
  insertCategory,
  findAll,
};
