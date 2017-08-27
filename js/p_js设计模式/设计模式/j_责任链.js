//将if语句进行封装

//判断函数
function ifone(x){
	console.log(this==one);
	if (x==1){
		return "one is "+x;
	}else{
		return false;
	}
}
function iftwo(x){
	console.log(this==one);
	if (x==2){
		return "two is "+x;
	}else{
		return false;
	}
}
function ifthree(x){
	console.log("sdsdfsdf");
	if (x==3){
		return "three is "+x;
	}else{
		return false;
	}
}
//封转if函数
function ifMessage(fn){
	this.fn=fn;
	this.nextif=undefined;
	this.addnext=function(nextfn){
		this.nextif=nextfn;
	}
	this.getResult=function(x){
		var ppp= this.fn.apply(this,[x]);
		if (ppp==false){
			//实现函数链的叠加
			return this.nextif.getResult.apply(this.nextif,[x]);
		}
		return ppp;
	}
}

var one=new ifMessage(ifone);
var two= new ifMessage(iftwo);
var three= new ifMessage(ifthree);
one.addnext(two);
two.addnext(three);
console.log(one.getResult(3));
