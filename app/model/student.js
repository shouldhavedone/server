'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Student = app.model.define('Student', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    grade: {
      type: STRING(4),
      allowNull: false
    },
    schoolyear_id: {
      type: INTEGER(8),
      references: {
        model: 'Schoolyear',
      }
    },
    class_id: {
      type: INTEGER(8),
      references: {
        model: 'Class',
      }
    },
    major_id: {
      type: INTEGER(8),
      references: {
        model: 'Major',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'student'
  })

  Student.associate = function () {
    app.model.Student.belongsTo(app.model.Schoolyear)
    app.model.Student.belongsTo(app.model.Class)
    app.model.Student.belongsTo(app.model.Major)
  }

  return Student
}