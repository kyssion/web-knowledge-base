//建议使用动态方法
//普通方法
function Person(name,age){
	this.name=name;
	this.age=age;
	this.friend=["1","2","3"];
}
Person.prototype={
	constructor:Person,
	say:function(){
		alert(this.name+"   "+this.age+" "+this.friend);
	}
}
var p1=new Person("one","12");
p1.friend.push("4");
var p2=new Person("two","13");
p1.say();
p2.say();
alert("-------------------");
//动态方法
function Person2(name,age){
	this.name=name;
	this.age=age;
	this.friend=["1","2","3"];
	//通过typeof方法进行类型判断  instanceof进行实例类型判断
	if(typeof Person2.prototype.say!="function"){
		Person2.prototype.say=function(){
			alert(this.name+"   "+this.age+"   "+this.friend);
		}
	}
}
var p12=new Person2("one","12");
p12.friend.push("4");
var p22=new Person2("two","13");
p12.say();
p22.say();