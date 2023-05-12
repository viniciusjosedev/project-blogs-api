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

module.exports = categoryRouter;