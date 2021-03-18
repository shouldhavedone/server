'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Role = app.model.define('Role', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    role: {
      type: STRING(32),
      allowNull: false
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'role'
  })

  Role.associate = function () {
    app.model.Role.hasMany(app.model.Menu, {
      foreignKey: 'role_id',
    })
    app.model.Role.hasMany(app.model.User, {
      foreignKey: 'role_id',
    })
  }

  return Role
}