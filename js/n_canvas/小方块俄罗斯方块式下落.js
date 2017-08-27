var mycanvas = document.getElementsByTagName("canvas")[0];
var context = mycanvas.getContext("2d");
var color = ["red", "yellow", "block", "green", "blue", "brown"];
var fangkuailist = [];
function createChangfangxing(x, y, width, height, context) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.context = context;
	this.thecolor=color[parseInt(Math.random() * color.length)];//定义使用的颜色样式
}
createChangfangxing.prototype.fill = function() {
	//动态的生成指定的context的对象
	context.beginPath();
	this.context.fillStyle = this.thecolor;
	this.context.strokeStyle = this.thecolor;
	this.context.fillRect(this.x-2, this.y-2, this.width+2, this.height+2);
	//为了防止 浏览器刷新频率太慢导致的方块在天山就叠加了
	this.context.strokeRect(this.x, this.y, this.width, this.height);
	console.log(this.x + "  " + this.y + "  " + this.width + "  " + this.height);
}
mycanvas.onclick = function(e) {
	e = e || window.event;
	var width = parseInt(Math.random() * 30 + 10);
	var height = parseInt(Math.random() * 30 + 10);
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	
	//每次点击的时候将会动态的香气中添加一个属性
	if(panduan(x,y,width,height,-1)) {
		var a = new createChangfangxing(x, y, width, height, context);
		fangkuailist.push(a);
		a.fill();
	}
}
function panduan(x, y, width, height,fals) {
	//正方形碰撞检测
	for (var i =0 ;i<fangkuailist.length;i++){
		if (i==fals)
			continue;
		if ((y>=fangkuailist[i].y-height-1
			&&y<=fangkuailist[i].y+fangkuailist[i].width+1)
			&&(x<=fangkuailist[i].x+fangkuailist[i].width+1
			&&x>=fangkuailist[i].x-width-1)){
			console.log((y>fangkuailist[i].y-height)+" "+(y<fangkuailist[i].y+fangkuailist[i].width)
			+" "+(x<fangkuailist[i].x+fangkuailist[i].width)
		+" "+(x>fangkuailist[i].x-width));
			console.log(i);
			
			return false;
		}
	}
	return true;
}
document.getElementById("one").onclick = function() {
	console.log(fangkuailist.length);
}
var speed=1;
(function heeh(){
	///动画实现
	context.clearRect(0,0,400,400);
//	console.log(123);
	for (var i=0;i< fangkuailist.length;i++){
		if ((panduan(fangkuailist[i].x,fangkuailist[i].y+speed,fangkuailist[i].width,fangkuailist[i].height,i)&&(fangkuailist[i].y+fangkuailist[i].height<400))){
			fangkuailist[i].y+=speed;
//			console.log("d");
		}
		fangkuailist[i].fill();
	}
	window.requestAnimationFrame(heeh);
})();



//核心使用requestAnimationFrame
function hehe(){
	var base;
	if (a<100){
		base=window.requestAnimationFrame(hehe);
	}
	
}
