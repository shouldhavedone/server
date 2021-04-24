'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Teacher = app.model.define('Teacher', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    course_id: {
      type: INTEGER(8),
      references: {
        model: 'Course',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'teacher'
  })

  Teacher.associate = function () {
    app.model.Teacher.belongsTo(app.model.Course)
  }

  return Teacher
}