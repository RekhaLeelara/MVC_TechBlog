// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'signup',
  }
);

SignUp.beforeCreate((signup, options) => {
	const salt = bcrypt.genSaltSync();
	signup.password = bcrypt.hashSync(signup.password, salt);
});
  
 
SignUp.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      }; 

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = SignUp;
