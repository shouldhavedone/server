module.exports = app => {
  const { router, controller } = app;
  router.get('/back-sys/back-auth/qiniu/token', controller.qiniu.getToken);
  router.post('/back-sys/back-auth/qiniu/upload', controller.qiniu.uploadImage);
  router.post('/back-sys/back-auth/qiniu/del', controller.qiniu.delImage);
};