
"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type:DataTypes.STRING(80),
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  }, {
    tableName: 'users',

    classMethods: {
      associate: function(models) {
        //User.belongsTo(models.Role)
        User.belongsToMany(models.Role, { through: 'users_roles' });
      }
    }
  });

  return User;
}
