'use strict'

module.exports = app => {
  const { INTEGER, STRING, DATE, TEXT, BOOLEAN } = app.Sequelize
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
    description: {
      type: STRING(255),
    },
    content: {
      type: TEXT
    },
    image: {
      type: STRING(255),
    },
    watched: {
      type: INTEGER(8),
      defaultValue: 0,
    },
    comment_id: {
      type: INTEGER(12),
      references: {
        model: 'Comment',
      }
    },
    thumbs_up: {
      type: INTEGER(12),
      defaultValue: 0,
    },
    createtime: {
      type: DATE,
    },
    modifytime: {
      type: DATE,
    },
    status: {
      type: BOOLEAN,
      defaultValue: 1,
    },
    top: {
      type: BOOLEAN,
      defaultValue: 0,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'article'
  })

  Article.associate = function () {
    app.model.Article.hasMany(app.model.Comment, {
      foreignKey: 'comment_id',
    })
    app.model.Article.belongsTo(app.model.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    })
    app.model.Article.belongsTo(app.model.Label, {
      foreignKey: 'label_id',
    })
  }

  return Article
}