const validations = require('./validations/validations');

const categoryBodyCreateValidate = async (req, res, next) => {
  const { body } = req;
  const { type, message } = validations.categoryBodyCreateValidate(body);
  if (!type) return next();
  return res.status(400).json({ message });
};

module.exports = {
  categoryBodyCreateValidate,
};
