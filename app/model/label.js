'use strict'

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize
  const Label = app.model.define('Label', {
    id: {
      type: INTEGER(12),
      primaryKey: true
    },
    name: {
      type: STRING(64),
      allowNull: false
    },
    description: {
      type: STRING(255),
    },
    status: {
      type: BOOLEAN,
      defaultValue: 1,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'label'
  })

  Label.associate = function () {
    app.model.Label.hasMany(app.model.Article, {
      foreignKey: 'label_id',
    })
  }
  
  return Label
}