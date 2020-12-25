var express = require('express');
var router = express.Router();
let sql = require("../sql.js");
// 加密
let crypto = require("crypto")
let PWD_SALT="web_web21";
function md5(s){
	// 注意参数必须是string类型,不然会报错
	 return crypto.createHash("md5").update(String(s)).digest('hex')
}
// 生成token
let jswtoken = require("jsonwebtoken");
let PRIVATE_KEY = "zhouyuzhe";
let TIME = 60*3;
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({
	  name:"yangli",
	  othername:"fangshizheng"
  })
});
router.post('/zhuce',(req,res,next)=>{
	/* let username = req.body.username;
	let password = req.body.password;
	let email = req.body.email;
	let phone = req.body.phone;
	let nick = req.body.nick; */
	let  user  = req.body;
	if(user.username && user.password && user.email && user.phone){
		let sqlsearch = `select * from user where username = ?`;
		sql.query(sqlsearch,[user.username],result=>{
			console.log(result);
			if(result.length){
				res.send({
					msg:"用户名已存在",
					code:0
				})
			}else{
				user.password = md5(`${user.password}${PWD_SALT}`)
				let sqladd = 'insert into user(username,password,email,phone,nick) values(?,?,?,?,?)';
				let sqlparams = [user.username,user.password,user.email,user.phone,user.nick];
				sql.query(sqladd,sqlparams,function(result){
					res.send({
						msg:"注册成功",
						code:1
					})
				}) 
			}
		})
	}else{
		res.send({
			msg:"输入信息不能为空",
			code:-1
		}) 
	}
})
router.post("/login",(req,res,next)=>{
	let login = req.body;
	console.log(login)
	if(login.username && login.password){
		sql.query(`select * from user where username = ?`,[login.username],result=>{
			if(result.length){
				login.password = md5(`${login.password}${PWD_SALT}`)
				if(result[0].password ===login.password ){
					// let token=jswtoken.sign({payload},PRIVATE_KEY,{expiresIn:TIME_OUT} )
					let token = jswtoken.sign(login,PRIVATE_KEY,{expiresIn:TIME})
					res.send({
						msg:"登录成功~",
						token:token,
						code:1
					})
				}else{
					res.send({
						msg:"密码错误",
						code:2
					})
				}
			}else{
				res.send({
					msg:"用户不存在，请输入正确的用户名",
					code:0
				})
			}
		})
	}else{
		res.send({
			msg:"用户名或密码信息不能为空",
			code:-1
		}) 
	}
})
// 查询用户信息
router.get("/userinfo",(req,res,next)=>{
	console.log(req.query);
	let user = req.query.username
	if(user ==="" ||user===undefined){
		res.send({
			msg:"用户名不能为空",
			code:0
		})
	}
	sql.query("select username,email,phone,nick from user where username=?",[user],result=>{
		if(result.length){
			res.send({
				msg:"查询成功",
				data:result,
				code:1
			})
		}else{
			res.send({
				msg:"用户名不存在",
				code:-1
			})
		}
	})
	
	// res.send("aa");
})
router.get("/allsearch",(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	sql.query("select * from user",[],result=>{
		console.log(result)
		res.send({
			data:result,
			code:1
		})
	})
})
// 修改用户信息
router.get("/findid",(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	sql.query("select username,email,phone,nick from user where id =?",[req.query.id],result=>{
		res.send({
			msg:"success",
			code:1,
			data:result
		})
	})
})
router.get("/updata",(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	let updata = req.query;
	sql.query("update user set username=?,email=?,phone=?,nick=? where id=?",[updata.username,updata.email,updata.phone,updata.nick,updata.id],result=>{
		res.send({
			msg:"更新成功",
			code:1
		})
	})
	
})
module.exports = router;
