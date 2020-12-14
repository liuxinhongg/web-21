'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	var a1 = Symbol();
	var a2 = Symbol();
	console.log(a1);
	console.log(a2);
	console.log(a1 === a2); //false
}
{
	var _a = Symbol('kk');
	var _a2 = Symbol('kk');
	console.log(_a === _a2);
}
{
	var _a3 = Symbol.for("aa");
	var _a4 = Symbol.for("aa");
	console.log(_a3 === _a4); //true
}
{
	var _obj;

	var _a5 = Symbol("kk");
	// obj[a1]
	var obj = (_obj = {
		a1: '123'
	}, _defineProperty(_obj, _a5, '222'), _defineProperty(_obj, 'kk', '123'), _obj);
	console.log(obj);
}
{
	// Object.defineProperty(obj,a1,{value:"lisi"})
	var _a6 = Symbol("kk");
	var _obj2 = {};
	_obj2.a1 = "zhangsan";
	Object.defineProperty(_obj2, _a6, { value: "lisi" });
	console.log(_obj2);
}
{
	var user = Symbol("jack");
	console.log(user);
}