'use strict';
const Controller = require('egg').Controller;

class TaskController extends Controller {

  async getTaskList() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.query
    const option = {
      limit: parseInt(params.rows),
      offset: (parseInt(params.page) - 1) * parseInt(params.rows),
      include: [{
        model: ctx.model.Course,
        attributes: ['id'],
      }, {
        model: ctx.model.Major,
        attributes: ['name'],
      }, {
        model: ctx.model.Semester,
        attributes: ['name'],
      }],
      where: {
        semester_id: {
          [Op.like]: '%' + params.semester_id + '%'
        },
        major_id: {
          [Op.like]: '%' + params.major_id + '%'
        },
      }
    }
    const res = await ctx.model.Task.findAndCountAll(option)
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async getAllTask() {
    const { ctx } = this;
    const res = await ctx.model.Task.findAndCountAll({
      include: [{
        model: ctx.model.Course,
      }],
    })
    ctx.body = {
      total: res.count,
      data: res.rows,
      code: 200,
      isSucceed: true,
    }
  }

  async addOrUpdateTask() {
    const { ctx, app } = this;
    const { Op } = app.Sequelize;
    const params = ctx.request.body;

    if (params.id) {
      const res = await ctx.model.Task.update(params, {
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
      params.createtime = new Date();
      const task = await ctx.model.Task.create(params)
      const course = await ctx.model.Course.findAll({
        where: {
          id: {
            [Op.in]: params.courseList
          }
        }
      })
      await task.addCourse(course);
      ctx.body = {
        code: 200,
        message: '新增成功',
        isSucceed: true,
      }
    }
  }

  async delTask() {
    const { ctx } = this;
    const params = ctx.request.body;
    let res;
    const task = await ctx.model.Task.findOne({
      where: {
        id: params.id,
      }
    })
    if(task) {
      await task.setCourses([])
      res = await ctx.model.Task.destroy({
        where: {
          id: params.id
        }
      })
    }
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

  async getTaskDetail() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.model.Task.findOne({
      where: {
        id: params.id,
      },
      include: [{
        model: ctx.model.Course,
      }]
    })

    ctx.body = {
      code: 200,
      data: res,
      isSucceed: true,
      total: 1,
    }
  }
}

module.exports = TaskController;