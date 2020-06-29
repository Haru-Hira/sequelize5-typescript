'use strict';
module.exports = (sequelize, DataTypes) => {
  const TestClass = sequelize.define('TestClass', {
    attr1: DataTypes.STRING
  }, {});
  TestClass.associate = function(models) {
    // associations can be defined here
  };
  return TestClass;
};