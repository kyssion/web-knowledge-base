//1.js一切皆为对象包括function 也是对象
//对象有一个prototype属性 这个属性 指向对象的原型  -一个属性construct 指向对象的构造函数-默认是object
//默认情况下 object 指向的是object  构造函数指向的是构造函数 function指向的是 function
//!!!!!注意在原型链中实现继承的时候无论是不是让子孩子的prototype继承父类还是父类的prototype都会
//!!!!!维护成继承状态--也就是说继承只是关心是否使用了原型链
function One(){
	this.one=true;
	this.two="one";
	this.say=function(){
		console.log(this.one);
	}
}
One.prototype.hehe=function(){
	console.log(this.two);
}

function Two(){
	this.one="twotrue";
	this.two="two";
}
Two.prototype=One.prototype;
Two.prototype=new One();
//上面无论使用什么方法下面的console.log()都会输出true
var myobject = new Two();
myobject.hehe();
//!!!判断继承的方法还能使用prototype中的isPrototype()方法进行相关的判断
console.log(myobject instanceof One);
console.log(myobject instanceof Two);
console.log(Two.prototype.isPrototypeOf(myobject));

//2. 注意继承的时候prototype 内存中一个对象只用唯一一个 使用的时候是使用引用传值的例子如下
function ObjectOne(){
	
}
Object.prototype.say=function(){
	console.log("this is one prototype");
}

function Objecttwo(){
	
}
Objecttwo.prototype=ObjectOne.prototype;
//Objecttwo.prototype=new ObjectOne();//使用这种方法不要使用上面的方法
Objecttwo.prototype.say=function(){
	console.log("this is two prototype");
}
var my= new Objecttwo();
my.say();
ObjectOne.prototype.say();//原型已经被修改
//3.使用字面量添加原型
function Objecttwo(){
	
}
Objecttwo.prototype={
	say:function(){
		console.log("123123123");
	}
	
}
Objecttwo.prototype.constructor=Objecttwo;//手动指定构造函数
//Objecttwo.prototype=new ObjectOne();
var my= new Objecttwo();
my.say();


