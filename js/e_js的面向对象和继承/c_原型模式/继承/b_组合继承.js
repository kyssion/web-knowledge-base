//将原型模式添加进借用构造模式
function Person(name,age){
	this.name=name;
	this.age=age;
	this.say=function(){
		alert(this.name+"   "+this.age);
	}
}
Person.prototype.sayname=function(){
	alert(this.name);
}
function getPerson(){
	//相当于简单工厂文件中的是用windwons对象进行创建   将属性加入到自己本身的作用域中了
	Person.apply(this,arguments);
	this.name="sdf";//组合继承
}
//原型继承法
getPerson.prototype= new Person("hahah","2222");
getPerson.prototype.constructor=getPerson;
getPerson.prototype.sayage=function(){
	alert(this.age);
}
//虽然原型中和实例中都有那么属性但是实例中的属性会覆盖原型中的属性   
var p= new getPerson("123","456");
p.say();
p.sayage();
p.sayname();
delete p.name;
delete p.age;
alert("------");
p.say();
p.sayage();
p.sayname();




