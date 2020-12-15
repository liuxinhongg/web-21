'use strict';

{
	console.log('\uD843\uDCB4');
	console.log('\uD843\uDCA6');
}
{
	var str = '\u20CA6';
	var str1 = '\uD843\uDCA6';
	console.log(str);
	// for...of
	/* for(var i=0;i<str.length;i++){
 	console.log(i);
 } */
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = str1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var a = _step2.value;

			console.log(a);
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
}
{
	var name = "zhangsan";
	var age = 19;
	console.log("我叫" + name + ",我今年" + age + "岁了");
	console.log('\u6211\u53EB' + name + ',\u6211\u4ECA\u5E74' + age + '\u5C81\u4E86');
}
{
	var _str = "yukuanyukuanyukuan";
	// includes(string, position) 判断字符串中是否包含指定字符串，返回值是布尔值
	console.log("includes", _str.includes("yu"));
	// startsWith(string, position) 判断字符串的开头是否包含指定字符串，返回值是布尔值
	console.log("startsWith", _str.startsWith("yu"));
	// endsWith(string, position) 判断字符串的尾部是否包含指定字符串，返回值是布尔值
	console.log("endsWith", _str.endsWith("yu"));
}
{
	var _str2 = "zhouyuzhe";
	console.log(_str2.repeat(3));
}
{
	// padStart(length, str)头部补全
	var _str3 = "fangshengzhi";
	_str3 = _str3.padStart(29, "zhouyuzhe");
	console.log(_str3);
}
{
	// padEnd(length, str)尾部补全
	var _str4 = "yangli";
	_str4 = _str4.padEnd(10, "goujinhang");
	console.log(_str4);
}