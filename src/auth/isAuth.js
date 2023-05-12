const jwt = require('jsonwebtoken');

const senhaSecreta = process.env.JWT_SECRET || '1234';

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const { data } = jwt.verify(authorization, senhaSecreta);
    req.data = data;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token', error: error.message });
  }
};
