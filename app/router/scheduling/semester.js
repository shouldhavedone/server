module.exports = app => {
  const { router, controller } = app;
  // 学期
  router.get('/back-sys/scheduling-service/getSemesterList', controller.scheduling.semester.getSemesterList);
  router.post('/back-sys/scheduling-service/addOrUpdateSemester', controller.scheduling.semester.addOrUpdateSemester);
  router.post('/back-sys/scheduling-service/delSemester', controller.scheduling.semester.delSemester);
};