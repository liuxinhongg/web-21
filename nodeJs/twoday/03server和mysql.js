const http = require("http");
const my = require("./ys.js");
let url = require("url");
const server = http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	let aa = url.parse(req.url,true).query;
	console.log(aa);
	// res.end(1)
	let sqladd = `insert into user(username,password,email,phone,nick) values (?,?,?,?,?)`;
	let sqlparams = [aa.username,aa.password,aa.email,aa.phone,aa.nick];
	my.query(sqladd,sqlparams,(result)=>{
		// argument must be of type string or an instance of Buffer. Received an instance of Array
		res.end("success~")
	})
})
server.listen(3000);
console.log("服务已启动~")