"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
	var Person = function Person(name, age) {
		this.name = name;
		this.age = age;
	};

	Person.prototype.sayHello = function () {
		console.log("\u5927\u5BB6\u597D\uFF01\u6211\u662F" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
	};
	var pe = new Person("wanggang", 20);
	pe.sayHello();
}
{
	var _Person = function () {
		function _Person(name, age) {
			_classCallCheck(this, _Person);

			this.name = name;
			this.age = age;
		}

		_createClass(_Person, [{
			key: "sayHello",
			value: function sayHello() {
				console.log("\u5927\u5BB6\u597D\uFF01\u6211\u662F" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
			}
		}]);

		return _Person;
	}();

	var _pe = new _Person("jiangjie", 18);
	console.log(_pe);
	_pe.sayHello();
}
{
	var Parent = function Parent() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zhangsan";

		_classCallCheck(this, Parent);

		this.name = name;
	};
	/* class Son extends Parent {}
 console.log("继承",new Son()) */


	var Child = function (_Parent) {
		_inherits(Child, _Parent);

		function Child() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "jack";

			_classCallCheck(this, Child);

			var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

			_this.name = name;
			return _this;
		}

		return Child;
	}(Parent);

	console.log("继承", new Child());
}
{
	var _Person2 = function () {
		function _Person2() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kangkang";

			_classCallCheck(this, _Person2);

			this.name = name;
		}

		_createClass(_Person2, [{
			key: "fullName",
			get: function get() {
				return this.name + " " + "fang";
			},
			set: function set(value) {
				this.name = value;
			}
		}]);

		return _Person2;
	}();

	var _pe2 = new _Person2();
	console.log("get", _pe2.fullName);
	_pe2.fullName = "shengzhi";
	console.log(_pe2.name);
}
{
	var _Person3 = function () {
		// static prop = 20;//es7
		function _Person3() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yukuan";

			_classCallCheck(this, _Person3);

			this.name = name;
		}

		_createClass(_Person3, null, [{
			key: "sayHello",
			value: function sayHello(obj) {
				console.log("my name is" + " " + obj.name);
			}
		}]);

		return _Person3;
	}();

	_Person3.prop = 18;
	console.log(_Person3.prop);
	var _pe3 = new _Person3();
	console.log(_pe3); //{name: "yukuan"}
	_Person3.sayHello(_pe3);
}