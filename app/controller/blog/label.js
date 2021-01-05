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
    const res = await ctx.model.Label.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateLabel() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.id) {
      const res = await ctx.model.Label.update(params, {
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
      const [res, created] = await ctx.model.Label.findOrCreate({
        where: {
          name: params.name,
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
          message: "分类已存在",
          code: 250,
          isSucceed: false,
        }
      }
    }
  }

  async delLabel() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = ctx.model.Label.destroy({
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
  }
}

module.exports = LabelController;