{
	function fn(){
		// console.log(arguments[0])
		let sum = 0;
		for(var i = 0;i<arguments.length;i++){
			sum+=arguments[i]
		}
		console.log(sum)
	}
	fn(11,22);
	fn(11,22,33,44);
}
{
	// instanceof
	let arr = [1,2,3,4,5];
	console.log(typeof arr);//object 
	console.log(arr instanceof Array);//true
	console.log(Array.isArray(arr))//true
} 