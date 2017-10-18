let mysql = require('mysql');

let pool = global.pool;
if(!pool){
  //创建连接池
  pool = mysql.createPool({
    database:'web1702',
    user:'root',
    password:'root'
  });
  //将连接挂载到global
  global.pool = pool;
}

function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(!err){
        resolve(conn);
      }else {
        reject(err);
      }
    });
  })
}

function execute(sql){
    return new Promise(function(resolve,reject){
        var connection ;
        getConnection().then(function(conn){
          connection = conn;
          conn.query(sql,function(err,result){
            if(!err){
              resolve(result)
            }else {
              reject(err)
            }
          });
        }).catch(function(err){
          reject(err)
        }).finally(function(){
          connection.release();
          console.log("释放完成");
        });
    });    
}
module.exports = {execute,getConnection};


