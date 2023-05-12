const validations = require('./validations/validations');

const userBodyCreateValidate = async (req, res, next) => {
  const { body } = req;
  const { type, message } = validations.userBodyCreateValidate(body);
  if (!type) return next();
  return res.status(400).json({ message });
};

module.exports = {
  userBodyCreateValidate,
};
