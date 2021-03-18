module.exports = app => {
  const { router, controller } = app;
  // 教学楼
  router.get('/back-sys/scheduling-service/getBuildingList', controller.scheduling.building.getBuildingList);
  router.get('/back-sys/scheduling-service/getAllBuilding', controller.scheduling.building.getAllBuilding);
  router.post('/back-sys/scheduling-service/addOrUpdateBuilding', controller.scheduling.building.addOrUpdateBuilding);
  router.post('/back-sys/scheduling-service/delBuilding', controller.scheduling.building.delBuilding);
};