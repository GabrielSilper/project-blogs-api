const express = require('express');
const { userController } = require('../controllers');
const validatePostUser = require('../middleware/validatePostUser');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();

userRouter.post('/', validatePostUser, userController.create);
userRouter.use(validateToken);
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);

module.exports = userRouter;
