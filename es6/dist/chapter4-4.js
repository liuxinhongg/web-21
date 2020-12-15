"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	// 复制对象
	var obj = { name: "zhangsan", age: 19 };
	var otherobj = _extends({}, obj);
	console.log(otherobj);
}
{
	// 给对象设置默认值
	var _obj = { name: "zhangsan", hobby: "playing" };
	var _otherobj = _extends({}, _obj, { name: "lisi" });
	console.log(_otherobj);
}
{
	// 合 并 对 象
	var _obj2 = { name: 'apple', price: 18 };
	var _otherobj2 = { color: "red" };
	var connect = _extends({}, _obj2, _otherobj2);
	console.log(connect);
}
{
	var name = "王刚";
	var age = 19;
	var es5obj = {
		name: name,
		age: age,
		sayHello: function sayHello() {
			console.log("我是谁？我在哪？");
		}
	};
	console.log(es5obj);
	var es6obj = {
		name: name,
		age: age,
		sayHello: function sayHello() {
			console.log("我是谁？我在哪？es6");
		}
	};
	console.log(es6obj);
	es6obj.sayHello();
}
{
	var key = "name";
	// es5
	var _es5obj = {};
	_es5obj[key] = "xiaoming";
	console.log(_es5obj);
	//es6
	var _es6obj = _defineProperty({}, key, 'xiaogang');
	console.log(_es6obj);
}
// 新增方法
{
	// 1、Object.is ()判断两个值是否相同 类似===
	console.log(NaN === NaN); //false
	// let result = Object.is(NaN,NaN);
	// let result = Object.is(1,"1");
	var result = Object.is(Infinity, Infinity);
	// let result = Object.is(NaN,NaN);
	console.log(result); //true
}
{
	// 2、Object.assign(目标对象，来源对象)值复制
	var person = { name: "zhouyuzhe", age: 18, info: { height: 180 } };
	var otherperson = {};
	Object.assign(otherperson, person);
	person.info.height = 170;
	console.log("person", person);
	console.log(otherperson);
}
{
	// Array.from()将一个类数组转换成一个真正的数组
	var str = "hello";
	var strlist = Array.from(str);
	console.log(strlist);
}
{
	// Object.keys  Object.values  Object.entries
	var _person = { name: "zhouyuzhe", age: 18, height: 180 };
	var _obj3 = {};
	/* for (let key of Object.keys(person)) {
 	console.log(key)
 	// obj[key] = person[key]
 } */
	/* for (let val of Object.values(person)) {
 	console.log(val)
 	// obj[key] = person[key]
 } */
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(_person)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var en = _step.value;

			console.log(en);
			// obj[key] = person[key]
		}
		// console.log(obj)
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}