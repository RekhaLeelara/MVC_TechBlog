const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Post extends Model {

}

// define table columns and configuration
Post.init(
    {
        // define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // define a username column
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        postedBy: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          allowNull: true,
          type: DataTypes.DATE, 
          defaultValue: new Date()
        },

      },
  {


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;