let express = require('express');
let route = express.Router();
let studentDB= require('../db/studentDB');
let Student = require('../module/Student');
//查询所有
route.get('/findAll',(req,resp)=>{
    studentDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//通过id查询
route.get('/findById',(req,resp)=>{
    // resp.send(req.query);
    studentDB.findById(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);       
    });
});
//模糊查询
route.get('/query/:keys',(req,resp)=>{
    studentDB.query(req.params.keys).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    });
    
});
//录入
route.post('/save',(req,resp)=>{
    let student = new Student();
    Object.assign(student,req.body);
    studentDB.save(student).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    });
});
//修改
route.post('/update',(req,resp)=>{
    let student = new Student();
    Object.assign(student,req.body);
    studentDB.update(student).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    });
});
//批量删除
route.post('/batchDelete',(req,resp)=>{
    var ids = toArr(req.body['ids[]']);
    studentDB.batchDelete(ids).then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        resp.send(err);
    });
});
function toArr (ids){
    var arr = [];
    return arr.concat(ids);
}
module.exports = route;