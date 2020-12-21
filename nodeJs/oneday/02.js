let http = require("http");
let a = 0;
let server = http.createServer((req,res)=>{
	a++;
	// res.end()接受的是一个字符串
	res.end(a.toString());
})
server.listen(8000);
console.log("服务已启动~")