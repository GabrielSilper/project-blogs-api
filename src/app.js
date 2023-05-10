const express = require('express');
require('express-async-errors');
const error = require('./middleware/error');
const validateLogin = require('./middleware/validateLogin');
const login = require('./controllers/login');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', validateLogin, login);
app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
