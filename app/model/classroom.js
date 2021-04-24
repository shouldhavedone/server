'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
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
      type: INTEGER(1),
      allowNull: false,
      defaultValue: 0,
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