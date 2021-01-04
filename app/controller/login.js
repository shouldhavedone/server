'use strict';
const Controller = require('egg').Controller;
 
class LoginController extends Controller {
  async getToken() {
    const { ctx } = this;
    console.log(ctx.request.body)

    ctx.body = {
      total: 0,
      data: {
        access_token: "82f77e24-a604-454a-bc00-621afe8e754a",
        expires_in: 90067,
        refresh_token: "435da72c-a23c-4186-94f6-b732a83e94a7",
        scope: "server",
        token_type: "bearer",
        user_id: 1,
        user_name: "root",
      },
      code: 200,
      isSucceed: true,
    }
  }
  async getByUserId() {
    const { ctx } = this;
    const res = await ctx.model.User.findOne();
    console.log(res)
    ctx.body = {
      total: 1,
      data: res,
      code: 200,
      isSucceed: true,
    };
  }
}
 
module.exports = LoginController;