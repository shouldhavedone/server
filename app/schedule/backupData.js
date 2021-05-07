const Substription = require('egg').Subscription;
const execSync = require('child_process').execSync;

class BackupData extends Substription {
  static get schedule() {
    return {
      interval: '1000s',
      type: 'all',
    }
  }

  async subscribe() {

    // cp.exec(`mongodump -h 127.0.0.1 -d koa -o E:\\Users\\Administrator\\Desktop\\koa`, {encoding: 'buffer'}, (error , stdout, stderr) => {
    //   if (error) throw error;
    //   console.log(stdout);
    //   console.log(stderr);  
    // });

    // execSync("mysqldump -uroot -p123456 course-scheduling >E:\\backupData\\course-scheduling\\course-scheduling.sql", (err, stdout, stderr) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log("同步备份中.....")
    // })
    console.log("备份结束")
  }
}

module.exports = BackupData;