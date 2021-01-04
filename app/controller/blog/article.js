'use strict';
const Controller = require('egg').Controller;
 
class ArticleController extends Controller {
  async getArticleList() {
    const { ctx } = this;
    const res = await ctx.model.Article.findAll()

    ctx.body = res;
  }
}
 
module.exports = ArticleController;