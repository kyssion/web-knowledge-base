canvas等媒体元素使用的标签必须使用width和height(不是css中的width和height)
使用了css 中的width和height 将会导致 canvas元素进行(方法和改变)缩放
//canvas绘制路径的时候就像一笔画
//基础
var context=canvas.getContext("2d");
context.fillStyle='red';//设置填充颜色--画出的路径包裹住的地方
context.strokeStyle="rgba(1,2,3,4)";//设置画笔颜色--设置画笔的颜色
context.lineCap="butt";//设置线条末端的方式平头butt 圆头 round 方头 square
context.lineJoin="bevel";//设置两条线相交的方法round圆交 bevel斜交 miter斜接
context.linewidth;//粗细

//1.绘制矩形
context.strokeRect(10,10,10,10);//x坐标 y坐标 宽度高度
context.fillRect(10,10,10,10);//属性同上
context.clearRect(1,2,3,4);//将指定位置的矩形进行清空
//2.绘制路径  --- 注意弧度的默认是角度是顺时针
context.beginPath();//表示开始绘制新的路径---中指起始点终止点串
//一定要注意这个问题---canvas是基于路径进行绘图的也就是说-如果路径没有闭合再进行strock或者fill会将原来所有的东西都绘制上去
context.arc(10,10,20,20,30,false);//圆形的x坐标y坐标 半径  弧度起点弧度终点 是否反向绘制
context.arcTo(x1,y1,x2,y2,30);//方法将利用当前端点、端点1(x1,y1)和端点2(x2,y2)这三个点所形成的夹角，然后绘制一段与夹角的两边相切并且半径为radius的圆上的弧线
context.bezierCurveTo(x1,y1,x2,y2,x,y);//绘制一条曲线头四个属性是控制点 最后一个是重点
context.lineTo(10,20);//绘制一条到10,20的直线
context.moveTo(10,20);//将游标移动到10,20 并不进行画线
context.quadraticCurveTo(10,20,30,40);//画一条以10,20 为控制点的到30.40的二次曲线
context.rect(10,20,30,40);//这个方法绘制的一条路径而不是个类似rect()函数绘制的独立图形
context.setLineDash();//设置线条的虚线  5,5-两个参数表示虚线和实线的宽度  5,5,5,5,四个虚线实线虚线实线
//路径绘制完成后使用的方法
context.closePath();//经路径的起点和终点连接起来---注意是所有的起始点---每次重新画线的时候都会产生一个起始点
//以下两个属性如果没有调用beginPath();//将会继续的讲起始点和终止点连接上
context.fill();//经路径进行填充
context.stroke();//对路径进行描边
context.clip();//以当前路经作为一个裁剪区域尽心裁剪
//定义一次绘画的裁剪界面
//2.绘制文本
context.font="bold 30px 微软雅黑";//类似css中控制字体的属性
context.textAlign="centent";//标志文字在所给的区域的水平排列方法 start end left right center
context.textBaseline="";//top hanging middle alphabetic ideographic botton  表是文本的基线
						//上面的属性指定文字的垂直方向上的排列方法
context.fillText("12",x,y);//进行文字填充  字体大小 字体框的位置
context.strokeText("12",x,y);//进行文字描边
context.measureText("sdf").width;//获得文字的宽度
//3, 变换  --注意这些属性都有记忆性 当进行变换的时候将会记住相关的属性--使用的时候一般要和save和reset连用
//表示下一次要画的东西相比较之前的东西要进行的变化
context.rotate(10);//进行原地旋转10弧度
context.scale(x,y);//进行缩放 width*x height*y 默认值是1.0
context.translate(x,y);//将原来的点移动到x,y;
//使用变换 变换矩阵
context.clearRect(1,2,3,4);//晴空制定的canvas画布----清空这一个缓冲区
//4.状态保存---形成一个状态栈   save将会将转台压进栈中 而 resotore将会讲转台抛出状态栈中
context.save();//将当前的指针转台进行保存
context.restore(); //将当前的状态恢复成之前的一个状态
//只能保存剪切(区域) 变形(上面的旋转等)  绘图状态--字体颜色各种效果
//5.图像绘制
context.drawImage(image,1,2);//传入一个img 图像  并指明起始位置
context.drawImage(image,1,2,3,4);//加上指明的长宽
//....
//6 阴影
context.shadowOffsetX=5;
context.shadowOffsetY=6;//指定阴影的绘制路径
context.shadowBlur=4;//指定模糊比
context.shadowColor="red";//指定阴影的颜色
//7.渐变
//线性渐变
var gradient=context.createLinearGradient(1,2,3,4);//指定渐变的起始位置和结束位置
gradient.addColorStop(0,"write");
gradient.addColorStop(1,"bulue");//指定颜色渐变的过程--- 0-0.5-1
//还用圆形渐变---
//样例----渐变是作为填充的样式的
var gra=mycontext.createLinearGradient(0,0,300,300);
gra.addColorStop(0,'red');
gra.addColorStop(1,"white");
mycontext.fillStyle=gra;
mycontext.fillRect(0,0,300,300);
//8.模式    ---重复图像用来填充或者描边图形
var pattern=context.createPattern(im,"repeat");
image	规定要使用的图片、画布或视频元素。
repeat	默认。该模式在水平和垂直方向重复。
repeat-x	该模式只在水平方向重复。
repeat-y	该模式只在垂直方向重复。
no-repeat	该模式只显示一次（不重复）。

