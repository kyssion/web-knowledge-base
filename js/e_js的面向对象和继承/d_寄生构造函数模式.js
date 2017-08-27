//工厂模式的动态添加版
function createdPerson(name,age){
	this.name=name;
	this.age=age;
}
//这样可以做到对单独的一个属性进行扩展而不是对所有的


//寄生构造模式=== 工厂模式+传统构造模式+扩展;
function getPerson(name,age){
	var p=new createdPerson(name,age);//外界插入方法
	p.say=function(){
		alert(this.name+"    "+this.age);
	}
	return p;
}
var hep = getPerson("666","777");
hep.say();