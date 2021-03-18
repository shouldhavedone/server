module.exports = app => {
  const { router, controller } = app;
  // 菜单
  router.get('/back-sys/user-service/getMenuList', controller.menu.getMenuList);
  router.get('/back-sys/user-service/getAllMenu', controller.menu.getAllMenu);
  router.post('/back-sys/user-service/addOrUpdateMenu', controller.menu.addOrUpdateMenu);
  router.post('/back-sys/user-service/delMenu', controller.menu.delMenu);
  router.post('/back-sys/user-service/getMenuByRole', controller.menu.getMenuByRole);

};