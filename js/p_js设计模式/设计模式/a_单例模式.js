function MySingleton(name, age) {
	this.name = name;
	this.age = age;
}
//1.缺点只能生成唯一的单例方法-不能通过方法传入
MySingleton.getInstance = (function() {
	var instance = {};
	return function(name, age) {//通过属性设置动态加载上相关的属性
		if (instance[name]==undefined||instance[name].age!=age){
			console.log("1");
			instance[name]=new MySingleton(name,age);
			return instance[name];
		}else{
			return instance[name];
		}
	}
})();
var one = MySingleton.getInstance('123','223');
var two = MySingleton.getInstance('123','222');
var three = MySingleton.getInstance('1223','222');
//第二种方法实现相关的属性可以自添加
function MySingleton(name, age) {
	this.name = name;
	this.age = age;
}
MySingleton.getInstance = (function() {
	var instance = {};
	return function(name, fn, args) {
		if(instance[name] == undefined || (instance[name] instanceof fn) != true) {
			instance[name] = new fn(args);
			return instance[name];
		} else {
			for(var he in instance[name]) {
				for(var i = 0; i < args.length; i++) {
					if(args[i] == instance[name][he]) {
						break;
					}
				}
				if(i == args.length) {
					instance[name] = new fn(args);
					return instance[name];
				}
			}
			return instance[name];
		}
	}
})();

function hehe(args) {
	this.name = args[0];
	this.age = args[1];
}

function papa(args) {
	this.name = args[0];
	this.age = args[1];
}
var one = MySingleton.getInstance("one", hehe, ['123', '223']);
var two = MySingleton.getInstance("one", hehe, ['123', '233']);
var three = MySingleton.getInstance("two", hehe, ['123', '233']);
console.log(one.name+" "+one.age);
console.log(two.name+" "+two.age);
console.log(three.name+" "+three.age);
console.log(two==three);