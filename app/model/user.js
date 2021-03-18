'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const User = app.model.define('User', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: STRING(16),
      allowNull: false
    },
    password: {
      type: STRING(16),
      allowNull: false,
      defaultValue: '123456'
    },
    role_id: {
      type: INTEGER(8),
      references: {
        model: 'Role',
      },
      defaultValue: 3,
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'user'
  })

  User.associate = function () {
    app.model.User.belongsTo(app.model.Role)
  }

  return User
}