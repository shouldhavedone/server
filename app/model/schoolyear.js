'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Schoolyear = app.model.define('Schoolyear', {
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
    tableName: 'schoolyear'
  })

  Schoolyear.associate = function () {
    app.model.Schoolyear.hasMany(app.model.Semester, {
      foreignKey: 'schoolyear_id',
    })
    app.model.Schoolyear.hasMany(app.model.Class, {
      foreignKey: 'schoolyear_id',
    })
  }

  return Schoolyear
}