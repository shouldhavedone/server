'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/qiniu')(app);
  require('./router/user')(app);
  require('./router/role')(app);
  require('./router/menu')(app);
  require('./router/blog')(app);
  require('./router/scheduling/building')(app);
  require('./router/scheduling/classroom')(app);
  require('./router/scheduling/college')(app);
  require('./router/scheduling/major')(app);
  require('./router/scheduling/class')(app);
  require('./router/scheduling/schoolyear')(app);
  require('./router/scheduling/semester')(app);
  require('./router/scheduling/course')(app);
  require('./router/scheduling/courseType')(app);
  require('./router/scheduling/teacher')(app);
  require('./router/scheduling/student')(app);
  require('./router/scheduling/task')(app);
};
