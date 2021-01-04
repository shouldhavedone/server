module.exports = app => {
  const { router, controller } = app;
  router.post('/back-sys/back-auth/oauth/token', controller.login.getToken);
  router.get('/back-sys/user-service/getByUserId', controller.login.getByUserId);
};