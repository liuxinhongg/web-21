// es6和es7数组的拓展方法和扩展运算符【...(spread)】
{
	// 复制数组
	const list = [1,2,3,4,5];
	const list1 = [...list];
	console.log(list1);
	list.push(6);
	console.log(list);
}
{
	// 分割数组
	const totalList = [1,"a","b","c"];
	const [,...list] = totalList
	console.log(list);
}
{
	// 将数组转化成参数传递给函数
	function fun(x,y){
		return x+y;
	}
	let addList = [2,3];
	console.log(fun(...addList));
}
{
	// ﬁll 替换数组（全部替换）ﬁll(替换的内容，起始下标，替换到那块的长度)
	const list = [1,2,3,4,5];
	const list2 = [...list].fill(3);
	console.log(list2)
	const list3 = [...list].fill(3,1,4);
	console.log(list3);//[1, 3, 3, 3, 5]
}
{
	// ﬁnd()返回的数组中第一个找到的值,ﬁndIndex()返回值的下标
	let listf = [{"title":"es6","id":1},{"title":"nodejs","id":2},{"title":"wechat","id":3},{"title":"es6","id":4}];
	let result = listf.find(function(item){
		return item.title ==="es6";
	})
	let resultIndex = listf.findIndex(function(item){
		return item.title ==="es6";
	})
	console.log(result);
	console.log(resultIndex);
	
}
{
	// includes
	const list = [1,2,3,4,5];
	console.log(list.includes(9));
}
{
	// ﬂat 展开数组
	const list = [1,2,3,["2nd",4,5]];
	// es5展开数组
	let result = [].concat(...list);
	console.log(result);
	let resultf=list.flat();
	console.log(resultf)
	const listf = [1,2,3,["2nd",4,5,["3th",6,7]]];
	const resultmore = listf.flat(2);
	console.log(resultmore)
}
{
	// ﬁlter 
	// 数组去重
	let arr = [1,2,3,4,2,3,5,4,2,5,6,9,2];
	let result = arr.filter(function(i,index,item){
		/* i数组的每一项的值
		index每一项的下标
		item当前的数组 */
		return item.indexOf(i) === index;
	})
	console.log(result);
}
{
	let arr = [1,2,3,4,5,6,7];
	let result = arr.filter(function(item){
		return item = item > 4;
	})
	console.log(result);
}
{
	let arr = [
		{name:"wanggang",age:19},
		{name:"jiangjie",age:18},
		{name:"fanfu",age:18},
	]
	const result = arr.filter(function(item){
		return item = item.name === "jiangjie"
	})
	console.log(result);
}