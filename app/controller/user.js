'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserList() {
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
        },
      ],
      where: {
        username: {
          [Op.like]: '%' + params.username + '%'
        },
        role_id: {
          [Op.like]: '%' + params.role_id + '%'
        },
      }
    }
    const res = await ctx.model.User.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async getAllUser() {
    const { ctx } = this;
    const res = await ctx.model.User.findAndCountAll()
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async updateUser() {
    const { ctx } = this;
    const params = ctx.request.body;

    console.log(params)

    const user = await ctx.model.User.findOne({where: params.id})

    if(user.password == params.password) {
      const data = {
        id: params.id,
        username: params.username,
        password: params.newpassword,
      }
      await ctx.model.User.update(data, {
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
      ctx.body = {
        total: 0,
        message: '密码错误',
        code: 200,
        isSucceed: false,
      }
    }
    
  }

  async delUser() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;
    const ids = params.ids.split(',').map(c => +c);
    const res = ctx.model.User.destroy({
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

module.exports = UserController;