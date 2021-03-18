'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Menu = app.model.define('Menu', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(16),
      allowNull: false
    },
    icon: {
      type: STRING(32),
      allowNull: false
    },
    path: {
      type: STRING(32),
      allowNull: false
    },
    sort: {
      type: INTEGER(2),
      defaultValue: 1,
    },
    parent: {
      type: INTEGER(8),
      references: {
        model: 'Menu',
      },
      allowNull: true
    },
    role_id: {
      type: INTEGER(8),
      references: {
        model: 'Role',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'menu'
  })

  Menu.associate = function () {
    app.model.Menu.belongsTo(app.model.Role)
    app.model.Menu.hasMany(app.model.Menu, {
      foreignKey: 'parent',
    })
  }

  return Menu
}