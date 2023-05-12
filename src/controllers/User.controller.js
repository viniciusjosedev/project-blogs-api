const userService = require('../services/User.service');

const verificBodyLogin = (password, email) => password && email;

const getAcess = async (req, res) => {
  const { password, email } = req.body;
  if (!verificBodyLogin) {
    return res.status(400).json({ message: 'Some required fields are missing',
    }); 
  }
  const data = await userService.getAcess({ password, email });
  console.log(data);
  return res.status(200).json(data);
};

module.exports = {
  getAcess,
};
