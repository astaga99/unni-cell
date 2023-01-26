'use strict';
const { encryptPwd } = require('../helpers/encrypt');


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.hasMany(models.Item)
    }
  }
  Admin.init({
    name: {
      type: DataTypes.STRING,
      validate: { 
        notEmpty: {
        message: "name tidak boleh kosong!"
        }
      }
    },
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          message: "username tidak boleh kosong!"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          message: "email tidak boleh kosong!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {
          message:"password tidak boleh kosong!"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(Admin, options) {
        Admin.password = encryptPwd(Admin.password)
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};