//其实就是实现元素的共享和属性的外部化
function XY(message){
	this.status=message;//实现参数的传递进来和在本地进行操作
	this.say=function(){
		console.log(thi.status*123123123);
	}
}

//享元模式进化版---操作类进行缓存--- 在我的些Mytool类中使用了
