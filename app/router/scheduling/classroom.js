module.exports = app => {
  const { router, controller } = app;
  // 教学楼
  router.get('/back-sys/scheduling-service/getClassroomList', controller.scheduling.classroom.getClassroomList);
  router.post('/back-sys/scheduling-service/addOrUpdateClassroom', controller.scheduling.classroom.addOrUpdateClassroom);
  router.post('/back-sys/scheduling-service/delClassroom', controller.scheduling.classroom.delClassroom);
};