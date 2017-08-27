//1.函数延迟执行
var throttle = function(fn, interval) { //传入需要延时的函数 和 延后的时间
	var_self = fn, timer, firstTime = true; //初始化参数 指定函数,使用setTimeout返回的标记,和判断是否是第一个
	return function() {
		var args = arguments,
			_me = this;
		if(firstTime) {
			_self.apply(_me, args);
			firstTime = false;
			return true;
		}
		if(timer) {
			return false;
		}
		timer = window.setTimeout(function() {
			window.clearTimeout(timer);
			timer = null;
			_self.apply(_me, args);
		}, interval || 500);
	};
}
//2.函数分时执行
function timeChunk(ary, fn, count) { //传入分时操作的数组,函数,和数量
	var obj, t;
	var len = ary.length;
	var start = function() {
		for(var i = 0; i < Math.min(count || 1, len); i++) {
			var obj = ary.shift();
			fn(obj);
		}
	}
	return function() {
		t = setInterval(function() {

			if(len = 0) {
				return clearInterval(t);
			} else {
				start();
			}

		},200);
	}
}
//3.惰性加载函数 --- 就是函数自己改变自己的函数实现
var  myfunction= function(a){//这样就实现了函数的嗅探和再调用的方法
	if (a==0){
		myfunciton=function(){
			console.log("123");
		}
	}else{
		myfunction=function(){
			console.log("222");
		}
	}
	myFunction();
}