context.fillStyle=pattern;
//9.图像数据---指的是一次绘画的效果
var image=context.getImageData(1,2,3,4);//表示获得图像数据从1,2起始宽度为3高度为4
var image=context.createImageData(image);//创建一个多大的区域
var image=context.createImageData(1,2);
var data=image.data;//获得图像的数据数组---四个为一组第一维表示red 2green 3blue 4alpha
context.putImageData(image)
//图像操作样例
var myimage= document.createElement("img");
myimage.src="img/6503d0a8f2724661fe60695fcd7d0d20.png";
function fanzhuan(needctx){
	var imagedata=needctx.getImageData(10,10,800,480);
	var data =imagedata.data;
	for (var i=0;i<data.length;i+=4){
		data[i]=255-data[i];
		data[i+1]=255-data[i+1];
		data[i+2]=255-data[i+1];
	}
	needctx.putImageData(imagedata,10,10);
}
function heibai(needctx){
	var imagedata=needctx.getImageData(10,10,800,480);
	var data =imagedata.data;
	var average=data[i]+data[i+1]+data[i+2];
	for (var i=0;i<data.length;i+=4){
		var average=(data[i]+data[i+1]+data[i+2]+data[i+3])/3;
		data[i]=average;
		data[i+1]=average;
		data[i+2]=average;
	}
	needctx.putImageData(imagedata,10,10);
}
function mingliang(needctx,x){
	var imagedata=needctx.getImageData(10,10,800,480);
	var data =imagedata.data;
	var average=data[i]+data[i+1]+data[i+2];
	for (var i=0;i<data.length;i+=4){
		data[i]+=x;
		data[i+1]+=x;
		data[i+2]+=x;
	}
	needctx.putImageData(imagedata,10,10);
}
myimage.onload=function(){
	console.log(myimage.width+"   "+myimage.height);
	var mycanvas= document.getElementsByTagName("canvas")[0];
	var needcontext=mycanvas.getContext("2d");
	needcontext.drawImage(myimage,10,10);
	fanzhuan(needcontext);
	heibai(needcontext);
	mingliang(needcontext,10);
}
//canvas转成Image
var image = new Image();  
// canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
// 指定格式 PNG  
    image.src = canvas.toDataURL("image/png");  
//canvas   全局属性

context.globalAlpha=0;//设置全局透明度
context.globalCompositeOperation="";//设置图像相交时候的特性方法
source-over	默认。在目标图像上显示源图像。
source-atop	在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
source-in	在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
source-out	在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
destination-over	在源图像上方显示目标图像。
destination-atop	在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
destination-in	在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
destination-out	在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
lighter	显示源图像 + 目标图像。
copy	显示源图像。忽略目标图像。
xor	使用异或操作对源图像与目标图像进行组合。



//其他 isPointInPath()
context.isPointInPath(1,2);确认一个点是否在当前的路径上




//使用相关动画


window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var mycanvas= document.getElementsByTagName("canvas")[0];
var mycontext=mycanvas.getContext("2d");
var x=0;
var stop=null;
//不停的获得stop --动画返回的地址标记
function hehe(){
	mycontext.clearRect(0,0,mycanvas.width,mycanvas.height);
	mycontext.beginPath();
	mycontext.arc(x,100,100,0,2*Math.PI,true);
	mycontext.closePath();
	mycontext.fillStyle="blue";
	mycontext.fill();
	x+=5;
	stop=window.requestAnimationFrame(hehe);
};
stop=window.requestAnimationFrame(hehe);
window.setTimeout(function(){
	console.log(stop);
	window.cancelAnimationFrame(stop);
},1000);
//使用settime方式的动画是将其当成帧动画
for (var i = 0 ;i<200;i++){
	setTimeout(hehe,i*4);
}


//坑点 所有的translate类似的方法 只是动态将之后的路径按照一定的映射规则进行映射