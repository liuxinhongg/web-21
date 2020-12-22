let my = require("./ys.js");
/**/ 
let addsql = "insert into user(username,password,email,phone,nick) values(?,?,?,?,?)";
let sqlparams = ['苟金航','55555','55555@qq.com','55555','gjh']
my.query(addsql,sqlparams,(result)=>{
	console.log(result);
}) 
// my.query("select * from user",[],data=>console.log(data))