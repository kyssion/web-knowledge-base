Object类型-------------表示一组数据和功能的集合(list 或者 array)
所有的js对象都属于 object类型
用于自定义属性的集合
------创建---------------------------
	var a = new Object;----没有参数的时候可以这样写
	var a= new Object();
------所有object 对象都具有的属性和方法--------------------------
	a.constructor; 						//保留着创建当前对象的函数 ----面向对象变成中有说
	a.hasOwnProperty(propname_string);	//检查当前的属性名称在对象中是否存在
	a.isPrototypeOf(object);            //检查传入的对象是不是当前对象的原型
	a.propertyIsEnumerable(property_stirng);//检查当前对象是否可以使用for_in方法进行枚举
	a.toString(); a.valueOf();返回对象的字符数值表示
	in 操作符- 表明相关的属性是否存在不管是不是
-----fon_in--枚举对象的属性-----
-----动态属性 --动态添加属性----只能改引用类型 就是new出来的使用
var a= new Object();
a.haha="ddd";---在object函数中没有进行声明haha将动态的进行创建
-----object 类型检测
typeof --输出属于什么基本类型
instanceof -- 检测具体引用类型是否相等 - 沿着原型链检查 constructor
-----object 类型 对象访问
		a["a"];
		a.a;

//函数的作用域 重点

特殊属性  arguments arguments.callee()--指向当前使用的属性   this  指向当前使用的作用域

-------js中的function 相当于 object的构造函数
---function 内置参数 -----导致 js的function是无用的
		--arguments   变量参数---可以实现函数重载
			length --参数的数量
----function 传值问题  基本对象 传递副本 引用对象传递 引用值

---执行环境和作用于链看书   一个对象 一个  函数都将形成一个作用域 本质上 函数 对象是相等的   调用产生新的作用域

---函数声明和函数表达式     函数是对象 函数名是指针
 	---区别---
		函数申明可直接使用  表达式必须执行到这里后才能使用
函数属性和方法
	--属性 prototype--保存所有的实例方法--原型链的核心
	--this 关键字
	--new 对象 constructor  - construction属性只用一个作用就是返回这个函数的构造函数 用来进行精确比较 和instanceof进行对比
     	在一个函数中，this总是指向当前函数的所有者对象，this总是在运行时才能确定其具体的指向, 也才能知道它的调用对象。
	--方法 apply()--  函数引用apply(作用域,参数数组);
		call()	--	函数引用 apply(作用域,参数1,参数2,.....)
--注意使用函数的时候要想着函数式声明和函数表达式的区别
------原型原型连---------------------------------------------------
		__proto__是是实例中的属性
		原型链的形成真正是靠__proto__ 而非prototype,当JS引擎执行对象的方法时，先查找对象本身是否存在该方法，如果不存在，会在原型链上查找，但不会查找自身的prototype。
		一个对象的__proto__记录着自己的原型链，决定了自身的数据类型，改变__proto__就等于改变对象的数据类型。
		函数的prototype不属于自身的原型链，它是子类创建的核心，决定了子类的数据类型，是连接子类原型链的桥梁。
		在原型对象上定义方法和属性的目的是为了被子类继承和使用。
----------------------------------------------------------------		
----------new运算符的作用-----------------
function Animal(x){
	
}
new Animal("cat") = {

    var obj = {};

    obj.__proto__ = Animal.prototype;

    var result = Animal.call(obj,"cat");

    return typeof result === 'object'? result : obj;
}
!!!Animal的作用域连    a-function.proto-object.proto


----------js闭包------------------------------------

标准写法
(function A(){
	var count=0;
    function B(){
       console.log("Hello Closure!");
    }
    window.h=b;
})();
----解释
function A(){
    var count = 0;
    function B(){
       count ++;
       console.log(count);
    }
    return B;
}
var C = A();
C();// 1
C();// 2
C();// 3
在上述例子中，B 定义在 A 中，因此 B 依赖于 A ,而外部变量 C 又引用了 B , 所以A间接的被 C 引用。
也就是说，A 不会被 GC 回收，会一直保存在内存中。
!---变量加上 () 将会以函数进行执行


function的特殊属性
function hhe(){
	
}
hhe.apply(this,[1,3,3]);//使用作用域的方法进行执行函数加上了一个参数数组
hhe.call(this,1,2,3);//加上了一个参数的执行序列
var xx= hhe.bind(this);//指定一个函数绑定方法
//!!string number boolean 都是从object类型转化而来的


//js new关键字
创建一个新的对象，这个对象的类型是object；
设置这个新的对象的内部、可访问性和[[prototype]]属性为构造函数（指prototype.construtor所指向的构造函数）中设置的；
执行构造函数，当this关键字被提及的时候，使用新创建的对象的属性；
返回新创建的对象（除非构造方法中返回的是‘无原型’）。

