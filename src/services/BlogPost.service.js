const { BlogPost, Category, PostCategory, User, sequelize } = require('../models');

const insertBlogPost = async (
  { 
    title, content, published, 
    updated, categoryIds, 
  }, 
    userId,
  ) => sequelize.transaction(async (t) => {
      const data = await BlogPost.create(
        { title, content, userId, published, updated },
        { transaction: t },
      );
      await Promise.all(categoryIds.map((e) => 
        PostCategory.create(
          { categoryId: e, postId: data.dataValues.id },
          { transaction: t },
      )));
      return data;
});

const findAll = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password', 'PostCategory'] } }, 
    { model: Category, as: 'categories' }],
});

module.exports = {
  insertBlogPost,
  findAll,
};
