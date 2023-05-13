const blogPostService = require('../services/BlogPost.service');

const existBlogPost = async (id) => blogPostService.findById(id);

module.exports = existBlogPost;
