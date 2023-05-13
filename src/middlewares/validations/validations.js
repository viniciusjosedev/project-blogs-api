const schema = require('./schema');

const userBodyCreateValidate = (body) => {
  const { error } = schema.userBodyCreateSchema.validate(body);
  if (!error) return { type: undefined };
  return { type: 'ERROR', message: error.message };
};

const categoryBodyCreateValidate = (body) => {
  const { error } = schema.categoryBodyCreateSchema.validate(body);
  if (!error) return { type: undefined };
  return { type: 'ERROR', message: error.message };
};

const blogPostBodyCreateValidate = (body) => {
  const { error } = schema.blogPostBodyCreateSchema.validate(body);
  if (!error) return { type: undefined };
  return { type: 'ERROR', message: error.message };
};

module.exports = {
  userBodyCreateValidate,
  categoryBodyCreateValidate,
  blogPostBodyCreateValidate,
};
