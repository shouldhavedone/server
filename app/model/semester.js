'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Semester = app.model.define('Semester', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    start: {
      type: DATE,
      allowNull: false
    },
    end: {
      type: DATE,
      allowNull: false
    },
    week_count: {
      type: INTEGER(2),
      allowNull: false
    },
    schoolyear_id: {
      type: INTEGER(8),
      references: {
        model: 'Schoolyear',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'semester'
  })

  Semester.associate = function () {
    app.model.Semester.belongsTo(app.model.Schoolyear)
  }

  return Semester
}