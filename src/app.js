const express = require('express');
require('express-async-errors');
const error = require('./middleware/error');
const errorEmail = require('./middleware/errorEmail');
const login = require('./controllers/login');
const validateLogin = require('./middleware/validateLogin');
const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
const postRouter = require('./routers/post.router');
const errorCategory = require('./middleware/errorCategory');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', validateLogin, login);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(errorEmail);
app.use(errorCategory);
app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
