module.exports = app => {
  const { router, controller } = app;
  // 学院
  router.get('/back-sys/scheduling-service/getCollegeList', controller.scheduling.college.getCollegeList);
  router.get('/back-sys/scheduling-service/getAllCollege', controller.scheduling.college.getAllCollege);
  router.post('/back-sys/scheduling-service/addOrUpdateCollege', controller.scheduling.college.addOrUpdateCollege);
  router.post('/back-sys/scheduling-service/delCollege', controller.scheduling.college.delCollege);
};