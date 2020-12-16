'use strict';

{
	// Proxy代理,构造函数 操作对象 两个参数都是对象

	var accout = {
		id: 123,
		name: 'admin',
		phone: '12346578912',
		creat_time: '2020',
		_private: 'test'
	};
	var accoutProxy = new Proxy(accout, {
		// 拦截读取和设置的操作
		// get:读取操作
		get: function get(target, key) {
			switch (key) {
				case 'phone':
					return target[key].substring(0, 3) + "****" + target[key].substring(7);
				case 'creat_time':
					return target[key].replace("2020", "2021");
				default:
					return target[key];
			}
		},

		// set:设置操作
		set: function set(target, key, val) {
			if (key === "id") {
				return target[key];
			} else {
				return target[key] = val;
			}
		},
		has: function has(target, key) {
			if (key in target) {
				console.log('\u5C5E\u6027' + key, target[key]);
				return true;
			} else {
				console.log("属性不存在");
				return false;
			}
		},
		deleteProperty: function deleteProperty(target, key) {
			if (key.indexOf("_") === 0) {
				console.log("私有属性不能删除");
				return true;
			} else {
				delete target[key];
				return false;
			}
		},

		// ownKeys()方法用来拦截对象自身属性的读取操作
		// 过滤 id和_开头
		ownKeys: function ownKeys(target) {
			return Object.keys(target).filter(function (item) {
				return item !== "id" && item.indexOf('_') !== 0;
			});
		}
	});
	console.log("拦截读取", accoutProxy.phone, accoutProxy.creat_time);
	accoutProxy.id = 222;
	accoutProxy.name = "users";
	console.log("设置操作", accoutProxy.id, accoutProxy.name);
	console.log("拦截对象 in", 'name' in accoutProxy);
	console.log("拦截对象 in", 'age' in accoutProxy);
	console.log("拦截删除", delete accoutProxy['_private']);
	console.log("拦截删除", delete accoutProxy['name']);
	console.log("ownKeys", Object.keys(accoutProxy));
}
// Reflect
{
	var obj = {
		name: 'fangshengzhi',
		age: 20,
		sex: 'nan',
		hobby: 'music'
	};

	console.log(Reflect.get(obj, 'name'));
	Reflect.set(obj, 'name', 'yangli');
	console.log(obj.name);
	'name' in obj;
	console.log(Reflect.has(obj, 'name'));
}