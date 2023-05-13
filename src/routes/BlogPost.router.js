const { Router } = require('express');

const isAuth = require('../auth/isAuth');

const { blogPostBodyCreateValidate, 
  blogPostBodyUpdateValidate } = require('../middlewares/BlogPost.validation'); 

const blogPostController = require('../controllers/BlogPost.controller');

const blogPostRouter = new Router();

blogPostRouter.get('/post', isAuth, blogPostController.findAll);

blogPostRouter.get('/post/:id', isAuth, blogPostController.findById);

blogPostRouter.delete('/post/:id', isAuth, blogPostController.deleteBlogPost);

blogPostRouter.put(
  '/post/:id', 
  isAuth,
  blogPostBodyUpdateValidate,
  blogPostController.updateBlogPost,
);

blogPostRouter.post('/post', isAuth, blogPostBodyCreateValidate, blogPostController.insertBlogPost);

module.exports = blogPostRouter;
