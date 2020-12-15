{
	let set = new Set();
	set.add(1);
	console.log(set);
	// Object.is()去重
	let setOne = new Set([1,1,2,3,4,2,3,4,5]);
	console.log(setOne)
	console.log(setOne.length);//undefined
	console.log(setOne.size)
}
{
	let set = new Set();
	// set.add([1,2,3,4]);
	let item = {"name":"apple"}
	set.add(item);
	console.log(set);
	console.log(set.has(item))
	let setOne = new Set([1,1,2,3,4,2,3,4,5]);
	setOne.delete(1);
	console.log(setOne)
}
{
	// keys和values
	let set = new Set([1,2,3,4,5]);
	for (let key of set.entries()) {
		console.log(key)
	}
}
{
	const arr = [1,2,3,4,2,3,5,1,6,7,5];
	console.log(arr);
	let set = new Set(arr);
	console.log(set)
	const changeArr = Array.from(set);
	console.log(changeArr)
}
{
	let obj = { name:'zhangsan' };
	let wset = new WeakSet();
	wset.add(obj);
	console.log(wset);
}