'use strict'

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize
  const Task = app.model.define('Task', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    credit: {
      type: INTEGER(4),
      allowNull: false
    },
    total_hours: {
      type: INTEGER(4),
      allowNull: false
    },
    major_id: {
      type: INTEGER(8),
      references: {
        model: 'Major',
      }
    },
    semester_id: {
      type: INTEGER(8),
      references: {
        model: 'Semester',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'task'
  })

  Task.associate = function () {
    app.model.Task.belongsTo(app.model.Major)
    app.model.Task.belongsTo(app.model.Semester)
    app.model.Task.belongsToMany(app.model.Course, { through: 'TaskCourse' });
  }

  return Task
}