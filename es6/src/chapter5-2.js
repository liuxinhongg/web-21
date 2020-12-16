{
	/* function fn(x){
		let x;
		console.log(x);
	} */
	// fn(11);
}
{
	// 箭头函数只能是匿名函数
	/* const arrow = function(x){
		console.log("箭头函数")
	} 
	const arrow = (x)=>{
		console.log("箭头函数")
	}*/
	// const arrow = x => console.log("箭头函数")
	// arrow()
	/* const arr = function(x){
		return x+2
	} */
	const arr = x => x+2
	console.log(arr(2)) 
}
{
	// 箭头函数不绑定this
	const fruit = {
		name:'apple',
		price:18,
		num:10,
		sum(){
			// console.log(this.price)
			/* setTimeout(function(){
				console.log(this.price);
			},1000) */
			setTimeout(()=>{
				console.log(this.price*this.num);
			},1000)
		}
	}
	fruit.sum()
}