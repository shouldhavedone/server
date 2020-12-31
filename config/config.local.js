exports.security = {
  dominWhiteList: ['http://localhost:9000'],
}

exports.sequelize = {
  datasources: [
    {
      delegate: 'model',
      baseDir: 'model',
      dialect: 'mysql',
      database: process.env.EGG_MYSQL_DATABASE || 'blog',
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