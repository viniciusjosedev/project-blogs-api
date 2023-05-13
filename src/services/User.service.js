const { User, BlogPost, sequelize } = require('../models');

const getAcess = async ({ password, email }) => User.findOne({
  where: {
    email,
    password,
  },
});

const insertUser = (data) => sequelize.transaction(async (t) => 
  User.create(data, { transaction: t }));

const findAll = () => User.findAll();

const findById = (id) => User.findByPk(id);

const findByIdWithBlogPost = async (id) => User.findOne({
  where: {
    id,
  },
  include: {
    model: BlogPost,
    as: 'BlogPost',
  },
});

const deleteUser = async (id) => sequelize.transaction(async (t) => 
  User.destroy({ where: { id } }, { transaction: t }));

module.exports = {
  getAcess,
  insertUser,
  findAll,
  findById,
  findByIdWithBlogPost,
  deleteUser,
};
