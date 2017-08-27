//简单理解就是可以将系列的操作变成命令然后进行相关的操作
function GoCommon(){
	this.message="gogogog";
	this.exeuse=function(){
		console.log(this.message);
	}
}
function OutCommon(){
	this.message= "outoutout";
	this.exeuse=function(){
		console.log(this.message);
	}
}



function Common(){
	this.commons=[];//将命令加入进函数中随后进行相关的操作
	this.addcommon=function(message){
		this.commons.push(message);
	}
	this.exeuse= funcion(){
		for (var a=0;a<this.commons.length;a++){
			this.commons[a].exeuse();
		}
	}
}
