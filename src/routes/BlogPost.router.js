const { Router } = require('express');

const isAuth = require('../auth/isAuth');

const { blogPostBodyCreateValidate } = require('../middlewares/BlogPost.validation'); 

const blogPostController = require('../controllers/BlogPost.controller');

const blogPostRouter = new Router();

blogPostRouter.get('/post', isAuth, blogPostController.findAll);

blogPostRouter.get('/post/:id', isAuth, blogPostController.findById);

blogPostRouter.post('/post', isAuth, blogPostBodyCreateValidate, blogPostController.insertBlogPost);

module.exports = blogPostRouter;
