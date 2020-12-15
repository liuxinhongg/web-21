{
	// 复制对象
	const obj = { name:"zhangsan",age:19 }
	let otherobj={...obj};
	console.log(otherobj)
}
{
	// 给对象设置默认值
	let obj = {name:"zhangsan",hobby:"playing"};
	let otherobj = {...obj,name:"lisi"};
	console.log(otherobj)
}
{
	// 合 并 对 象
	let obj = { name:'apple',price:18 };
	let otherobj = { color:"red" };
	let connect = { ...obj,...otherobj };
	console.log(connect);
}
{
	let name = "王刚";
	let age = 19;
	let es5obj = {
		name:name,
		age:age,
		sayHello:function(){
			console.log("我是谁？我在哪？")
		}
	}
	console.log(es5obj);
	let es6obj = {
		name,
		age,
		sayHello(){
			console.log("我是谁？我在哪？es6")
		}
	}
	console.log(es6obj);
	es6obj.sayHello()
}
{
	let key = "name";
	// es5
	let es5obj = {};
	es5obj[key] = "xiaoming";
	console.log(es5obj)
	//es6
	let es6obj = {
		[key]:'xiaogang'
	}
	console.log(es6obj)
}
// 新增方法
{
	// 1、Object.is ()判断两个值是否相同 类似===
	console.log(NaN === NaN);//false
	// let result = Object.is(NaN,NaN);
	// let result = Object.is(1,"1");
	let result = Object.is(Infinity,Infinity);
	// let result = Object.is(NaN,NaN);
	console.log(result)//true
}
{
	// 2、Object.assign(目标对象，来源对象)值复制
	let person  = { name:"zhouyuzhe",age:18, info:{ height:180 } };
	let otherperson = {};
	Object.assign(otherperson,person);
	person.info.height = 170;
	console.log("person",person)
	console.log(otherperson)
}
{
	// Array.from()将一个类数组转换成一个真正的数组
	const str = "hello";
	const strlist = Array.from(str);
	console.log(strlist);
}
{
	// Object.keys  Object.values  Object.entries
	const person  = { name:"zhouyuzhe",age:18, height:180};
	let obj = {};
	/* for (let key of Object.keys(person)) {
		console.log(key)
		// obj[key] = person[key]
	} */
	/* for (let val of Object.values(person)) {
		console.log(val)
		// obj[key] = person[key]
	} */
	for (let en of Object.entries(person)) {
		console.log(en)
		// obj[key] = person[key]
	}
	// console.log(obj)
}