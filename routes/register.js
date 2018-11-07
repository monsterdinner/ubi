const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.post('/',(req,res)=>{
    var {uname,upwd,phone,email}=req.body;
    var sql=`INSERT INTO user VALUES(NULL,?,?,?,?) `;
    pool.query(sql,[uname,upwd,phone,email],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.send('注册成功');
        else
            res.send('注册失败');
    });
});
router.post('/uname',(req,res)=>{
    var {uname,upwd,phone,email}=req.body;
    var sql=`SELECT * FROM user WHERE uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0)
            res.send('0');
        else
            res.send('1');
    });
})

router.post('/phone',(req,res)=>{
    var {uname,upwd,phone,email}=req.body;
    var sql=`SELECT * FROM user WHERE phone=?`;
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0)
            res.send('0');
        else
            res.send('1');
    });
});
module.exports=router;