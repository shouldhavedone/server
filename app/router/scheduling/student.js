module.exports = app => {
  const { router, controller } = app;
  // 学生
  router.get('/back-sys/scheduling-service/getStudentList', controller.scheduling.student.getStudentList);
  router.post('/back-sys/scheduling-service/addOrUpdateStudent', controller.scheduling.student.addOrUpdateStudent);
  router.post('/back-sys/scheduling-service/delStudent', controller.scheduling.student.delStudent);
};