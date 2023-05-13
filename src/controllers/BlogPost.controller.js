const blogPostService = require('../services/BlogPost.service');
const categoryService = require('../services/Category.service');
const { isBoss, existBlogPost } = require('../utils');

const messageDefault = 'Algo de errado aconteceu!';

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
    return res.status(500).json({ message: messageDefault, error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await blogPostService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: messageDefault, error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogPostService.findById(id);
    if (!result) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: messageDefault, error: error.message }); 
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { data, params: { id } } = req;

    const verificate = await isBoss(data, id);

    if (!verificate) return res.status(401).json({ message: 'Unauthorized user' });

    await blogPostService.updateBlogPost({ title, content }, id);

    const result = await blogPostService.findById(id);
    
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: messageDefault, error: error.message }); 
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { data, params: { id } } = req;

    const verificateExistBlogPost = await existBlogPost(id);

    if (!verificateExistBlogPost) return res.status(404).json({ message: 'Post does not exist' });

    const verificateBoss = await isBoss(data, id);

    if (!verificateBoss) return res.status(401).json({ message: 'Unauthorized user' });

    await blogPostService.deleteBlogPost(id);

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: 'Algo de errado aconteceu!', error: error.message }); 
  }
};

module.exports = {
  insertBlogPost,
  findAll,
  findById,
  updateBlogPost,
  deleteBlogPost,
};
