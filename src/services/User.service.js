const { User } = require('../models');

const getAcess = async ({ password, email }) => User.findOne({
  where: {
    email,
    password,
  },
});

const insertUser = (data) => User.create(data);

const findAll = () => User.findAll();

module.exports = {
  getAcess,
  insertUser,
  findAll,
};
