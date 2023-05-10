const express = require('express');
const { userController } = require('../controllers');
const validatePostUser = require('../middleware/validatePostUser');

const userRouter = express.Router();

userRouter.post('/', validatePostUser, userController.create);

module.exports = userRouter;
