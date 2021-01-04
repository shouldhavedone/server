module.exports = app => {
  const { router, controller } = app;
  // 文章
  router.get('/back-sys/blog-service/getArticleList', controller.blog.article.getArticleList);
  
  // 分类
  router.get('/back-sys/blog-service/getLabelList', controller.blog.label.getLabelList);
  router.post('/back-sys/blog-service/addOrUpdateLabel', controller.blog.label.addOrUpdateLabel);
};