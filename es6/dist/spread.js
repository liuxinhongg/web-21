"use strict";

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
	console.log(typeof arr === "undefined" ? "undefined" : _typeof(arr)); //object 
	console.log(arr instanceof Array); //true
	console.log(Array.isArray(arr)); //true
}