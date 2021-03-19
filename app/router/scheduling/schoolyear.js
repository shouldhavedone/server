module.exports = app => {
  const { router, controller } = app;
  // 学年
  router.get('/back-sys/scheduling-service/getSchoolyearList', controller.scheduling.schoolyear.getSchoolyearList);
  router.get('/back-sys/scheduling-service/getAllSchoolyear', controller.scheduling.schoolyear.getAllSchoolyear);
  router.post('/back-sys/scheduling-service/addOrUpdateSchoolyear', controller.scheduling.schoolyear.addOrUpdateSchoolyear);
  router.post('/back-sys/scheduling-service/delSchoolyear', controller.scheduling.schoolyear.delSchoolyear);
};