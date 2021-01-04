'use strict'

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize
  const User = app.model.define('User', {
    id: {
      type: INTEGER(12),
      primaryKey: true
    },
    username: {
      type: STRING(16),
      allowNull: false
    },
    password: {
      type: STRING(16),
      allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'user'
  })

  User.associate = function () {
    // app.model.User.hasOne(app.model.Comment, {
    //   foreignKey: 'user_id',
    // })
    // app.model.User.hasOne(app.model.Comment, {
    //   foreignKey: 'fathercomment_id',
    // })
    // app.model.User.hasOne(app.model.Article, {
    //   foreignKey: 'user_id',
    // })
    // app.model.User.hasMany(app.model.Article, {
    //   foreignKey: 'article_id',
    // })
  }

  return User
}