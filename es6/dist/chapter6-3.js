'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	// Iterator（遍历器）
	var arr = [1, 2, 3, 4];
	var fn = arr[Symbol.iterator]();
	/* console.log(fn.next())//{value: 1, done: false}
 console.log(fn.next())
 console.log(fn.next())
 console.log(fn.next())
 console.log(fn.next()) */
}
{
	var useIte = function useIte(array) {
		var index = 0;
		return {
			next: function next() {
				return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
			}
		};
	};

	var it = useIte(['a', 'b']);
	// console.log(it.next())
	// console.log(it.next())
	// console.log(it.next())
}
// Symbol.iterator
{
	var obj = _defineProperty({
		color: "red",
		fontSize: 18,
		price: 18,
		name: 'apple'
	}, Symbol.iterator, function () {
		var index = 0;
		var values = Object.values(this);
		return {
			next: function next() {
				if (index < values.length) {
					return {
						value: values[index++],
						done: false
					};
				} else {
					return {
						value: undefined,
						done: true
					};
				}
			}
		};
	});
	var objIt = obj[Symbol.iterator]();
	console.log(objIt.next());
	console.log(objIt.next());
	console.log(objIt.next());
	console.log(objIt.next());
	console.log(objIt.next());
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var s = _step.value;

			console.log(s);
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