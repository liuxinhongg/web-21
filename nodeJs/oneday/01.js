// console.log("今天周一~太阳真好~")
// http内置模块 require表示引用
let http = require("http");
// console.log(http);
// 创建服务器
let server = http.createServer(function(req,res){
	res.setHeader("Content-type","text/html;charset=utf-8");//解决浏览器乱码
	res.end("今天周一~太阳真好~sun");
})
// 监听端口号
server.listen(3000,"127.0.0.1");
console.log("服务已启动~")