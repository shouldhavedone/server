module.exports = app => {
  const { router, controller } = app;
  router.post('/back-sys/back-auth/oauth/token', controller.login.getToken);
  router.get('/back-sys/user-service/getByUserId', controller.login.getByUserId);

  router.get('/back-sys/user-service/getUserList', controller.user.getUserList);
  router.get('/back-sys/user-service/getAllUser', controller.user.getAllUser);
  router.post('/back-sys/user-service/updateUser', controller.user.updateUser);
  router.post('/back-sys/user-service/delUser', controller.user.delUser);
};