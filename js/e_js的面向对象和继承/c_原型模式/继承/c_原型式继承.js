//使用函数传入一个共有要继承的父类然后生成一个以传入参数为原型的实例

var per={
	name:"haha",
	say:function(){
		alert(this.name);
	}
}
function person(name,age){
	this.name=name;
	this.age=age;
	this.say=function(){
		alert(this.name);
	}
}
var pp= new person("hhh","rrr");

//使用原型式继承方法
function Fafther(){}
var o = new Fafther();
function get(o){//传入原型---实现原型继承
	function F(){
		
	}
	F.prototype=o;
	return new F();
}
var a= get(pp);
a.say();
//js存在简单的方法进行---
var a= Object.create(o,{
	name:123,
	age:"ddd"
});