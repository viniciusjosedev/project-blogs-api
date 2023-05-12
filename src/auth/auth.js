const jwt = require('jsonwebtoken');
const userService = require('../services/User.service');

const verificBodyLogin = (password, email) => password && email;

const senhaSecreta = process.env.JWT_SECRET || '1234';

module.exports = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    if (!verificBodyLogin(password, email)) {
      return res.status(400).json({ message: 'Some required fields are missing',
      }); 
    }

    const result = await userService.getAcess({ email, password });

    if (!result) return res.status(400).json({ message: 'Invalid fields' });

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: result }, senhaSecreta, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ message: 'algo deu errado', error: error.message });
  }
};
