const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.post('/',(req,res)=>{
    var {uname,upwd}=req.body;
    var sql=`SELECT * FROM user WHERE uname=? AND upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send('登录成功');
        }else{
            res.send('登录失败，请检查用户名和密码');
        }
    });
})

module.exports=router;