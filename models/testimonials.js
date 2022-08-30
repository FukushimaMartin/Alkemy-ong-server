'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      // define association here
    }
  };
  Testimonials.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.INTEGER.UNSIGNED,
    address: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Testimonials',
  });
  return Testimonials;
};