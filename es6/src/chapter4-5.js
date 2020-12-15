{
	// Map()构造函数,数组作为参数,参数还要是一个个数组
	let map = new Map();
	// 添加元素 set（k,v)
	map.set([1,2,3],"number");
	console.log(map);
	let map2 = new Map([
		["name","zhangsan"],
		["age",18]
	])
	console.log(map2.length);
	console.log(map2.size);
	map2.set("name","lisi")
	console.log(map2);
	// 链式回调  回调地狱 event...loop
	map2.set("name","xiaoming").set("hobby",["eating","playing"]).set("height","180")
	console.log(map2)
	const getmap = map2.get("hobby");
	console.log(getmap)
	console.log(map2.has("name"));
	map2.delete("height");
	console.log(map2);
	
}
{
	// 遍历器生成函数 keys values entries
	let map = new Map([
		["name","zhangsan"],
		["age",18],
		["hobby","playing"]
	])
	for (let key of map.keys()) {
		console.log(key)
	}
	for (let val of map.values()) {
		console.log(val)
	}
	for (let en of map.entries()) {
		console.log(en)
	}
}
// WeakMap()接受一个对象作为键名,不接受其他类型,
{
	let wmap = new WeakMap([
		[ {"name":"kiki"},"jack" ]
	])
	console.log(wmap);
}