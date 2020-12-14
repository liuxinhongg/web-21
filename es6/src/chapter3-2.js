{
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1);
	console.log(a2);
	console.log(a1 === a2);//false
}
{
	let a1 = Symbol('kk');
	let a2 = Symbol('kk');
	console.log(a1===a2)
}
{
	let a1 = Symbol.for("aa");
	let a2 = Symbol.for("aa");
	console.log(a1===a2);//true
}
{
	let a1 = Symbol("kk");
	// obj[a1]
	let obj = {
		a1:'123',
		[a1]:'222',
		kk:'123'
	}
	console.log(obj)
}
{
	// Object.defineProperty(obj,a1,{value:"lisi"})
	let a1 = Symbol("kk");
	let obj = {};
	obj.a1= "zhangsan";
	Object.defineProperty(obj,a1,{value:"lisi"});
	console.log(obj);
}
{
	const user = Symbol("jack");
	console.log(user);
}