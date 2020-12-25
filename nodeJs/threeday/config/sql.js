const sqlconfig = {
	userSearch :`select * from user where username = ?`,//通过username查询
	userInfo:`select username,email,phone,nick from user where username=?`,
	userInsert:`insert into user(username,password,email,phone,nick) values(?,?,?,?,?)`,//新增
	userUpdata:`update user set username=?,email=?,phone=?,nick=? where id=?`//更新
	
}
module.exports = sqlconfig