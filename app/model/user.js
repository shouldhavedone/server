'use strict'

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize
  const User = app.model.define('User', {
    id: {
      type: STRING(12),
      primaryKey: true
    },
    username: {
      type: STRING(16),
      allowNull: false
    },
    password: {
      type: STRING(16),
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'user'
  })
  return User
}