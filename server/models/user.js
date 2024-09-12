'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    fullname: DataTypes.STRING,
    emailVerified: DataTypes.BOOLEAN,
    phoneVerified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    balance: DataTypes.BIGINT,
    score: DataTypes.INTEGER,
    resetPwdToken: DataTypes.STRING,
    resetPwdExpiry: DataTypes.DATE,
    idPricing: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};