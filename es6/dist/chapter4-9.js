"use strict";

{
	var InputObj = document.getElementById("oInput");
	var txtObj = document.getElementById("txt");
	var obj = {};
	var handler = {
		get: function get(target, key) {
			return Reflect.get(target, key);
		},
		set: function set(target, key, value) {
			if (key === 'text') {
				InputObj.value = InputObj.value === value ? InputObj.value : value;
				txtObj.innerHTML = value;
			}
			return Reflect.set(target, key, value);
		}
	};
	var objProxy = new Proxy(obj, handler);
	InputObj.addEventListener("keyup", function (e) {
		// console.log(e);
		objProxy.text = e.target.value;
	});
	objProxy.text = "123";
}