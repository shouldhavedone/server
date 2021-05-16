/*
 * @Description: 
 * @version: 1.0.0
 * @Author: wutao
 * @Date: 2021-04-01 22:31:27
 * @LastEditTime: 2021-05-14 17:08:05
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',   // mysql
  },
  
  cors: {
    enable: true,
    package: 'egg-cors'   // 跨域
  },

  qiniu: {
    enable: true,
    package: 'qiniu'
  },

  
};

