// 数据的解构赋值
{
	let a, b;
	[a,b] = [11,22];
	console.log(a,b);
}
{
	let a,b,c;
	[a,b,c]=[1,2];
	console.log(a,b,c);
}
{
	let a,b,c;
	[a,b,c=3]=[1,2,33];
	console.log(a,b,c);
}
{
	// ...拓展运算符(spread),返回的是一个数组
	let a,other;
	[a,...other]=[1,2,3,4,45,6,7,8];
	console.log(a,other)
}
{
	let a,b;
	[a,,b]=[1,2,3];
	console.log(a,b);
}
// 对象解构赋值
{
	let a,b;
	({a,b}={a:"hello",b:"world"});
	console.log(a,b);
}
{
	let num,total;
	( {a:num,b:total} = { a:10,b:20});
	console.log(num,total);
}
{
	function fn(){
		return {
			name:"jiangjie",
			age:18,
			nameList:[{
				name:"fanfu"
			}]
		}
	}
	let b = fn();
	let { name:person,age:age,nameList:[{name:otherperson}] }=b;
	console.log(person,age,otherperson)
}