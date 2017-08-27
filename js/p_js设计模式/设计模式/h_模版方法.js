//模版方法   其实是将类的相干方法进行封装传递给相关的属性进行相关的操作
function One(){
	this.say=function(){
		console.log("one");
	}
	this.say2=function(){
		console.log("two");
	}
	this.say3=function(){
		console.log("three");
	}
	this.four=function(){
		console.log("four");
	}
}
function OK(infomation){
	this.info=infomation;
	this.say= function(){//实现模版函数的方法
		info.say();
		info.say2();
		info.say3();
	}
}
