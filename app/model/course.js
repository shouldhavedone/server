'use strict'

module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize
    const Course = app.model.define('Course', {
        id: {
            type: INTEGER(8),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: STRING(32),
            allowNull: false
        },
        class_hours: {
            type: INTEGER(2),
            allowNull: false,
        },
        credit: {
            type: INTEGER(2),
            allowNull: false,
        },
        week: {
            type: INTEGER(4),
            allowNull: false,
            defaultValue: 0,
        },
        course_type_id: {
            type: INTEGER(8),
            references: {
                model: 'CourseType',
            }
        },
        createtime: {
            type: DATE,
            allowNull: false
        },
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'course'
    })

    Course.associate = function () {
        app.model.Course.belongsTo(app.model.CourseType)
        app.model.Course.hasMany(app.model.Teacher, {
            foreignKey: 'course_id',
        })
    }

    return Course
}