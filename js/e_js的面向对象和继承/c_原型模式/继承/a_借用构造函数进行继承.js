//运用js执行环境的特性动态的将要继承的属性加入到执行环境中


//是用函数中存在this运算符的时候就是为本身的作用域添加属性
function Person(name,age){
	this.name=name;
	this.age=age;
	this.say=function(){
		alert(this.name+"   "+this.age);
	}
}

function getPerson(){
	//相当于简单工厂文件中的是用windwons对象进行创建   将属性加入到自己本身的作用域中了
	Person.apply(this,arguments);
}
//缺点不能进行重构-原型链中的属性不能使用这次我们使用
var p2=new  getPerson("222","333");
var p1= new getPerson("123","223");
p1.say();
p2.say();
//生成不同参数的父类    但是存在不能进行重用的缺点