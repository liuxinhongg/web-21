let mysql = require("mysql");
// console.log(mysql);
// let form = new FormData();//表单序列化
// 创建数据库
let connection = mysql.createConnection({
	host:'192.168.1.103',
	user:'root',
	password:'root',
	port:'3306',
	database:'web21'
})
// 链接数据库
connection.connect();
// connection.query(sql语句,插入的值,回调函数(err,result){})
/*
//新增
let addsql = "insert into user(username,password,email,phone,nick) values(?,?,?,?,?)";
let sqlparams = ['zhouyuzhe','222222','222222@qq.com','222222','zyz']
connection.query(addsql,sqlparams,function(err,result){
	if(err){
		console.log("插入错误");
		return;
	}
	console.log(result);
})
*/
// 查询
// 查询所有
// var searchsql = 'SELECT * FROM user';
// let tjsql = `select * from user where id=?`
/* let tjsql = `select username,email,phone,nick from user where id=?`
let tjparams = [1]
connection.query(tjsql,tjparams,function(err,result){
	if(err){
		console.log("插入错误");
		return;
	}
	console.log(result);
}) */
// 修改
/* var modSql = 'UPDATE user SET username = ?,phone = ?,email = ?,nick=? WHERE id = ?';
var modSqlParams = ['fangshengzhi', '333333','333333@qq.com','fsz',1];
connection.query(modSql,modSqlParams,(err,result)=>{
	if(err){
		console.log("插入错误");
		return;
	}
	console.log(result);
})
 */
// 删除
var delSql = 'DELETE FROM user where id=1';
connection.query(delSql,(err,result)=>{
	if(err){
		console.log("删除错误");
		return;
	}
	console.log(result);
})
connection.end();