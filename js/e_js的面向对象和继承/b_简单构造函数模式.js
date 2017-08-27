function Person(name,age){
	this.name=name;
	this.age=age;
	this.say=function(){
		alert(this.name+"   "+this.age);
	}
}
function L(){}
Person("666","777");
var p=new Person("hah","66");//作为构造函数进行调用
p.say();
window.say();//是用windwons对象进行调用--输出666 777
//--------为o添加作用域内属性
var o= new Object();
Person.apply(o,["123","456"]);
o.say();//是用在另一个对象中进行调用
alert(p instanceof L);
//可以让instanceof进行区分
//但是不能进行公有化  相同的实例访问相同的东西

