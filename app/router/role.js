module.exports = app => {
  const { router, controller } = app;
  // 账户
  router.get('/back-sys/user-service/getRoleList', controller.role.getRoleList);
  router.get('/back-sys/user-service/getAllRole', controller.role.getAllRole);
  router.post('/back-sys/user-service/addOrUpdateRole', controller.role.addOrUpdateRole);
  router.post('/back-sys/user-service/delRole', controller.role.delRole);
};