"use strict";

{
	var set = new Set();
	set.add(1);
	console.log(set);
	// Object.is()去重
	var setOne = new Set([1, 1, 2, 3, 4, 2, 3, 4, 5]);
	console.log(setOne);
	console.log(setOne.length); //undefined
	console.log(setOne.size);
}
{
	var _set = new Set();
	// set.add([1,2,3,4]);
	var item = { "name": "apple" };
	_set.add(item);
	console.log(_set);
	console.log(_set.has(item));
	var _setOne = new Set([1, 1, 2, 3, 4, 2, 3, 4, 5]);
	_setOne.delete(1);
	console.log(_setOne);
}
{
	// keys和values
	var _set2 = new Set([1, 2, 3, 4, 5]);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _set2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
}
{
	var arr = [1, 2, 3, 4, 2, 3, 5, 1, 6, 7, 5];
	console.log(arr);
	var _set3 = new Set(arr);
	console.log(_set3);
	var changeArr = Array.from(_set3);
	console.log(changeArr);
}
{
	var obj = { name: 'zhangsan' };
	var wset = new WeakSet();
	wset.add(obj);
	console.log(wset);
}