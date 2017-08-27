function User(){
	this.message="";
	this.chuli=null;
}
function GetMessage(){
	console.log("one");
}
function GetMessage2(){
	console.log("two");
}
function Messagemaster(){
	this.user=[];
	this.addUser= function(user){
		this.user.push(user);
	}
	this.sendMessage(){
		for (var a=0;a<this.user.length;a++){
			user.chuli=GetMessage;//添加订阅的方法
		}
	}
}

