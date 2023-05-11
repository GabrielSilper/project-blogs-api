const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostPostsCategorys = require('../middleware/validadePostPostsCategorys');
const errorCategory = require('../middleware/errorCategory');

const postRouter = express.Router();

postRouter.use(validateToken);
postRouter.get('/:id', postController.getById);
postRouter.get('/', postController.getAll);
postRouter.post('/', validatePostPostsCategorys, postController.create);
postRouter.use(errorCategory);

module.exports = postRouter;
