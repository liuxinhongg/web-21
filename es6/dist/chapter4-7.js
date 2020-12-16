"use strict";

{
	// Map、Set与Array及Object增删改查
	var arrary = [];
	var obj = {};
	var map = new Map();
	var set = new Set();
	var goodsitem = { "fruit": "apple" };
	// 新增
	arrary.push(goodsitem);
	obj['fruit'] = "apple";
	map.set("fruit", "apple");
	set.add(goodsitem);
	console.log(arrary, obj, map, set);
	// 查询
	var arrresult = arrary.includes(goodsitem);
	var objresult = 'fruit' in obj;
	var mapresult = map.has("fruit");
	var setresult = set.has(goodsitem);
	console.log(arrresult, objresult, mapresult, setresult);
	// 修改
	arrary.forEach(function (item) {
		item.fruit = item.fruit ? "orange" : "";
	});
	obj["fruit"] = "orange";
	map.set("fruit", "orange");
	set.forEach(function (item) {
		item.fruit = item.fruit ? "orange" : "";
	});
	console.log(arrary, obj, map, set);
	// 删除
	var index = arrary.findIndex(function (item) {
		return item.fruit;
	});
	arrary.splice(index, 1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(goodsitem);
	console.log(arrary, obj, map, set);
}
// 类型转换  对象<=>map 数组<=>set
{
	// 对象<=>map
	// 对象=>map
	var _obj = {
		name: "zhouyuzhe",
		age: 19
		/* [name,"zhouyuzhe"]
  [age,19] */
		// console.log(Object.entries(obj))
	};var _map = new Map(Object.entries(_obj));
	console.log(_map);
	// 对象<=map
	// Object.fromEntries(map)
	var obj1 = Object.fromEntries(_map);
	console.log(obj1);
}
{
	// 数组<=>set
	// 数组=>Set
	var arr = [1, 2, 3, 4, 5, 6];
	var _set = new Set(arr);
	console.log(_set);
	// 数组<=Set
	var arr2 = Array.from(_set);
	console.log(arr2);
}