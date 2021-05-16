'use strict';
const Controller = require('egg').Controller;

class MenuController extends Controller {
  async getMenuList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query
    const option = {
      limit: parseInt(params.rows),
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),
      include: [
        {
          model: ctx.model.Role,
          attributes: ['name'],
          order: [
            ['sort'],
          ],
        },
        {
          model: ctx.model.Menu,
        },
      ],
      where: {
        name: {
          [Op.like]: '%' + params.name + '%'
        },
        parent: null,
      },
      // group: 'role_id',
      order: [
        ['sort'],
      ],
    }
    const res = await ctx.model.Menu.findAll(option)
    ctx.body = {
      total: res.length,
      data: res,
      code: 200,
      isSucceed: true,
    }
  }

  async getAllMenu() {
    const { ctx } = this;
    const res = await ctx.model.Menu.findAndCountAll()
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async getMenuByRole() {
    const { ctx } = this;
    const params = ctx.request.body;
    const option = {
      include: [
        {
          model: ctx.model.Menu,
          order: [
            ['sort'],
          ],
        },
      ],
      where: {
        role_id: params.role_id,
        parent: null,
      },
      order: [
        ['sort'],
      ],
    }
    const res = await ctx.model.Menu.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateMenu() {
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.id) {
      const res = await ctx.model.Menu.update(params, {
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
      const [res, created] = await ctx.model.Menu.findOrCreate({
        where: {
          path: params.path,
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
          message: "新增失败，路由已存在",
          code: 250,
          isSucceed: false,
        }
      }
    }
  }

  async delMenu() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = ctx.model.Menu.destroy({
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

module.exports = MenuController;