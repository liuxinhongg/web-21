{
	console.log('\u{20CB4}');
	console.log('\u{20CA6}')
}
{
	const str='\u20CA6';
	const str1= '\u{20CA6}'
	console.log(str);
	// for...of
	/* for(var i=0;i<str.length;i++){
		console.log(i);
	} */
	for (let s of str) {
		console.log(s);
	}
	for (let a of str1) {
		console.log(a);
	}
}
{
	let name= "zhangsan";
	let age = 19;
	console.log("我叫"+name+",我今年"+age+"岁了");
	console.log(`我叫${name},我今年${age}岁了`);
}
{
	let str = "yukuanyukuanyukuan";
	// includes(string, position) 判断字符串中是否包含指定字符串，返回值是布尔值
	console.log("includes",str.includes("yu"));
	// startsWith(string, position) 判断字符串的开头是否包含指定字符串，返回值是布尔值
	console.log("startsWith",str.startsWith("yu"));
	// endsWith(string, position) 判断字符串的尾部是否包含指定字符串，返回值是布尔值
	console.log("endsWith",str.endsWith("yu"));
}
{
	let str = "zhouyuzhe";
	console.log(str.repeat(3));
}
{
	// padStart(length, str)头部补全
	let str = "fangshengzhi";
	str = str.padStart(29,"zhouyuzhe");
	console.log(str);
}
{
	// padEnd(length, str)尾部补全
	let str = "yangli";
	str = str.padEnd(10,"goujinhang");
	console.log(str)
}