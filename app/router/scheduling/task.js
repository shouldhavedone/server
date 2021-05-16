module.exports = app => {
  const { router, controller } = app;
  // 教学任务
  router.get('/back-sys/scheduling-service/getTaskList', controller.scheduling.task.getTaskList);
  router.get('/back-sys/scheduling-service/getAllTask', controller.scheduling.task.getAllTask);
  router.post('/back-sys/scheduling-service/addOrUpdateTask', controller.scheduling.task.addOrUpdateTask);
  router.post('/back-sys/scheduling-service/delTask', controller.scheduling.task.delTask);
  router.post('/back-sys/scheduling-service/getTaskDetail', controller.scheduling.task.getTaskDetail);
};