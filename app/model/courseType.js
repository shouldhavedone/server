'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const CourseType = app.model.define('CourseType', {
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
    tableName: 'coursetype'
  })

  CourseType.associate = function () {
    app.model.CourseType.hasMany(app.model.Course, {
      foreignKey: 'course_type_id',
    })
  }

  return CourseType
}