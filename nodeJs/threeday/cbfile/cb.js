let sql = require("./sql.js");
let sqlConfig = require("../config/sql.js")
let {md5} = require("../config/method.js");
let jswtoken = require("jsonwebtoken");
let { PWD_SALT,PRIVATE_KEY,TIME } = require("../config/otherConfig.js")
class UserCb {
	zhuce(req,res,next){
		let  user  = req.body;
		if(user.username && user.password && user.email && user.phone){
			sql.query(sqlConfig.userSearch,[user.username],result=>{
				console.log(result);
				if(result.length){
					res.send({
						msg:"用户名已存在",
						code:0
					})
				}else{
					user.password = md5(`${user.password}${PWD_SALT}`)
					let sqlparams = [user.username,user.password,user.email,user.phone,user.nick];
					sql.query(sqlConfig.userInsert,sqlparams,function(result){
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
	}
	login(req,res,next){
		let login = req.body;
		console.log(login)
		if(login.username && login.password){
			sql.query(sqlConfig.userSearch,[login.username],result=>{
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
	}
	userInfo(req,res,next){
		console.log(req.query);
		let user = req.query.username
		if(user ==="" ||user===undefined){
			res.send({
				msg:"用户名不能为空",
				code:0
			})
		}
		sql.query(sqlConfig.userInfo,[user],result=>{
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
	}
	userUpdata(req,res,next){
		let updata = req.query;
		sql.query(sqlConfig.userUpdata,[updata.username,updata.email,updata.phone,updata.nick,updata.id],result=>{
			res.send({
				msg:"更新成功",
				code:1
			})
		})
		
	}
}
module.exports = new UserCb()