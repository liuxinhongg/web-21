const schedule = require('node-schedule');
const  scheduleCronstyle = function(){
	schedule.scheduleJob('30 * * * * *',()=>{
		console.log("时间是："+new Date());
	})
}
scheduleCronstyle()