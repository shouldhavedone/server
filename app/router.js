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
};
