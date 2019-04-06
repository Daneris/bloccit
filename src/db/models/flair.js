'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flair = sequelize.define('Flair', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});

  Flair.associate = function(models) {
    // associations can be defined here

    Flair.belongsTo(models.Post, {
      foreignKey: "postId",
      onDelete: "CASCADE"
    });
  };



  return Flair;
};
