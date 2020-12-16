{
	let InputObj = document.getElementById("oInput");
	let txtObj = document.getElementById("txt");
	let obj = {};
	let handler = {
		get(target,key){
			return Reflect.get(target,key);
		},
		set(target,key,value){
			if(key === 'text'){
				InputObj.value = InputObj.value === value ? InputObj.value : value;
				txtObj.innerHTML = value
			}
			return Reflect.set(target,key,value);
		}
	}
	let objProxy = new Proxy(obj,handler);
	InputObj.addEventListener("keyup",function(e){
		// console.log(e);
		objProxy.text = e.target.value;
	})
	objProxy.text = "123"
}