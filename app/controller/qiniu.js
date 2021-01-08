'use strict';
const Controller = require('egg').Controller;

class QiniuController extends Controller {

  async getToken() {
    const { ctx, config } = this;
    const uploadToken = await ctx.service.qiniu.getToken(config.qiniuConfig.dataDucket);
    if (uploadToken) {
      ctx.body = {
        data: uploadToken,
        isSucceed: true,
      }
    } else {
      ctx.body = {
        message: '获取失败',
        isSucceed: false
      }
    }
  }

  async uploadImage() {
    const { ctx } = this;
    const data = await ctx.service.qiniu.uploadFiles();
    if (data) {
      ctx.body = {
        code: 200,
        data: data,
        isSucceed: true,
      }
    } else {
      ctx.body = {
        code: 250,
        message: "图片上传失败",
        isSucceed: false,
      }
    }
  }

  async delImage() {
    const { ctx } = this;
    const params = ctx.request.body;
    const data = await ctx.service.qiniu.deleteFiles(params.filename);
    if (data) {
      ctx.body = {
        code: 200,
        message: '删除成功',
        isSucceed: true,
      }
    } else {
      ctx.body = {
        code: 250,
        message: "删除失败",
        isSucceed: false,
      }
    }
  }
}

module.exports = QiniuController;