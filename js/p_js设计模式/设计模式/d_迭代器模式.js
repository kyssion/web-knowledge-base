//迭代器模式
function Class_iteroy(arry){
	this.array=arry;
	this.index=0;
	this.next=function(){
		if (this.index<this.array.length){
			return this.array[this.index++];
		}
	}
	this.hasNext=function(){
		return this.index<this.array.length;
	}
}
function Class_one(){
	this.numberarry=[];
	this.addnumber=function(num){
		this.numberarry.push(num);
	}
	this.returnIteroy=function(){
		return new Class_iteroy(this.numberarry);
	}
}
var  myclass = new Class_one();
for (var a=0;a<10;a++){
	myclass.addnumber(a);
}
var ito= myclass.returnIteroy();
while(ito.hasNext()){
	console.log(ito.next());
}
