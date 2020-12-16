{
	// Map、Set与Array及Object增删改查
	let arrary = [];
	let obj = {};
	let map = new Map();
	let set = new Set();
	let goodsitem = { "fruit":"apple" };
	// 新增
	arrary.push(goodsitem);
	obj['fruit'] = "apple";
	map.set("fruit","apple");
	set.add(goodsitem);
	console.log(arrary,obj,map,set);
	// 查询
	const arrresult = arrary.includes(goodsitem);
	const objresult = 'fruit' in obj;
	const mapresult = map.has("fruit");
	const setresult = set.has(goodsitem);
	console.log(arrresult,objresult,mapresult,setresult);
	// 修改
	arrary.forEach(function(item){
		item.fruit = item.fruit ? "orange" : "";
	})
	obj["fruit"] = "orange";
	map.set("fruit","orange");
	set.forEach(function(item){
		item.fruit = item.fruit ? "orange" : "";
	})
	console.log(arrary,obj,map,set);
	// 删除
	const index = arrary.findIndex(function(item){
		return item.fruit;
	})
	arrary.splice(index,1);
	delete obj.fruit;
	map.delete("fruit");
	set.delete(goodsitem);
	console.log(arrary,obj,map,set);
}
// 类型转换  对象<=>map 数组<=>set
{
	// 对象<=>map
	// 对象=>map
	let obj = {
		name:"zhouyuzhe",
		age:19
	}
	/* [name,"zhouyuzhe"]
	[age,19] */
	// console.log(Object.entries(obj))
	let map = new Map(Object.entries(obj));
	console.log(map)
	// 对象<=map
	// Object.fromEntries(map)
	let obj1 = Object.fromEntries(map);
	console.log(obj1);
}
{
	// 数组<=>set
	// 数组=>Set
	let arr = [1,2,3,4,5,6];
	let set = new Set(arr);
	console.log(set)
	// 数组<=Set
	let arr2 = Array.from(set);
	console.log(arr2);
}