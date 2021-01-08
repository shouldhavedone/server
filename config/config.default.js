/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608829156399_7529';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.multipart = {
    mode: 'stream',
    fileSize: '10mb',
  }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  // 七牛
  config.qiniuConfig = {
    accessKey: '8-I_J1XYGKnmCXAhGVCiazW3bcOD_CWORqvTE0j9',
    secretKey: 'ILIkDDJe6cNo6usq01f80Nvgt8c9RJrF8c1ctt1i',
    dataDucket: 'back-group',
    fileUrl: 'http://qmly29cs3.hd-bkt.clouddn.com/'
  }

  return {
    ...config,
    ...userConfig,
  };
};
