{
	function fn(){
		// console.log(arguments[0])
		let sum = 0;
		for(var i = 0;i<arguments.length;i++){
			sum+=arguments[i]
		}
		console.log(sum)
	}
	fn(11,22);
	fn(11,22,33,44);
}
{
	// instanceof
	let arr = [1,2,3,4,5];
	console.log(typeof arr);//object 
	console.log(arr instanceof Array);//true
	console.log(Array.isArray(arr))//true
} 
{
	let arr = [11,22,33];
	console.log(arr);
	console.log(arr.constructor);
	console.log(Array)
	console.log(arr.constructor===Array);//true
	let obj = { name:'lxh' }
	console.log(obj)
	console.log(obj.toString())//[object Array]
	console.log(arr.toString())
	// 想用数组调用object的tostring方法
	console.log(Object.prototype.toString.call(arr))//[object Array] call改变了this的指向
	// 验证
	console.log(Object.prototype.toString.call(arr)==='[object Array]')
	// console.log(obj.toString.call(arr));
}
{
	function fn(){
		"use strict"
		console.log(this);
	}
	fn()
}
{
	var data = new Date();
	console.log(data);//Thu Dec 17 2020 15:48:51 GMT+0800 (中国标准时间)
	console.log(data.toJSON())//可读性的日期
	
}
{
	var obj = {name:"xiaomei"};
	function fun(){
		console.log(this)
	}
	fun.call(obj)
	fun.apply(obj)
	var bind1= fun.bind(obj);
	bind1()
}
{
	"use strict"
	a = 10;
	console.log(a);
	function fun(name,name){
		console.log(name)
	}
	fun("我是谁？","我在那")
}
{
	let obj = {
		name :"zhangsan",
		age:18,
		say:()=>{
			console.log(this)
		}
	}
}