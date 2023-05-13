const userService = require('../services/User.service');

const isBoss = async (data, id) => {
  const listByIdBlogPost = await userService.findByIdWithBlogPost(data.id);

  const verificate = listByIdBlogPost.dataValues
    .BlogPost.some((e) => e.dataValues.id === Number(id));

  return verificate;
};

module.exports = isBoss;
