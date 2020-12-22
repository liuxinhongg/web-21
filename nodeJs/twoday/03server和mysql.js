const http = require("http");
const my = require("./ys.js");
const server = http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8");
	my.query("select * from user",[],(result)=>{
		// argument must be of type string or an instance of Buffer. Received an instance of Array
		res.end(JSON.stringify(result))
	})
})
server.listen(3000);
console.log("服务已启动~")