'use strict';

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
	var arr = function arr(x) {
		return x + 2;
	};
	console.log(arr(2));
}
{
	// 箭头函数不绑定this
	var fruit = {
		name: 'apple',
		price: 18,
		num: 10,
		sum: function sum() {
			var _this = this;

			// console.log(this.price)
			/* setTimeout(function(){
   	console.log(this.price);
   },1000) */
			setTimeout(function () {
				console.log(_this.price * _this.num);
			}, 1000);
		}
	};
	fruit.sum();
}