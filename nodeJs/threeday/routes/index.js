var express = require('express');
var router = express.Router();
let sql = require("../sql.js");
let iconv = require('iconv-lite'); //引入模块
let cbfile = require("../cbfile/cb.js")
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({
	  name:"yangli",
	  othername:"fangshizheng"
  })
});
// 注册
router.post('/zhuce',cbfile.zhuce)
// 登录
router.post("/login",cbfile.login)
// 查询用户信息
router.get("/userinfo",cbfile.userInfo)
// 查询所有的用户信息
router.get("/allsearch",(req,res,next)=>{
	// res.header("Content-Type", "text/html;charset=utf-8");
	res.header("Access-Control-Allow-Origin", "*");
	// console.log(iconv.decode(req.query.username,'gb2312').toString())
	if(req.query.username){
		sql.query(`select * from user where username like '%${req.query.username}%'`,result=>{
			// console.log(result)
			res.send({
				msg:"查询成功",
				data:result,
				code:0
			})
		})
	}else{ 
		sql.query("select * from user",[],result=>{
			console.log(result)
			res.send({
				data:result,
				code:1
			})
		})
	}
	
})
// 通过id查询用户信息
router.get("/findid",(req,res,next)=>{
	sql.query("select username,email,phone,nick from user where id =?",[req.query.id],result=>{
		res.send({
			msg:"success",
			code:1,
			data:result
		})
	})
})
router.get("/updata",cbfile.userUpdata)
module.exports = router;
