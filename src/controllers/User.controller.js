const userService = require('../services/User.service');

const generateAuth = require('../auth/generateAuth');

const getAcess = async (req, res) => {
  const { password, email } = req.body;
  const data = await userService.getAcess({ password, email });
  return res.status(200).json(data);
};

const insertUser = async (req, res) => {
  try {
    const { displayName, 
      email, 
      password,
      image } = req.body;

      const result = await userService.insertUser({ displayName, email, password, image });

      const token = generateAuth(result);

      return res.status(201).json({ token });
  } catch (error) {
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  getAcess,
  insertUser,
};
