//在急用构造模式外套一层是实现动态加入 个人的属性方法
//相当于 工厂方法+ 原型式继承
function object (o){//使用原型模式
	function F(){
		
	}
	F.prototype=o;
	return new F();
}
function createObject(o){
	var clone= object(o);
	clone.say=function(){
		console.log("ok");
	}
	return clone;
}
var s = createaobject({//使用寄生模式进行集成
	name:function(){
		
	}
});
