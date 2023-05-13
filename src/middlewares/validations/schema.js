const Joi = require('joi');

const userBodyCreateSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.any(),
});

const categoryBodyCreateSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

const blogPostBodyCreateSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().items(Joi.number(), Joi.string()).min(1).required(),
});

module.exports = {
  userBodyCreateSchema,
  categoryBodyCreateSchema,
  blogPostBodyCreateSchema,
};
