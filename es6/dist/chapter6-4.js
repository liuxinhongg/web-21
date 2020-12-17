'use strict';

{
	var say = /*#__PURE__*/regeneratorRuntime.mark(function say() {
		return regeneratorRuntime.wrap(function say$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 'a';

					case 2:
						_context.next = 4;
						return 'b';

					case 4:
						_context.next = 6;
						return 'c';

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, say, this);
	});
	var fn = say(); //生成一个Generator实例
	// Generator实例返回一个迭代器
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}
{
	var obj = {
		a: 1,
		b: 2,
		c: 3
	};
	obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

		return regeneratorRuntime.wrap(function _callee$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context2.prev = 3;
						_iterator = Object.keys(obj)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context2.next = 12;
							break;
						}

						key = _step.value;
						_context2.next = 9;
						return obj[key];

					case 9:
						_iteratorNormalCompletion = true;
						_context2.next = 5;
						break;

					case 12:
						_context2.next = 18;
						break;

					case 14:
						_context2.prev = 14;
						_context2.t0 = _context2['catch'](3);
						_didIteratorError = true;
						_iteratorError = _context2.t0;

					case 18:
						_context2.prev = 18;
						_context2.prev = 19;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 21:
						_context2.prev = 21;

						if (!_didIteratorError) {
							_context2.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return _context2.finish(21);

					case 25:
						return _context2.finish(18);

					case 26:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});
	var _fn = obj[Symbol.iterator]();
	console.log(_fn.next());
	/* for (let va of obj) {
 	console.log(va)
 } */
}
{
	var state = /*#__PURE__*/regeneratorRuntime.mark(function state() {
		return regeneratorRuntime.wrap(function state$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						if (!1) {
							_context3.next = 9;
							break;
						}

						_context3.next = 3;
						return 'success';

					case 3:
						_context3.next = 5;
						return 'fail';

					case 5:
						_context3.next = 7;
						return 'pending';

					case 7:
						_context3.next = 0;
						break;

					case 9:
					case 'end':
						return _context3.stop();
				}
			}
		}, state, this);
	});
	var stateData = state();
	console.log(stateData.next());
	console.log(stateData.next());
}
{
	// { code:0 }
	var fn1 = function fn1() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				console.log("查询中...");
				resolve({ code: 0 });
			}, 1000);
		});
	};

	var autoGetState = function autoGetState() {
		var gen = getState(); //得到一个迭代器
		var status = gen.next();
		status.value.then(function (res) {
			console.log(res); //{code:0}
			if (res.code === 0) {
				console.log("用户付款成功~");
			} else {
				console.log("暂未付款~");
				setTimeout(function () {
					return autoGetState();
				}, 1000);
			}
		});
	};

	var getState = /*#__PURE__*/regeneratorRuntime.mark(function getState() {
		return regeneratorRuntime.wrap(function getState$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return fn1();

					case 2:
					case 'end':
						return _context4.stop();
				}
			}
		}, getState, this);
	});

	autoGetState();
}