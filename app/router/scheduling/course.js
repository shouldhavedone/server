module.exports = app => {
    const { router, controller } = app;
    // 班级
    router.get('/back-sys/scheduling-service/getCourseList', controller.scheduling.course.getCourseList);
    router.get('/back-sys/scheduling-service/getAllCourse', controller.scheduling.course.getAllCourse);
    router.post('/back-sys/scheduling-service/addOrUpdateCourse', controller.scheduling.course.addOrUpdateCourse);
    router.post('/back-sys/scheduling-service/delCourse', controller.scheduling.course.delCourse);
  };