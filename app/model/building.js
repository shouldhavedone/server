'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Building = app.model.define('Building', {
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
    tableName: 'building'
  })

  Building.associate = function () {
    app.model.Building.hasMany(app.model.Classroom, {
      foreignKey: 'building_id',
    })
  }

  return Building
}