{
	const say = function*(){
		yield  'a';
		yield  'b';
		yield  'c';
	}
	const fn= say();//生成一个Generator实例
	// Generator实例返回一个迭代器
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
}
{
	let obj = {
		a:1,
		b:2,
		c:3
	}
	obj[Symbol.iterator] = function*(){
		for(const key of Object.keys(obj)){
			yield obj[key]
		}
	}
	let fn = obj[Symbol.iterator]();
	console.log(fn.next())
	/* for (let va of obj) {
		console.log(va)
	} */
}
{
	const state = function*(){
		while(1){
			yield 'success';
			yield 'fail';
			yield 'pending';
		}
	}
	const stateData = state();
	console.log(stateData.next())
	console.log(stateData.next())
}
{
	// { code:0 }
	function fn1(){
		return new Promise(resolve=>{
			setTimeout(()=>{
				console.log("查询中...");
				resolve({code:0})
			},1000)
		})
	}
	const getState = function*(){
		yield fn1()
	}
	function autoGetState(){
		const gen = getState();//得到一个迭代器
		const status = gen.next()
		status.value.then(res=>{
			console.log(res);//{code:0}
			if(res.code === 0){
				console.log("用户付款成功~");
			}else{
				console.log("暂未付款~");
				setTimeout(()=>autoGetState(),1000);
			}
		})
	}
	autoGetState()
}