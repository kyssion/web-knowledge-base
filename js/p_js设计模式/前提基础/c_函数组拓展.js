Function.prototype.uncurrying=function(){
	var _self= this;//_self将会储存需要加入拓展的函数方法或者其他的东西
	return function(){
		//var obj= Array.prototype.shift.call(arguments);//截取传入参数中的第一个数据--相当于arguments.shift
		var obj=arguments.shift();
		//深入理解 apply和call --其实是相当于在第一个对象.函数(参数);
		return _self.apply(obj,arguments);
	}
}
var push=Array.prototype.push.uncurrying();
var objectt={
	"length":1,
	"0",1
}
push(objectt,2);
console.log(objectt.1);
