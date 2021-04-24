module.exports = app => {
  const { router, controller } = app;
  // 教师
  router.get('/back-sys/scheduling-service/getTeacherList', controller.scheduling.teacher.getTeacherList);
  router.post('/back-sys/scheduling-service/addOrUpdateTeacher', controller.scheduling.teacher.addOrUpdateTeacher);
  router.post('/back-sys/scheduling-service/delTeacher', controller.scheduling.teacher.delTeacher);
};