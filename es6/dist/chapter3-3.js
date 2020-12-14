"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 数据的解构赋值
{
	var a = void 0,
	    b = void 0;
	a = 11;
	b = 22;

	console.log(a, b);
}
{
	var _a = void 0,
	    _b = void 0,
	    c = void 0;
	var _ref = [1, 2];
	_a = _ref[0];
	_b = _ref[1];
	c = _ref[2];

	console.log(_a, _b, c);
}
{
	var _a2 = void 0,
	    _b2 = void 0,
	    _c = void 0;
	_a2 = 1;
	_b2 = 2;
	var _ = 33;
	_c = _ === undefined ? 3 : _;

	console.log(_a2, _b2, _c);
}
{
	// ...拓展运算符(spread),返回的是一个数组
	var _a3 = void 0,
	    other = void 0;
	_a3 = 1;
	other = [2, 3, 4, 45, 6, 7, 8];

	console.log(_a3, other);
}
{
	var _a4 = void 0,
	    _b3 = void 0;
	var _ref2 = [1, 2, 3];
	_a4 = _ref2[0];
	_b3 = _ref2[2];

	console.log(_a4, _b3);
}
// 对象解构赋值
{
	var _a5 = void 0,
	    _b4 = void 0;
	var _a$b = { a: "hello", b: "world" };
	_a5 = _a$b.a;
	_b4 = _a$b.b;

	console.log(_a5, _b4);
}
{
	var num = void 0,
	    total = void 0;
	var _a$b2 = { a: 10, b: 20 };
	num = _a$b2.a;
	total = _a$b2.b;

	console.log(num, total);
}
{
	var fn = function fn() {
		return {
			name: "jiangjie",
			age: 18,
			nameList: [{
				name: "fanfu"
			}]
		};
	};

	var _b5 = fn();

	var person = _b5.name,
	    age = _b5.age,
	    _b5$nameList = _slicedToArray(_b5.nameList, 1),
	    otherperson = _b5$nameList[0].name;

	console.log(person, age, otherperson);
}