'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Major = app.model.define('Major', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(32),
      allowNull: false
    },
    college_id: {
      type: INTEGER(8),
      references: {
        model: 'College',
      }
    },
    createtime: {
      type: DATE,
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'major'
  })

  Major.associate = function () {
    app.model.Major.belongsTo(app.model.College)
  }

  return Major
}