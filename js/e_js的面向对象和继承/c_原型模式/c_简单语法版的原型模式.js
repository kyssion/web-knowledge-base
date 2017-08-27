function Person(){
}
Person.prototype={
	constructor:Person,//更行之后的prototype静态类型并没有重新更新constructor 默认指向Object
	name:"haha",
	say:function(){
		alert(name);
	}
}
