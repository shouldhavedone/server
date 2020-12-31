'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE, TEXT } = app.Sequelize
   const Article = app.model.define('Article', {
    id: {
      type: INTEGER(12),
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: INTEGER(12),
      references: {
        model: 'User',
      }
    },
    title: {
      type: STRING(128)
    },
    label_id: {
      type: INTEGER(12),
      references: {
        model: 'Label',
      }
    },
    content: {
      type: TEXT
    },
    watched: {
      type: INTEGER(4),
      defaultValue: 1,
      validate: { min: 0 }
    },
    comment_id: {
      type: INTEGER(12),
      references: {
        model: 'Comment',
      }
    },
    status: {
      type: INTEGER(4),
      defaultValue: 1,
      validate: { min: 0 }
    },
    top: {
      type: INTEGER(4),
      defaultValue: 1
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'article'
  })
  return Article
}