'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE, DOUBLE } = app.Sequelize
  const Classroom = app.model.define('Classroom', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    count: {
      type: INTEGER(4),
      allowNull: false,
      defaultValue: 0,
    },
    area: {
      type: DOUBLE(16),
      allowNull: false,
    },
    building_id: {
      type: INTEGER(8),
      references: {
        model: 'Building',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'classroom'
  })

  Classroom.associate = function () {
    app.model.Classroom.belongsTo(app.model.Building)
  }

  return Classroom
}