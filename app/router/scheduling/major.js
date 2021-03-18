module.exports = app => {
  const { router, controller } = app;
  // 专业
  router.get('/back-sys/scheduling-service/getMajorList', controller.scheduling.major.getMajorList);
  router.post('/back-sys/scheduling-service/addOrUpdateMajor', controller.scheduling.major.addOrUpdateMajor);
  router.post('/back-sys/scheduling-service/delMajor', controller.scheduling.major.delMajor);
};