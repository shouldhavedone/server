'use strict';
const Controller = require('egg').Controller;

class LabelController extends Controller {
  async getLabelList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query
    const option = {
      limit: parseInt(params.rows),
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),
      where: {
        name: {
          [Op.like]: '%' + params.name + '%'
        }
      }
    }
    const res = await ctx.model.Label.findAll(option)

    ctx.body = {
      total: res.length,
      data: res,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateLabel() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params)
    if (params.id) {
      const res = await ctx.model.Label.update(params, {
        where: {
          id: params.id
        }
      })
      ctx.body = {
        total: 0,
        data: res,
        code: 200,
        isSucceed: true,
      }
    } else {
      const [res, created] = await ctx.model.Label.findOrCreate({
        where: {
          name: params.name,
        },
        defaults: params
      })

      if (created) {
        ctx.body = {
          total: 0,
          data: "创建成功",
          code: 200,
          isSucceed: true,
        }
      } else {
        ctx.body = {
          total: 0,
          data: "分类已存在",
          code: 200,
          isSucceed: false,
        }
      }
    }
  }
}

module.exports = LabelController;