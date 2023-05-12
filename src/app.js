const express = require('express');

const userRouter = require('./routes/User.router');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(userRouter);

module.exports = app;
