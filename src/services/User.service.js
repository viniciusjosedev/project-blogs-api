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

const findByIdBlogPost = async (idUser) => User.findOne({
  where: {
    id: idUser,
  },
  include: {
    model: BlogPost,
    as: 'BlogPost',
  },
});

module.exports = {
  getAcess,
  insertUser,
  findAll,
  findById,
  findByIdBlogPost,
};
