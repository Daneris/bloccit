'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banner = sequelize.define('Banner', {
    source: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
    Banner.belongsTo(models.Topic, {
      foreignKey: "topicId",
      onDelete: "CASCADE",
      references: {
        model: "Topic",
        key: "id",
        as: "topicId",
      }
    });
  };
  return Banner;
};
