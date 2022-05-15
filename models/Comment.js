const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create a Comment model
class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commentedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize
  }
);

module.exports = Comment;