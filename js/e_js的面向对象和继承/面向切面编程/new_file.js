function Myfunction(){
	console.log("2");
}
//为函数的调用添加功能
Myfunction.prototype.before=function(beforefunction){
	var _self = this;
	console.log("1"+this);
	return function(){
		beforefunction.apply(this.arguments);
		console.log("2"+this);
		return _self.apply(this,arguments);
	}
}
Myfunction.prototype.after=function(afterfunction){
	var _self = this;
	console.log("3"+this);
	return function(){
		var ret=_self.apply(this,arguments);
		afterfunction.apply(this.arguments);
		console.log("4"+this);
		return ret;
	}
}
var fun=myFunction.before(function(){
	console.log('1');
}).after(function(){
	console.log('3');
})
fun();
