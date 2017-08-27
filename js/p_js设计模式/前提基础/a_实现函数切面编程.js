function Myfunction() {
	console.log("2");
}
//为函数的调用添加功能
Function.prototype.before = function(beforefunction) {
	var _self = this;
	console.log("1" + this);
	return function() {
		beforefunction.apply(this.arguments);
		console.log("2" + this);
		return _self.apply(this, arguments);
	}
}
Function.prototype.after = function(afterfunction) {
	var _self = this;
	console.log("3" + this);
	return function() {
		var ret = _self.apply(this, arguments);
		afterfunction.apply(this.arguments);
		console.log("4" + this);
		return ret;
	}
}
var fun = Myfunction.before(function() {
	console.log('1');
}).after(function() {
	console.log('3');
})
fun();


//闭包问题
function He(){
	var x=0;
	return function(){
		x++;
		console.log(x);
	}
}
var b= He();
b();
b=null;// 销毁引用x;



