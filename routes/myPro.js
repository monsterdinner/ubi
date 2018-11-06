const express=require("express");
var router=express.Router();

//引入连接池
var pool=require('../pool.js');

//1.用户登录-post
router.post('/login',(req,res)=>{
  //获取用户名称
  var $uname=req.body.uname;
  if(!$uname){
    res.send({code:401,msg:'用户名称不存在'});
	return;
  }
 //获取用户密码
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send({code:402,msg:'用户密码不存在'});
	return;
  }
  var sql="select * from xz_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send("登录成功");
	}else{
	  res.send("用户名或密码错误");
	}
  })
});


//2.查询用户表，并响应给前端
router.get('/list',(req,res)=>{
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
	 res.send(result);
  });
})

//3.删除用户
router.get('/deleteUser',(req,res)=>{
  var $uid=req.query.uid;
  if(!$uid){
    res.send("uid不存在");
	return;
  }
  var sql="delete from xz_user where uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw err;
	res.send("1");//1表示删除成功
  });
});

//4.用户检索
router.get('/query', (req,res)=>{
  var uid = req.query.uid;
  if(!uid){
    res.send('uid不存在');
	return;
  }
  var sql = `SELECT * FROM xz_user WHERE uid=?`;
  pool.query(sql,[uid],(err,result)=>{
	if(result.length>0){
	  res.send(result[0]);
	}else{
	  res.send('没查询出用户信息');
	}
  });
});

//修改
router.post('/update',(req,res)=>{
  var $uid=req.body.uid;
  if(!$uid){
    res.send("用户id不存在");
	return;
  }

  var $uname=req.body.uname;
  if(!$uname){
    res.send("用户名称不存在");
	return;
  }
  
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("用户密码不存在");
	return;
  }
  
  var $email=req.body.email;
  if(!$email){
    res.send("用户邮箱不存在");
	return;
  }
  var $phone=req.body.phone;
  if(!$phone){
    res.send("用户联系方式不存在");
	return;
  }
  var $user_name=req.body.user_name;
  if(!$user_name){
    res.send("用户真实姓名不存在");
	return;
  }
  var $gender=req.body.gender;
  if(!$gender){
    res.send("用户性别不存在");
	return;
  }  
  var sql="update xz_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";

  pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
    if(err) throw err;
	res.send("<script>alert('修改成功！');location.href='http://localhost:3000/02-list.html'</script>");
  
  });
});


//检查用户名称
router.get('/checkUname',(req,res)=>{
  var $uname=req.query.uname;
  if(!$uname){
    res.send('用户名称不能为空');
	return;
  }
  var sql="select * from xz_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send('用户名已存在');
	}else{
	  res.send('用户名可用');
	}
  });
});


//导出
module.exports=router;