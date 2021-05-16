'use strict';
const Controller = require('egg').Controller;

class BuildingController extends Controller {
  async getBuildingList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query
    const option = {
      limit: parseInt(params.rows),   //  限制条数
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),   
      include: [
        { 
          model: ctx.model.Classroom, 
          attributes: ['id'],
        }
      ],
      where: {
        name: {
          [Op.like]: '%' + params.name + '%'
        },
      }
    }
    const res = await ctx.model.Building.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,  // 成功
    }
  }

  async getAllBuilding() {
    const { ctx } = this;
    const res = await ctx.model.Building.findAndCountAll()
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateBuilding() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.id) {
      const res = await ctx.model.Building.update(params, {
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
      const [res, created] = await ctx.model.Building.findOrCreate({
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

  async delBuilding() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = await ctx.model.Building.destroy({
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

module.exports = BuildingController;