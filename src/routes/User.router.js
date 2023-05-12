const { Router } = require('express');

const userController = require('../controllers/User.controller');
const auth = require('../auth/auth');

const userRouter = new Router();

userRouter.post('/login', auth, userController.getAcess);

module.exports = userRouter;
