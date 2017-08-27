--------------------------js引用方法------------------------
	-----外部引用  defer属性-延迟加载 async异步并不按章先后顺序进行执行 只对外部脚本有用
		<script src="" defer="" async="" type="" ></script>
	-----内部引用--------------------------------------------------
		<script></script>直接嵌入html代码中
------------------------严格模式
					"use strict"
	------全局严格模式 卸载js文件的开头----------------
	------函数匿名模式卸载函数体的开头-----------------
	------方便文件载入联合     放进立即执行的匿名函数之中-------------------------
			(function (){
　　　　			"use strict";
　　 			})();
	-------严格模式特点--------------------------------
		1.变量使用之前必须进行声明 --非严格未声明的变量直接变成全局变量
		2. 静态绑定
			Javascript语言的一个特点，就是允许"动态绑定"，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。
			严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外。
			具体来说，涉及以下几个方面。
				--1--
				禁止使用with语句  ----因为with语句无法在编译时就确定，属性到底归属哪个对象。
				--2--
				创设eval作用域 	正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。
				正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。
				--3增强的安全措施---
					(1)禁止this关键字指向全局对象
					(2)禁止在函数内部遍历调用栈 arguments.caller;
				--4禁止删除变量--
					严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除
				--5 显式报错--
					正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。
					严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。
					严格模式下，对禁止扩展的对象添加新属性，会报错。
				--6 重名错误--
				--7 禁止八进制表示法--
					正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。
				--8 arguments对象的限制--
					取消了参数追踪-因为编译时即确定 就不需要追踪了
					(1)不允许对arguments赋值
					(2)arguments不再追踪参数的变化  这个好
					(3)禁止使用arguments.callee -- 不能函数自调用
				--9函数必须声明在顶层--
					将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。
				--10 保留字--
					为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。
------------------------js 全局函数--------------------------------------
--解码编码 url--
		window.decodeURI();						//解码某个编码的 URI。
		window.decodeURIComponent()	;			//解码一个编码的 URI 组件。
		window.ncodeURI()	;					//把字符串编码为 URI。
		window.encodeURIComponent()	;			//把字符串编码为 URI 组件。
--字符串编码--
		window.escape(string);                  //该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标
												//点符号进行编码： * @ - _ + . / 。其他所有的字符都会被转义序列替换。
		window.unescape(String);                //unescape()	对由 escape() 编码的字符串进行解码。

--计算 JavaScript 字符串，并把它作为脚本代码来执行。
		window.eval();							//计算 JavaScript 字符串，并把它作为脚本代码来执行。

--判断函数---
		window.isFinite(number);				//检查某个值是否为有穷大的数。
		window.isNaN(number);					//检查某个值是否是数字。
		window.Number();						//把对象的值转换为数字。
--字符串处理函数--
		window.parseFloat();					//解析一个字符串并返回一个浮点数。
		window.parseInt();						//解析一个字符串并返回一个整数。parseInt(string, [radix])-最后一个表示进制
		window.String();						//把对象的值转换为字符串。
-----------------------


for 循环  break 和 continue 属性  
break xxx;  跳出这个
contunue xxx; 跳过这个


switch (x){
	case num<x:
	break;
	default:
	xxx;
}




--------h5--------------
sessionStorage.
localStorage




var  hehe="123123";
function he2he(){
	message="this is message";//函数内使用未加var的变量表示想成全局变量
}
he2he();
console.log(message);
console.log(typeof 123);//输出类型
var mynumber = NaN;//非数字
//字符串转化成数字
var a= Number("234");
a=parseInt("AF",16);
console.log(a);
//数字转换成字符串
var b=String(123);
var b=123+"";
console.log(b);
//js object 类型


//js 使用比较函数的时候遵循的原则  -- string number-直接进行比较  不同类型转换成int类型在进行比较  object 使用valueof后进行比较
// === 不同类型直接返回false

for (var hh in window){//相当于使用循环的for (xx:xx) foreach
	///sconsole.log(hh);
}
function uio(){
	var hdhd=123;
	console.log(arguments.length);
}
//with(bbb){   //接收的是对象
//	var a= jkl();
//}   解决作用域的问题
uio(1,2,3,4,5,6,7,8,8,9,0,0,0,0,0,0);


//js 类型识别  

//typeof  -- 基本类型判断
//instanceof  --  原型链判断类似java


var oneone=123;
function one(){
	var oneone=1;
	function two(){
		var twotwo=2;
		function three(){
			threethree=3;
			console.log(oneone);
		}
		three();
	}
	two();
}
one();
console.log(threethree);
var myscript=new Object();
myscript.name="123";
console.log(myscript['name']);
//js 数组
var myarray = new Array(1,2,3,4,4);//多个变量将数字直接编程数组
var myarray2=[1,2,0,3,4];
var myarray3=new Array(10);//一个变量创建定长的数组
console.log(myarray);
console.log(myarray2);
console.log(myarray3);
myarray.length=12;//js可以手动的指定数组的长度---可以动态的额进行修改
myarray[1000]=123;//数组的空间是无限制的只要想放入就能放入

//数组使用tostring--返回字符串 valueof--返回数组
//数组栈方法 pop push shift unshift
//数组排序  
myarray.reverse();
function compare(value1,value2){
	if (value1<value2){
		console.log(value1+""+value2);
		return -1;//不交换
	}else{
		return 1;
	}
}
myarray2.sort(compare);
console.log(myarray2);

//js的
 var  aaa=12,hehe=1234,fhfhf=444;//组合赋值


----为了防止重复点击造成计时器重叠 需要手动的清除计数器
function startMove() {
	clearInterval(iTimer); //运动前清除定时器
	iTimer = setInterval(function() {
		if(oDiv.offsetLeft == 500) {
			clearInterval(iTimer); //满足条件清除定时器
		} else {
			oDiv.style.left = oDiv.offsetLeft + 10 + 'px'; //每次向前移动
		}

	}, 30);
}
-----有一些元素不能直接用过 node.style.xxx 获取需要使用这个方法
parseInt(window.getComputedStyle(myMinImg, null).width, 10);---只读属性 获得这个属性上祖宗十八代的属性
-----getElemnetbyclassname和getComputedStyle的兼容性写法
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
function getClassName(abc) {
	if(!document.getElementsByClassName) {
		var list = document.getElementsByTagName('*');
		var arr = [];
		for(var i = 0; i < list.length; i++) {
			if(list[i].className == abc) {
				//在浏览器版本不支持该方法时使用className属性
				arr.push(list[i]);
			}
		}
		return arr;
	} else {
		return document.getElementsByClassName(abc);
	}
}

---e.stopPropagation();阻止事件冒泡

---js动画的时间函数setintervl h和 setTimeout相对于处理器来说是异步的所以需要如果要使用顺顺序的变化要使用牵头
---


---在使用offset进行定位的时候注意参考的父元素是offsetparent---被定位的父元素   根节点没有offsetleft等属性
--获得任意节点相对于整个浏览器的节点位置
function getXY(node,donghuafrom){
	var x=0;
	var y=0;
	while(node){
		if (node.offsetLeft==undefined){
			break;
		}else{
			console.log(node.id+"**"+node.offsetLeft+"  "+node.offsetTop)
		}
		x=x+node.offsetLeft;
		y=y+node.offsetTop;
		node=node.offsetParent ;
	}
	donghuafrom.x=x;
	donghuafrom.y=y;
}


---in_parent.scrollTop == in_parent.scrollHeight - in_parent.clientHeight
滚动高度的相关问题