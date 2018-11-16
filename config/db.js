const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize','root','',{ //实例一个Sequelize对象
	host:'localhost',
	dialect:'mysql',
	operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});


// 可以通过sequelize实例的authenticate方法来测试连接数据库是否成功
sequelize.authenticate().then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.error('数据库连接失败', err);
  });
