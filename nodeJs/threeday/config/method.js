let crypto = require("crypto");
function md5(s){
	// 注意参数必须是string类型,不然会报错
	 return crypto.createHash("md5").update(String(s)).digest('hex')
}
module.exports = {
	md5,
}