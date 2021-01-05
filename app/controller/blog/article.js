'use strict';
const Controller = require('egg').Controller;
 
class ArticleController extends Controller {
  async getArticleList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query

    console.log(params)
    const option = {
      limit: parseInt(params.rows),
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),
      where: {
        title: {
          [Op.like]: '%' + params.title + '%'
        },
        label_id: {
          [Op.like]: '%' + params.label_id + '%'
        }
      }
    }
    const res = await ctx.model.Article.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateArticle() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.id) {
      const res = await ctx.model.Article.update(params, {
        where: {
          id: params.id
        }
      })
      ctx.body = {
        total: 0,
        message: '修改成功',
        code: 200,
        isSucceed: true,
      }
    } else {
      const [res, created] = await ctx.model.Article.findOrCreate({
        where: {
          title: params.title,
        },
        defaults: params
      })

      if (created) {
        ctx.body = {
          total: 0,
          message: "创建成功",
          code: 200,
          isSucceed: true,
        }
      } else {
        ctx.body = {
          total: 0,
          message: "标题已存在",
          code: 250,
          isSucceed: false,
        }
      }
    }
  }

  async delArticle() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = ctx.model.Article.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    })
    if (res) {
      ctx.body = {
        total: 0,
        message: "删除成功",
        code: 200,
        isSucceed: true,
      }
    } else {
      ctx.body = {
        total: 0,
        message: "删除失败",
        code: 250,
        isSucceed: false,
      }
    }
    
    
    ctx.body = 'delArticle'
  }
}
 
module.exports = ArticleController;