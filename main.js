//引入项目所需的包
const express = require('express');
const bodyParser = require('body-parser');



const login=require('./routes/login.js');
const register=require('./routes/register.js');


//1.使用express构建web服务器
var app = express();
app.listen(3000);

//2.托管静态资源
app.use(express.static('./myPro'));


//配置body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

//3.使用路由器管理所有用户模块下的路由


//项目路由挂载

app.use('/login',login);
app.use('/register',register);