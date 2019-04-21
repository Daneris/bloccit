'use strict';
module.exports = (sequelize, DataTypes) => {
  const FlairPost = sequelize.define('FlairPost', {
    flairId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  FlairPost.associate = function(models) {
    // associations can be defined here
  };
  return FlairPost;
};