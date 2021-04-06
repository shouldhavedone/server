module.exports = app => {
    const { router, controller } = app;
    // 课程类型
    router.get('/back-sys/scheduling-service/getCourseTypeList', controller.scheduling.courseType.getCourseTypeList);
    router.get('/back-sys/scheduling-service/getAllCourseType', controller.scheduling.courseType.getAllCourseType);
    router.post('/back-sys/scheduling-service/addOrUpdateCourseType', controller.scheduling.courseType.addOrUpdateCourseType);
    router.post('/back-sys/scheduling-service/delCourseType', controller.scheduling.courseType.delCourseType);
  };