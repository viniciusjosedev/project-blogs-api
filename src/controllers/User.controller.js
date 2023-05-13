const userService = require('../services/User.service');

const generateAuth = require('../auth/generateAuth');

const messageDefault = 'Algo de errado aconteceu!';

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

const findAll = async (_req, res) => {
  try {
    const result = await userService.findAll();
    result.forEach((_e, i) => delete result[i].dataValues.password);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: messageDefault, error: error.message });
  }
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

const deleteUser = async (req, res) => {
  try {
    const { data: { id } } = req;

    await userService.deleteUser(id);
    
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({ message: messageDefault, error: error.message });
  }
};

module.exports = {
  getAcess,
  insertUser,
  findAll,
  findById,
  deleteUser,
};
