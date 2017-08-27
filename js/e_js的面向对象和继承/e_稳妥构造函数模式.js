//体现出js的强大的地方
//知识点包括了js的自动类型转换这个方法让 参数属性编程类中的私有变量了
//适用于安全模式第七章
function Person(name,age){
	name="sadf";
	var o = new Object();
	o.say=function(){
		alert(name+"  "+age);
	}
	return o;
}
var p = new Person("123","123");
p.say();




































