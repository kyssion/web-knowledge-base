var mycanvas = document.getElementsByTagName("canvas")[0];
var context = mycanvas.getContext("2d");
var xiuzhex = 0;
var xiuzhey = 0;
var oldx=0,odly=0;
var speedx=0,speedy=0;
var stop=0;
function createRect(x, y, context) {
	this.x = x;
	this.y = y;
	this.context = context;
}
createRect.prototype.fill = function() {
	this.context.clearRect(0, 0, 400, 400);
	this.context.beginPath();
	this.context.fillStyle = "red";
	this.context.fillRect(this.x, this.y, 50, 50);
}
var myrect = new createRect(100, 100, context);
myrect.fill();
mycanvas.onmousedown = function(e) {
	e = e || window.event;
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	if(x >= myrect.x && x <= myrect.x + 50 && y >= myrect.y && y <= myrect.y + 50) {
		window.cancelAnimationFrame(stop);
		mycanvas.addEventListener("mousemove", MouseMove, false);
		mycanvas.addEventListener("mouseup", MouseUp, false);
		xiuzhex = e.pageX - this.offsetLeft - myrect.x;
		xiuzhey = e.pageY - this.offsetTop - myrect.y;
		odlx=e.pageX - this.offsetLeft;
		odly=e.pageX - this.offsetLeft;
	}
}
//当鼠标一进来的时候进行鼠标指针的方块的左上角的属性进行验证
function MouseMove(e) {
	e = e || window.event;
	e.preventDefault();
	myrect.x = e.pageX - this.offsetLeft-xiuzhex;
	myrect.y = e.pageY - this.offsetTop-xiuzhey;
	myrect.fill();
	speedx=e.pageX - this.offsetLeft-odlx;
	speedy=e.pageY - this.offsetTop-odly;
	odlx=e.pageX - this.offsetLeft;
	odly=e.pageY - this.offsetTop;
	console.log(speedx+" "+speedy);
}
function MouseUp(e) {
	e = e || window.event;
	mycanvas.removeEventListener("mousemove", MouseMove, false);
	mycanvas.removeEventListener("mouseup", MouseUp, false);
	stop= window.requestAnimationFrame(donghua);
}
function donghua(){
	myrect.x+=speedx;
	myrect.y+=speedy;
	penzhuan();
	myrect.fill();
	stop= window.requestAnimationFrame(donghua);
}
function penzhuan(){
	if (myrect.x<=0||myrect.x>=350){
		speedx=-speedx;
	}
	if (myrect.y<=0||myrect.y>=350){
		speedy=-speedy;
	}
}



