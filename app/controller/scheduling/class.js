'use strict';
const Controller = require('egg').Controller;

class ClassController extends Controller {
  async getClassList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query
    const option = {
      limit: parseInt(params.rows),
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),
      include: [
        { 
          model: ctx.model.Major, 
          attributes: ['name'],
        },
        { 
          model: ctx.model.Schoolyear, 
          attributes: ['name'],
        },
      ],
      where: {
        name: {
          [Op.like]: '%' + params.name + '%'
        },
        major_id: {
          [Op.like]: '%' + params.major_id + '%'
        },
      }
    }
    const res = await ctx.model.Class.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateClass() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.id) {
      const res = await ctx.model.Class.update(params, {
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
      const [res, created] = await ctx.model.Class.findOrCreate({
        where: {
          name: params.name,
        },
        defaults: params
      })

      if (created) {
        ctx.body = {
          total: 0,
          message: '新增成功',
          code: 200,
          isSucceed: true,
        }
      } else {
        ctx.body = {
          total: 0,
          message: "失败",
          code: 250,
          isSucceed: false,
        }
      }
    }
  }

  async delClass() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = ctx.model.Class.destroy({
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

module.exports = ClassController;