let http = require("http");
let fs = require("fs");
let server = http.createServer((req,res)=>{
	res.setHeader("Content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	/* fs.readFile("./test.txt",(err,data)=>{
		if(err){
			console.log("文件读取失败~")
			return;
		}
		res.end(data)
	}) */
	fs.readFile('./data.json',(err,data)=>{
		if(err){
			console.log("文件读取失败~")
			return;
		}
		res.end(data)
	})
})
server.listen(3000);
console.log("读取文件~")