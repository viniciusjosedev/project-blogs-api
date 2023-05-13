const blogPostService = require('../services/BlogPost.service');
const categoryService = require('../services/Category.service');

const insertBlogPost = async (req, res) => {
  try {
    const { body, data } = req;
    const listCategory = await categoryService.findById(body.categoryIds);
    if (listCategory.length !== body.categoryIds.length) { 
      return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
    }
    const result = await blogPostService.insertBlogPost(body, data.id);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Algo de errado aconteceu!', error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await blogPostService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Algo de errado aconteceu!', error: error.message });
  }
};

module.exports = {
  insertBlogPost,
  findAll,
};
