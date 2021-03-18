'use strict';
const Controller = require('egg').Controller;
 
class LoginController extends Controller {
  async getToken() {
    const { ctx } = this;
    const params = ctx.request.body;

    const res = await ctx.model.User.findOne({
      where: {
        username: params.username
      }
    });

    if(res === null) {
      ctx.body = {
        total: 0,
        message: '用户不存在',
        code: 200,
        isSucceed: false,
      }
    } else if(res.password === params.password) {
      ctx.body = {
        total: 0,
        data: {
          access_token: "82f77e24-a604-454a-bc00-621afe8e754a",
          expires_in: 90067,
          refresh_token: "435da72c-a23c-4186-94f6-b732a83e94a7",
          scope: "server",
          token_type: "bearer",
          userInfo: res
        },
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
  async getByUserId() {
    const { ctx } = this;
    const res = await ctx.model.User.findOne();
    ctx.body = {
      total: 1,
      data: res,
      code: 200,
      isSucceed: true,
    };
  }
}
 
module.exports = LoginController;