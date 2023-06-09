const express = require('express');

const userRouter = require('./routes/User.router');
const categoryRouter = require('./routes/Category.router');
const blogPostRouter = require('./routes/BlogPost.router');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(userRouter);
app.use(categoryRouter);
app.use(blogPostRouter);

module.exports = app;
