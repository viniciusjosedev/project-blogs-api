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

const findAll = async (req, res) => {
  const result = await userService.findAll();
  result.forEach((_e, i) => delete result[i].dataValues.password);
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.findById(id);
    delete result.dataValues.password;
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

module.exports = {
  getAcess,
  insertUser,
  findAll,
  findById,
};
