const { User } = require('../models');

const getAcess = async ({ password, email }) => User.findOne({
  where: {
    email,
    password,
  },
});

module.exports = {
  getAcess,
};
