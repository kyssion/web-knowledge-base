function PersonFactory(name,age){
	var o = new Object();//创建一个产品类
	o.name=name;//是用o作用域下的name属性 ， 当其不存在的时候自动创建
	o.age=age;
	o.sayname=function(){
		alert(this.name+"  "+this.age+"this is"+this.toString());//this为调用这个方法的object实例
	}
	return o;//返回工厂实例
}
var a = PersonFactory("123","122");
a.sayname();
//问题作用域都是object instanceof 无法区分

//注意 !!   作用域问题和this  只用创建对象的时候才能扩展作用域-否怎无论怎么引用都不会扩展作用域
//1.例子1
var  wocao = "123";
var s= new Hehe();    //!!!!注意new 运算符会扩展作用域 也就说此时s能访问的是s自身对象作用域(之一比较特殊)函数作用域,全局作用域!!注意后两个作用域是嵌套的
						//对象当使用.运算符或者this.的时候走得就不是作用域链了而是原型链!!!!!--解释了下面的问题
s.say=function(){
	console.log(wocao);
}
function Hehe(){
	//wocao="223";
}
s.say();
//例子2
function createaobject(name, age) {
	var hehe = new Object();
	hehe.name = name;
	hehe.age = age;
	hehe.say = function() {
			console.log(name);//输出的createobject中的name
			console.log(this.name);//输出原型链中的name
	}
	var name = "jkl";
	return hehe;
}
var name ="dsf";
var myhehe = createaobject("sdf", 123);
myhehe.say();
//例子3
function jkl() {
	console.log("作用域链"+name);//输出全局变量中的name---
	console.log("原型链"+this.name);//输出原型链中的name
}
function createaobject(name, age) {
	var hehe = new Object();
	hehe.name = name;
	hehe.age = age;
	hehe.say =jkl;//---js中无论怎么引用,作用域都是执行自己的作用域
//	hehe.say = function() {
//			console.log(name);
//			console.log(this.name);
//	}
	var name = "jkl";
	return hehe;
}
var name = "dsf";
var myhehe = createaobject("sdf", 123);
myhehe.say();
//例子4.
function one() {
	return function(){
		console.log(name);
	}
}
var name = "123";

function jk() {
	var name = "333";
	var bb = new one();
	var h= one();
	h();//输出123----结论引用作用域是啥就是啥不会扩展
}
jk();