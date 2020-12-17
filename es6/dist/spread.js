'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
	var fn = function fn() {
		// console.log(arguments[0])
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		console.log(sum);
	};

	fn(11, 22);
	fn(11, 22, 33, 44);
}
{
	// instanceof
	var arr = [1, 2, 3, 4, 5];
	console.log(typeof arr === 'undefined' ? 'undefined' : _typeof(arr)); //object 
	console.log(arr instanceof Array); //true
	console.log(Array.isArray(arr)); //true
}
{
	var _arr = [11, 22, 33];
	console.log(_arr);
	console.log(_arr.constructor);
	console.log(Array);
	console.log(_arr.constructor === Array); //true
	var _obj = { name: 'lxh' };
	console.log(_obj);
	console.log(_obj.toString()); //[object Array]
	console.log(_arr.toString());
	// 想用数组调用object的tostring方法
	console.log(Object.prototype.toString.call(_arr)); //[object Array] call改变了this的指向
	// 验证
	console.log(Object.prototype.toString.call(_arr) === '[object Array]');
	// console.log(obj.toString.call(arr));
}
{
	var _fn = function _fn() {
		"use strict";

		console.log(this);
	};

	_fn();
}
{
	var data = new Date();
	console.log(data); //Thu Dec 17 2020 15:48:51 GMT+0800 (中国标准时间)
	console.log(data.toJSON()); //可读性的日期
}
{
	var fun = function fun() {
		console.log(this);
	};

	var obj = { name: "xiaomei" };

	fun.call(obj);
	fun.apply(obj);
	var bind1 = fun.bind(obj);
	bind1();
}
{
	"use strict";
	a = 10;
	console.log(a);
}