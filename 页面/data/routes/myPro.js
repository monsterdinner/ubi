const express=require('express');
var router=express.Router();
const pool=require('../pool.js');

router.post('/login',(req,res)=>{
  
  var $uname=req.body.uname;
  
  if(!$uname){
    res.send({code:401,msg:'用户名不存在'});
  return;
  }
  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send({code:402,msg:'用户密码不存在'});
	return;
  }
  var sql="SELECT*FROM xz_user WHERE uname=? AND upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	  res.send({code:200,msg:'login suc'})
	}else{
	  res.send({code:300,msg:'uname or upwd error'})
	  }
  })
});

  router.get("/list",(req,res)=>{
    var sql="SELECT*FROM xz_user";
	pool.query(sql,(err,result)=>{
	  if(err) throw err;
	  res.send(result);
	});
  })

  router.get("/delete",(req,res)=>{
     
	var  $uid=req.query.uid;
    if(!$uid){
	  res.send({code:401,msg:"uid required"})
	}
	var sql="DELETE FROM xz_user WHERE uid=?"
	pool.query(sql,[$uid],(err,result)=>{
	  if(err)throw err;
	   res.send("1");
	})
  })
  router.get("/query",(req,res)=>{
	  var uid=req.query.uid;
	  if(!uid){
	    res.send({code:401,msg:"uid不存在"});
		return;
	  }
	  var sql=`SELECT*FROM xz_user WHERE uid=?`;
	  pool.query(sql,[uid],(err,result)=>{
	 
		if(result.length>0){
		  res.send(result[0]);
		}else{
		  res.send('没有查询出用户信息')
		  }
	    
	    
	  })
	})
   router.post("/update",(req,res)=>{
	   var obj=req.body;
	   var $uid=obj.uid;
	   if(!$uid){
	    res.send({code:401,msg:"uid不存在"});
		return;}
	   var $uname=obj.uname;
	   if(!$uname){
	    res.send({code:402,msg:"uname不存在"});
		return;}
	   var $upwd=obj.upwd;
	   if(!$upwd){
	    res.send({code:403,msg:"upwd不存在"});
		return;}
	   var $email=obj.email;
	   if(!$email){
	    res.send({code:404,msg:"email不存在"});
		return;}
	   var $phone=obj.phone;
	   if(!$phone){
	    res.send({code:405,msg:"phone不存在"});
		return;}
	   var $user_name=obj.user_name;
	   if(!$user_name){
	    res.send({code:406,msg:"user_name不存在"});
		return;}
	   var $gender=obj.gender;
	   if(!$gender){
	    res.send({code:407,msg:"gender不存在"});
		return;}
	   var sql="UPDATE xz_user SET uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? WHERE uid=?";
	   pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
	     if(err)throw err;
		  res.send("<script>alert('修改成功！');location.href='http://127.0.0.1:3000/02-list.html'</script>")
		  
	   })
	  })
	   router.post('/add',(req,res)=>{
	     var $uname=req.body.uname;
		 if(!$uname){
		   res.send({code:401,msg:"账号不存在"});
		   return;
		 }
		 var $upwd=req.body.upwd;
		 if(!$upwd){
		   res.send({code:402,msg:"密码不存在"})
			   return;
		 }
		   var $email = obj.email
  if(!$email) {
    res.send({code: 403, msg: 'email required'});
	return;
  }
  var $phone = obj.phone;
  if(!$phone){
    res.send({code: 404, msg: 'phone required'});
	return;
  }
		 var sql="INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)"
		 pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
		   if(err)throw err;
		   res.send({code: 200, msg: 'register suc'});
		 })

	   })
	  
	   
	   
  router.get('/checkUname', (req,res)=>{
  var $uname = req.query.uname;
  if(!$uname){
    res.send({code:401,msg:'uname required'});
	return;
  }


  var sql ="SELECT * FROM xz_user WHERE uname=?";
  pool.query(sql,[$uname],(err,result)=>{

	if(result.length>0){
	  res.send('0');
	}else{
	  res.send('1');
	}
  });
});

  router.get('/checkemail', (req,res)=>{
  var $email = req.query.email;
  if(!$email){
    res.send({code:401,msg:'email required'});
	return;
  }


  var sql ="SELECT * FROM xz_user WHERE email=?";
  pool.query(sql,[$email],(err,result)=>{

	if(result.length>0){
	  res.send('0');
	}else{
	  res.send('1');
	}
  });
});

  router.get('/checkphone', (req,res)=>{
  var $phone = req.query.phone;
  if(!$phone){
    res.send({code:401,msg:'phone required'});
	return;
  }


  var sql ="SELECT * FROM xz_user WHERE phone=?";
  pool.query(sql,[$phone],(err,result)=>{

	if(result.length>0){
	  res.send('0');
	}else{
	  res.send('1');
	}
  });
});


 router.post("/register",(req,res)=>{
	   console.log(req.body);
	   var obj=req.body;
	  
	
	   var $uname=obj.uname;
	   if(!$uname){
	    res.send({code:402,msg:"uname不存在"});
		return;}
		
	   var $upwd=obj.upwd;
	   if(!$upwd){
	    res.send({code:403,msg:"upwd不存在"});
		return;}
		
	   var $email=obj.email;
	   if(!$email){
	    res.send({code:404,msg:"email不存在"});
		return;}
	
	   var $phone=obj.phone;
	   if(!$phone){
	    res.send({code:405,msg:"phone不存在"});
		return;}
		
	   var $user_name=obj.user_name;
	   if(!$user_name){
	    res.send({code:406,msg:"user_name不存在"});
		return;}
		console.log(6);  var $gender=obj.gender;
	   if(!$gender){
	    res.send({code:407,msg:"gender不存在"});
		return;}
	
		
	   var sql="INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,?,?)";
	   pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
	     if(err)throw err;
		
		  res.send("修改成功");
		  
	   })
	  })
module.exports=router;