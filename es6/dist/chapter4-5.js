"use strict";

{
	// Map()构造函数,数组作为参数,参数还要是一个个数组
	var map = new Map();
	// 添加元素 set（k,v)
	map.set([1, 2, 3], "number");
	console.log(map);
	var map2 = new Map([["name", "zhangsan"], ["age", 18]]);
	console.log(map2.length);
	console.log(map2.size);
	map2.set("name", "lisi");
	console.log(map2);
	// 链式回调  回调地狱 event...loop
	map2.set("name", "xiaoming").set("hobby", ["eating", "playing"]).set("height", "180");
	console.log(map2);
	var getmap = map2.get("hobby");
	console.log(getmap);
	console.log(map2.has("name"));
	map2.delete("height");
	console.log(map2);
}
{
	// 遍历器生成函数 keys values entries
	var _map = new Map([["name", "zhangsan"], ["age", 18], ["hobby", "playing"]]);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			console.log(key);
		}
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = _map.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var val = _step2.value;

			console.log(val);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = _map.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var en = _step3.value;

			console.log(en);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}
// WeakMap()接受一个对象作为键名,不接受其他类型,
{
	var wmap = new WeakMap([[{ "name": "kiki" }, "jack"]]);
	console.log(wmap);
}