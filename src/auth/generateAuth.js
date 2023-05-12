const jwt = require('jsonwebtoken');

const senhaSecreta = process.env.JWT_SECRET || '1234';

module.exports = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data = payload;
  delete data.password;

  const token = jwt.sign({ data }, senhaSecreta, jwtConfig);

  return token;
};
