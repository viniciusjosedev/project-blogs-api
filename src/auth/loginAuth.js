const userService = require('../services/User.service');
const generateAuth = require('./generateAuth');

const verificBodyLogin = (password, email) => password && email;

module.exports = async (req, res, _next) => {
  const { password, email } = req.body;

  try {
    if (!verificBodyLogin(password, email)) {
      return res.status(400).json({ message: 'Some required fields are missing',
      }); 
    }

    const result = await userService.getAcess({ email, password });

    if (!result) return res.status(400).json({ message: 'Invalid fields' });

    const token = generateAuth(result);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: 'algo deu errado', error: error.message });
  }
};
