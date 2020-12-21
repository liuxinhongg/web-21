let http = require("http");
let fs = require("fs");
let url = require("url");
let server = http.createServer((req,res)=>{
	res.setHeader("Content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	if(req.url==="/favicon.ico"){
		return;
	}
	if(req.url==="/aaa"){
		fs.readFile("./test.txt",(err,data)=>{
			if(err){
				console.log("读取文件失败");
				return;
			}
			res.end(data)
		})
	}else if(req.url==="/data"){
		fs.readFile("./data.json",(err,data)=>{
			if(err){
				console.log("读取文件失败");
				return;
			}
			res.end(data)
		})
	}
	
})
server.listen(3000);
console.log("服务已启动~")