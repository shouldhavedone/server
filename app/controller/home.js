'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const res = await ctx.model.User.findAll()
    ctx.body = res;
  }


  async getToken() {
    const { ctx } = this;

    ctx.body = {
      access_token: "82f77e24-a604-454a-bc00-621afe8e754a",
      expires_in: 90067,
      refresh_token: "435da72c-a23c-4186-94f6-b732a83e94a7",
      scope: "server",
      token_type: "bearer",
      user_id: 1,
      user_name: "root",
    }
  }
}

module.exports = HomeController;
