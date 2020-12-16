{
	// 函数的扩展
	function fn(x,y){
		y = y || "world"
		return x + y;
	}
	console.log(fn("hello",""));
	console.log(12||NaN);//NaN  12
	// 负性:0 false,NaN,undefined,null ' '  
	function fun(x,y="world"){
		console.log("es6",x+y);
	}
	fun("hello","china");
}
{
	// instanceof
	// Array.defineProperty.method.call()
	/* Array.defineProperty.method.apply(arguments)
	Array.defineProperty.method.bind() */
	function add(...rest){
		let sum = 0;
		for (let value of rest) {
			sum+=value;
		}
		console.log(sum);
		// Array.defineProperty.method.apply(arguments)
	}
	add(1,2,3);
	add(1,2,3,4,5,6,7,8,9,10);
}
{
	console.log(...[1,2,3,4])
}
{
	function step2(x){
		console.log("尾调用",x);
	}
	function step1(x){
		return step2(x)
	}
	step1(11);
}