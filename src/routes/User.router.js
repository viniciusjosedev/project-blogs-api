const { Router } = require('express');

const { userBodyCreateValidate } = require('../middlewares/User.validation');
const userController = require('../controllers/User.controller');
const loginAuth = require('../auth/loginAuth');

const userRouter = new Router();

userRouter.post('/login', loginAuth);

userRouter.post('/user', userBodyCreateValidate, userController.insertUser);

module.exports = userRouter;
