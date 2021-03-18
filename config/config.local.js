exports.security = {
  // dominWhiteList: ['http://localhost:8080'],
}

exports.sequelize = {
  datasources: [
    {
      delegate: 'model',
      baseDir: 'model',
      dialect: 'mysql',
      database: process.env.EGG_MYSQL_DATABASE || 'course-scheduling',
      host: process.env.EGG_MYSQL_HOST || '127.0.0.1',
      port: process.env.EGG_MYSQL_PORT || '3306',
      username: 'root',
      password: '190626',
      pool: {
        max: 20,
        min: 0,
        idle: 10000,
      },
    },
  ],
}