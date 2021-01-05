module.exports = app => {
  const { router, controller } = app;
  // 文章
  router.get('/back-sys/blog-service/getArticleList', controller.blog.article.getArticleList);
  router.post('/back-sys/blog-service/addOrUpdateArticle', controller.blog.article.addOrUpdateArticle);
  router.post('/back-sys/blog-service/delArticle', controller.blog.article.delArticle);
  
  // 分类
  router.get('/back-sys/blog-service/getLabelList', controller.blog.label.getLabelList);
  router.get('/back-sys/blog-service/getAllLabel', controller.blog.label.getAllLabel);
  router.post('/back-sys/blog-service/addOrUpdateLabel', controller.blog.label.addOrUpdateLabel);
  router.post('/back-sys/blog-service/delLabel', controller.blog.label.delLabel)
};