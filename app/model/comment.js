'use strict'

module.exports = app => {
  const { INTEGER, DATE, TEXT, BOOLEAN } = app.Sequelize
  const Comment = app.model.define('Comment', {
    id: {
      type: INTEGER(12),
      primaryKey: true
    },
    content: {
      type: TEXT,
      allowNull: false
    },
    user_id: {
      type: INTEGER(12),
      references: {
        model: 'User',
      }
    },
    fathercomment_id: {
      type: INTEGER(12),
      references: {
        model: 'User',
      }
    },
    article_id: {
      type: INTEGER(12),
      references: {
        model: 'Article',
      }
    },
    createtime: {
      type: DATE,
    },
    status: {
      type: BOOLEAN,
      defaultValue: 1,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'comment'
  })

  Comment.associate = function () {
    app.model.Comment.belongsTo(app.model.Article, {
      foreignKey: 'comment_id',
      targetKey: 'id'
    })
    app.model.Comment.belongsTo(app.model.User, {
      foreignKey: 'user_id',
      targetKey: 'id'
    })
    app.model.Comment.belongsTo(app.model.User, {
      foreignKey: 'fathercomment_id',
      targetKey: 'id'
    })
  }

  return Comment
}