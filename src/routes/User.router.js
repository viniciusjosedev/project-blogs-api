const { Router } = require('express');

const { userBodyCreateValidate } = require('../middlewares/User.validation');
const userController = require('../controllers/User.controller');
const loginAuth = require('../auth/loginAuth');
const isAuth = require('../auth/isAuth');

const userRouter = new Router();

userRouter.get('/user', isAuth, userController.findAll);

userRouter.get('/user/:id', isAuth, userController.findById);

userRouter.post('/login', loginAuth);

userRouter.post('/user', userBodyCreateValidate, userController.insertUser);

module.exports = userRouter;
