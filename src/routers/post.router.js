const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
const validatePostPostsCategorys = require('../middleware/validadePostPostsCategorys');
const errorCategory = require('../middleware/errorCategory');
const validatePutPost = require('../middleware/validatePutPost');

const postRouter = express.Router();

postRouter.use(validateToken);
postRouter.get('/:id', postController.getById);
postRouter.get('/', postController.getAll);
postRouter.post('/', validatePostPostsCategorys, postController.create);
postRouter.put('/:id', validatePutPost, postController.update);
postRouter.use(errorCategory);

module.exports = postRouter;
