'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const College = app.model.define('College', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    tableName: 'college'
  })

  College.associate = function () {
    app.model.College.hasMany(app.model.Major, {
      foreignKey: 'college_id',
    })
  }

  return College
}