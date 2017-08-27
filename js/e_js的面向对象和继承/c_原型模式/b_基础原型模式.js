function Person(name,age){
	//Person.prototype.name=name; 原型模式不能动态的添加方法给prototype因为静态部分在运行前
	//已经加载进内存了
	this.name=name;//在内部重写属性重写属性
	Person.prototype.name="name";
	Person.prototype.age="age";
	Person.prototype.say=function(){
		alert(this.name);//之所以可以使用是因为原型模式的自动搜素原理
	}
}
//////////////////////////////////////////////////////////////
var p= new Person("123","234");
var p2=new Person();
p.say();
p2.name="haha";//在外部重写属性
p2.say();
//删除属性-----属性的访问方法不会发生改变
delete p2.name;
p2.say();
//in操作符判断原型中是否存这个属性 
//hasownProperty 是否在实例中能访问到有这个属性 -自定义的属性不是在原型链中的属性
//for in 输出所有的属性 包括函数名
//获得所有可枚举属性并且变成数组  Object。keys 获取所有 属性包括不可枚举的 Object。getOwnPropertuNames
alert("name" in p2);
for(var ha in p2){
	console.log(ha);
}
//注意这个方法可以向 默认的object类 如 string array number 属性添加属性
String.prototype.getlength=function(){
	return this.length;
}
var a=new String("asdfasdf");
alert(a.getlength());
