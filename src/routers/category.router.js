const express = require('express');
const { categoryController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostCategory = require('../middleware/validatePostCategory');

const categoryRouter = express.Router();

categoryRouter.use(validateToken);
categoryRouter.use(validatePostCategory);
categoryRouter.post('/', categoryController.create);

module.exports = categoryRouter;