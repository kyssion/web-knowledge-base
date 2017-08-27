//策略模式的核心就是相关的数据和算法进行分离
var strategies={
	'a':function(info){
		return info * 10;
	},
	'b':function(info){
		return info * 20;
	},
	'c':function(info){
		return info * 30;
	}
}
function UseStrategies(fn,number){//实现相关的函数操作方法的传入模式
	this.fn=fn;
	this.number=number;
	this.getInof= function (){
		return this.fn.apply(this,[number]);
	}
}
var hehe = new UseStrategies(strategies.a,12);
console.log(hehe.getInof());
