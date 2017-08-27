//组合模式---参考文件夹的结构
function GoCommon(){
	this.messgas=[]
	this.message="gogogog";
	this.exeuse=function(){
		console.log(this.message);
		for (var a=0;a<this.messgas.length;a++){
			console.log(this.messgas[a]);//实现组合模式将相关的模式进行相应的组合
		}
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
