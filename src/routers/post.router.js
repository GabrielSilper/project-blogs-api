const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostPostsCategorys = require('../middleware/validadePostPostsCategorys');

const postRouter = express.Router();

postRouter.use(validateToken);
postRouter.post('/', validatePostPostsCategorys, postController.create);

module.exports = postRouter;
