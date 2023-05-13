const jwt = require('jsonwebtoken');
const userService = require('../services/User.service');

const senhaSecreta = process.env.JWT_SECRET || '1234';

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const { data } = jwt.verify(authorization, senhaSecreta);
    
    const verificate = await userService.findById(data.id);
    
    if (!verificate) throw new Error('Token invalid');
    req.data = data;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token', error: error.message });
  }
};
