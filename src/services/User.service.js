const { User, BlogPost } = require('../models');

const getAcess = async ({ password, email }) => User.findOne({
  where: {
    email,
    password,
  },
});

const insertUser = (data) => User.create(data);

const findAll = () => User.findAll();

const findById = (id) => User.findByPk(id);

module.exports = {
  getAcess,
  insertUser,
  findAll,
  findById,
};
