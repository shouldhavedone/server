'use strict'

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize
  const TaskCourse = app.model.define('TaskCourse', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    task_id: {
      type: INTEGER(8),
      references: {
        model: 'Task',
      }
    },
    course_id: {
      type: INTEGER(8),
      references: {
        model: 'Course',
      }
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'taskcourse'
  })

  return TaskCourse
}