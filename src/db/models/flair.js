'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flair = sequelize.define('Flair', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Flair.associate = function(models) {
    Flair.belongsToMany(models.Topic, {

      foreignKey: "flairId",

    });
    // associations can be defined here
  };

  Flair.associate = function(models) {
    Flair.belongsToMany(models.Banner, {

      foreignKey: "flairId",

    });
    // associations can be defined here
  };

  Flair.associate = function(models) {
    Flair.belongsToMany(models.Post, {

      foreignKey: "flairId",

    });
    // associations can be defined here
  };



  return Flair;
};
