//在js中一切皆为对象    --- js中所有方法都是值传递-引用类型传递的是地址值
//1.js函数的声明写法
//第一方法将会直接造成两次解析方法-----第一次常规解析 第二次解析指针
var myfunction = new Function("jkl","bbb",'return jkl+bbb');
//第二种方法  引用式声明
var myfunction2= function(a,b){
	return a+b;
}
//第三种方法--- 声明式变量
function myfunction3(a,b){
	return a+b;
}
//注意  在函数中  函数名称本身就是 变量--- 可以作为变量返回 或者 作为参数传入

//2. js函数中重要的各种属性
//(1) arguments --- 这个属性是参数数组-用来实现js 的  重构 -- 注意 arguments中的参数是和  传入的参数一一绑定的 
//严格模式下 --- arguments 中的值不能修改不能添加

function Son(){
	arguments.length=1;//注意!!!!当arguments 的长度不够的时候要手动的增长才能向其中天剑数据
	arguments[0]="222";
	Father.apply(this,arguments);
}

function hehe (){
	if (arguments.length==1){
		console.log(arguments[0]);
	}
	if (arguments.length==2){
		console.log(2)
	}
	if (arguments.length>2){
		console.log("大于2");
	}
}
//(2) arguments.callee  --  实现函数内部进行自调用的方法
function hehe (){
	if (arguments.length==1){
		if (arguments[0]==1){
			return 1;
		}
		else{
			return arguments.callee(arguments[0]-1)*arguments[0];
		}
	}
}
//(3) js 作用域的初探
window.color="红色";
function sayColor(){
	console.log(this.color);
}
var box={
	color:"蓝色"
}
box.sayColor=sayColor;
//这里 第一次输出 红色  第二次 输出 蓝色   --  this 的作用域绑定的事后关联的地方是这个地方
this.sayColor();
box.sayColor();


//3. 函数对象自称的属性
function hehe(){
	
}
hehe.length;		//--- 表示函数默认输入参数的个数
hehe.prototype;		//--- function对象的原型方法 apply 和call
//  ---  function 函数的自身函数 指定作用域  第一个参数   -- 唯一的区别  
hehe.apply(this,[1,2]);
hehe.call(this,1,2);






