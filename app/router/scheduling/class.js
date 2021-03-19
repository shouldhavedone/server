module.exports = app => {
  const { router, controller } = app;
  // 班级
  router.get('/back-sys/scheduling-service/getClassList', controller.scheduling.class.getClassList);
  router.post('/back-sys/scheduling-service/addOrUpdateClass', controller.scheduling.class.addOrUpdateClass);
  router.post('/back-sys/scheduling-service/delClass', controller.scheduling.class.delClass);
};