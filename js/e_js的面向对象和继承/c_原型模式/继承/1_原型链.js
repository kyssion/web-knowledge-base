//继承的嵌套性

function Person1(name){
	this.name=name;
}
Person1.prototype.say=function(){
	alert(this.name);
}
function Person2(name){
	this.name=name;
}
//继承了一代的属性 必须用属性名  而且注意继承要先进行声明
Person2.prototype=new Person1("haha");
var p= new Person2("666");
//delete p.name; 是用这个属性将会把父元素的那么属性展现出来
//注意 prototype不能嵌套使用
p.say();
Person2.prototype.sayhe=function(){
	alert("haha");
}
alert("---------");
Person2.prototype.sayhe();

