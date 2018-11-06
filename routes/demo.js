const express=require('express');
var router=express.Router();

var pool=require('../pool.js');

//1.ajax-demo
router.get('/ajaxDemo',(req,res)=>{
   res.send('这是我的第一个ajax程序！');
});

//2.练习
router.get('/myAjax',(req,res)=>{
   res.send('这是我的第一个ajax练习');
})


//get带参数
router.get('/login',(req,res)=>{
  //获取用户名称
  var $uname=req.query.uname;
  //获取用户密码
  var $upwd=req.query.upwd;
  if(!$uname){
    res.send('用户名不存在');
	return;
  }
  
  if(!$upwd){
    res.send('用户密码不存在');
	return;
  }
 // res.send("用户名："+$uname+"密码："+$upwd);
  //将用户名和密码作为参数去数据库查询，如果查出结果，提示登录成功，否则登录失败
  var sql="select * from xz_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(result.length>0){
	  res.send("登录成功");
	}else{
	  res.send("用户名或密码错误");
	}
  })
  
})


//post带参数
router.post('/postlogin',(req,res)=>{
  //获取用户名称
  var $uname=req.body.uname;
  //获取用户密码
  var $upwd=req.body.upwd;
  if(!$uname){
    res.send('用户名不存在');
	return;
  }
  
  if(!$upwd){
    res.send('用户密码不存在');
	return;
  }
 // res.send("用户名："+$uname+"密码："+$upwd);
  //将用户名和密码作为参数去数据库查询，如果查出结果，提示登录成功，否则登录失败
  var sql="select * from xz_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(result.length>0){
	  res.send("登录成功");
	}else{
	  res.send("用户名或密码错误");
	}
  })
  
})


//查询整个用户表数据：userlist
router.get('/userlist',(req,res)=>{
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
	res.send(result);
  });
});



module.exports=router;