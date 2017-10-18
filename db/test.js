require('babel-polyfill');
var studentDB = require('./studentDB');
var Student = require('../module/Student');
//查找所有
studentDB.findAll().then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});	
//添加学生
// var student = new Student(null,"lli","男","1996-08-04",null);
// studentDB.save(student).then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// }); 
//修改学生信息
/*var student = new Student(2,'lili','女','1997-02-01',null);
studentDB.update(student).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/
//删除
// var ids = [14];
// studentDB.batchDelete(ids).then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log("报错了"+err);
// });
//id查询
// studentDB.findById(10).then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log("报错了"+err);
// });
//关键字查询
// studentDB.query('张').then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log("报错了"+err);
// });