{
	function Person(name,age){
		this.name = name;
		this.age = age
	}
	Person.prototype.sayHello= function(){
		console.log(`大家好！我是${this.name},我今年${this.age}岁了`);
	}
	const pe = new Person("wanggang",20);
	pe.sayHello();
}
{
	class Person {
		constructor(name,age) {
		    this.name = name;
			this.age = age;
		}
		sayHello(){
			console.log(`大家好！我是${this.name},我今年${this.age}岁了`);
		}
	}
	const pe = new Person("jiangjie",18);
	console.log(pe);
	pe.sayHello()
}
{
	class Parent {
		constructor(name = "zhangsan") {
		    this.name = name
		}
	}
	/* class Son extends Parent {}
	console.log("继承",new Son()) */
	class Child extends Parent {
		constructor(name = "jack") {
			super(name)
		    this.name = name
		}
	}
	console.log("继承",new Child())
}
{
	class Person {
		constructor(name = "kangkang") {
		    this.name = name
		}
		get fullName(){
			return this.name + " " +"fang";
		}
		set fullName(value){
			this.name = value;
		}
	}
	let pe = new Person();
	console.log("get",pe.fullName)
	pe.fullName = "shengzhi";
	console.log(pe.name)
	
}
{
	class Person {
		// static prop = 20;//es7
		constructor(name = "yukuan") {
		    this.name = name;
		}
		static sayHello(obj){
			console.log("my name is" + " " +obj.name);
		}
	}
	Person.prop = 18;
	console.log(Person.prop)
	let pe = new Person();
	console.log(pe);//{name: "yukuan"}
	Person.sayHello(pe);
}