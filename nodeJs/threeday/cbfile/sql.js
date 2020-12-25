let mysql = require("mysql");
let pool = mysql.createPool({
	host:'192.168.1.103',
	user:'root',
	password:'root',
	port:'3306',
	database:'web21'
})
exports.query = function(sql,arr,callback){
	pool.getConnection(function(err,connection){
		if(err) {
			throw  new Error();
			return;
		}
		connection.query(sql,arr,function(error,result){
			connection.release();
			if(error) throw error;
			callback && callback(result)
		})
	})
}