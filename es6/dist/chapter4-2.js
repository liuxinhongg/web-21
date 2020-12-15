"use strict";

// es6和es7数组的拓展方法和扩展运算符【...(spread)】
{
	// 复制数组
	var list = [1, 2, 3, 4, 5];
	var list1 = [].concat(list);
	console.log(list1);
	list.push(6);
	console.log(list);
}
{
	// 分割数组
	var totalList = [1, "a", "b", "c"];

	var _list = totalList.slice(1);

	console.log(_list);
}
{
	// 将数组转化成参数传递给函数
	var fun = function fun(x, y) {
		return x + y;
	};

	var addList = [2, 3];
	console.log(fun.apply(undefined, addList));
}
{
	// ﬁll 替换数组（全部替换）ﬁll(替换的内容，起始下标，替换到那块的长度)
	var _list2 = [1, 2, 3, 4, 5];
	var list2 = [].concat(_list2).fill(3);
	console.log(list2);
	var list3 = [].concat(_list2).fill(3, 1, 4);
	console.log(list3); //[1, 3, 3, 3, 5]
}
{
	// ﬁnd()返回的数组中第一个找到的值,ﬁndIndex()返回值的下标
	var listf = [{ "title": "es6", "id": 1 }, { "title": "nodejs", "id": 2 }, { "title": "wechat", "id": 3 }, { "title": "es6", "id": 4 }];
	var result = listf.find(function (item) {
		return item.title === "es6";
	});
	var resultIndex = listf.findIndex(function (item) {
		return item.title === "es6";
	});
	console.log(result);
	console.log(resultIndex);
}
{
	// includes
	var _list3 = [1, 2, 3, 4, 5];
	console.log(_list3.includes(9));
}
{
	var _ref;

	// ﬂat 展开数组
	var _list4 = [1, 2, 3, ["2nd", 4, 5]];
	// es5展开数组
	var _result = (_ref = []).concat.apply(_ref, _list4);
	console.log(_result);
	var resultf = _list4.flat();
	console.log(resultf);
	var _listf = [1, 2, 3, ["2nd", 4, 5, ["3th", 6, 7]]];
	var resultmore = _listf.flat(2);
	console.log(resultmore);
}
{
	// ﬁlter 
	// 数组去重
	var arr = [1, 2, 3, 4, 2, 3, 5, 4, 2, 5, 6, 9, 2];
	var _result2 = arr.filter(function (i, index, item) {
		/* i数组的每一项的值
  index每一项的下标
  item当前的数组 */
		return item.indexOf(i) === index;
	});
	console.log(_result2);
}
{
	var _arr = [1, 2, 3, 4, 5, 6, 7];
	var _result3 = _arr.filter(function (item) {
		return item = item > 4;
	});
	console.log(_result3);
}
{
	var _arr2 = [{ name: "wanggang", age: 19 }, { name: "jiangjie", age: 18 }, { name: "fanfu", age: 18 }];
	var _result4 = _arr2.filter(function (item) {
		return item = item.name === "jiangjie";
	});
	console.log(_result4);
}