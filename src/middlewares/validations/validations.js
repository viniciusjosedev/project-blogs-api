const { userBodyCreateSchema } = require('./schema');

const userBodyCreateValidate = (body) => {
  const { error } = userBodyCreateSchema.validate(body);
  if (!error) return { type: undefined };
  return { type: 'ERROR', message: error.message };
};

module.exports = {
  userBodyCreateValidate,
};
