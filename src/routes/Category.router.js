const { Router } = require('express');

const isAuth = require('../auth/isAuth');

const { categoryBodyCreateValidate } = require('../middlewares/Category.validation');

const categoryController = require('../controllers/Category.controller');

const categoryRouter = new Router();

categoryRouter.post(
  '/categories', 
  isAuth, 
  categoryBodyCreateValidate,
  categoryController.insertCategory,
);

categoryRouter.get('/categories', isAuth, categoryController.findAll);

module.exports = categoryRouter;