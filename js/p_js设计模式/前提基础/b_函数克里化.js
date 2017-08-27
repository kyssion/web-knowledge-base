//
function Curring(fn){//控制要不要执行传入的函数  并判断怎么操作
	var args=[];
	return function(){
		if (arguments.length==0){
			return fn.apply(this,args);
		}else{
			Array.prototype.push.apply(this,arguments);
			return arguments.caller;
		}
	}
}
var myfunction =(function (){
	var allmoney=0;
	return function(){
		for (var index=0;index<arguments.length;index++){
			allmoney+=arguments[index];
		}
		return allmoney;
	}
})();
var cost=Curring(myfunction);//实现的效果---- 添加数据动态的执行相关的属性
cost(100);
cost(100);
cost(100);
console.log(cost());



