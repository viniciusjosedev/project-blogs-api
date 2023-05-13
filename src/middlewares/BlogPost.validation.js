const validations = require('./validations/validations');

const blogPostBodyCreateValidate = async (req, res, next) => {
  const { body } = req;
  const { type } = validations.blogPostBodyCreateValidate(body);
  if (!type) return next();
  return res.status(400).json({ message: 'Some required fields are missing' });
};

const blogPostBodyUpdateValidate = async (req, res, next) => {
  const { body } = req;
  const { type } = validations.blogPostBodyUpdateValidate(body);
  if (!type) return next();
  return res.status(400).json({ message: 'Some required fields are missing' });
};

module.exports = {
  blogPostBodyCreateValidate,
  blogPostBodyUpdateValidate,
};
