let http = require("http");
let server = http.createServer((req,res)=>{
	let num = parseInt(Math.random()*9999);  //[0,9999)
	let ips = req.connection.remoteAddress;
	// console.log(ips);
	if(num === 6666){
		console.log("中奖用户"+ips);
		throw new Error("game over");
	}
	res.end(num.toString(),"【ip是】"+ips)
})
server.listen(3000);
console.log("游戏开始")