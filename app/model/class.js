'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Class = app.model.define('Class', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    major_id: {
      type: INTEGER(8),
      references: {
        model: 'Major',
      }
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
    tableName: 'class'
  })

  Class.associate = function () {
    app.model.Class.belongsTo(app.model.Major)
    app.model.Class.belongsTo(app.model.Schoolyear)
  }

  return Class
}