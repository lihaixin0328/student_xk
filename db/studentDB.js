let pool = require('./pool');

module.exports = {
    //通过id查询
    findById(id){
        var sql = "select * from xk_student where id="+id;
        return pool.execute(sql);
    },
    //通过关键字查询
    query(keys){
        var sql  = "select *from xk_student where name like '%"+keys+"%' or gender like '%"+keys+"%' ";
        return pool.execute(sql);
        // var sql = "select * from xk_student where name like '%"+keys+"%' or gender like '%"+keys+"%'";
    },
    findAll(){
        var sql = "select * from xk_student";
        return pool.execute(sql);
    },
    batchDelete(ids){
        var sql = "delete  from xk_student where id in ("+ids.join()+")";
        return pool.execute(sql);
    },
    save(student){
        var sql = "insert into xk_student values(null,'"+student.name+"','"+student.gender+"','"+student.birth+"',"+student.class_id+")";
        return pool.execute(sql);
    },
    update(student){
      var sql = "update xk_student set name = '"+student.name+"',gender = '"+student.gender+"',birth='"+student.birth+"',class_id="+student.class_id+" where id= '"+student.id+"'";
        return pool.execute(sql);
    }

    //laoding sql
}
