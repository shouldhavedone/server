module.exports = app => {
  const { router, controller } = app;
  router.get('/back-sys/blog-service/getArticleList', controller.blog.article.getArticleList);
};