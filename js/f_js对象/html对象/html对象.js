-------------------Anchor 对象
--
Anchor 对象表示 HTML 超链接。
在 HTML 文档中 <a> 标签每出现一次，就会创建 Anchor 对象。
锚可用于创建指向另一个文档的链接（通过 href 属性），或者创建文档内的书签（通过 name 属性）。
您可以通过搜索 Document 对象中的 anchors[] 数组来访问锚，或者使用 document.getElementById()。
-------------------Body 对象

Body 对象代表了 HTML body 元素。
Body 对象代表文档的主体 (HTML body) 。
body 元素包含了所有的 HTML 文档，如文本，超级链接，图片，表格，列表，等等。

-------------------cookie对象


-------------------Form 对象

Form 对象代表一个 HTML 表单。
在 HTML 文档中 <form> 每出现一次，Form 对象就会被创建。
表单用户通常用于收集用户数据，包含了 input 元素如：文本字段，复选框，单选框，提交按钮等待。表单也可以说选项菜单, textarea, fieldset, legend, 和 label 元素。
表单用于向服务端发送数据。
-------------------Image 对象

Image 对象代表嵌入的图像。
<img> 标签每出现一次，一个 Image 对象就会被创建。
-------------------Link 对象

Link 对象代表某个 HTML 的 <link> 元素。<link> 元素可定义两个链接文档之间的关系。
<link> 元素被定义于 HTML 文档的 head 部分。

-------------------Audio

-------------------------------------
document.getElementById("myAudio").buffered;	//buffered 属性返回 TimeRanges 对象。TimeRanges 对象表示音频的缓冲区间。										//	---	length - 获得音视频中已缓冲范围的数量
												//	---	start(index) - 获得某个已缓冲范围的开始位置
												//	---	end(index) - 获得某个已缓冲范围的结束位置
												//缓冲范围指的是已缓冲音视频的时间范围。如果用户在音视频中跳跃播放，会得到多个缓冲范围。
document.getElementById("myAudio").duration;			//duration 属性返回当前音频的长度，以秒计。
document.getElementById("myAudio").currentTime;	//urrentTime 属性设置或返回音频播放的当前位置（以秒计）当设置该属性时，
												//播放会跳跃到指定的位置。
document.getElementById("myAudio").played; //属性返回 TimeRanges 对象。TimeRanges 对象表示用户已经播放或看到的音频范围。
											//已播范围指的是被播放音频的时间范围。如果用户在音频中跳跃，则会获得多个播放范围。
											//注意： 该属性是只读的。
----------------------------------
document.getElementById("myAudio").seekable; //属性返回 TimeRanges 对象。TimeRanges 对象表示音频中用户可寻址的范围。可寻址范围指的
											//是用户在音频中可寻址（移动播放位置）的时间范围。对于流音频，通常可以寻址到音频中的任何位置，即使其尚未完成缓冲。
											//注意： 该属性是只读属性。
document.getElementById("myAudio").seeking;// 属性返回用户目前是否在音频中寻址。寻址中（Seeking）指的是用户在音频中移动/跳跃到新的位置。
											//注意： 该属性是只读属性。
---------------------
document.getElementById("myAudio").controls;	//指定音频是否现实控件
----------------------------
document.getElementById("myAudio").src; //属性设置或返回音频的当前来源。
document.getElementById("myAudio").currentSrc;	//字符串，表示当前音频的URL。 返回实体URL， 包括协议(如 http://)。如果没有设置 audio，则返回空值。
----------------------------------

document.getElementById("myAudio").duration;			//duration 属性返回当前音频的长度，以秒计。
document.getElementById("myAudio").currentTime;	//urrentTime 属性设置或返回音频播放的当前位置（以秒计）当设置该属性时，播放会跳跃到指定的位置。
document.getElementById("myAudio").played; //属性返回 TimeRanges 对象。TimeRanges 对象表示用户已经播放或看到的音频范围。已播范围指的是被播放音频的时间范围。如果用户在音频中跳跃，则会获得多个播放范围。注意： 该属性是只读的。
document.getElementById("myAudio").seekable; //属性返回 TimeRanges 对象。TimeRanges 对象表示音频中用户可寻址的范围。可寻址范围指的是用户在音频中可寻址（移动播放位置）的时间范围。对于流音频，通常可以寻址到音频中的任何位置，即使其尚未完成缓冲。注意： 该属性是只读属性。
document.getElementById("myAudio").seeking;// 属性返回用户目前是否在音频中寻址。寻址中（Seeking）指的是用户在音频中移动/跳跃到新的位置。注意： 该属性是只读属性。
-------------------------------
document.getElementById("myAudio").playbackRate; //属性设置或返回音频的当前播放速度。
document.getElementById("myAudio").defaultPlaybackRate;//设置或返回音频的默认播放速度
----------------------------------------------------
document.getElementById("myAudio").ended;	//返回音频的播放是否已结束
document.getElementById("myAudio").paused; //属性返回音频是否已暂停。

--------------------------------------------------------------
document.getElementById("myAudio").autoplay;	//设置或返回是否在加载完成后随即播放音频
document.getElementById("myAudio").preload; //属性设置或返回是否在页面加载后立即加载音频。preload 属性描述了在页面加载后是否预加载音频。注意：如果使用 autoplay 属性则 preload 属性会被忽略。
document.getElementById("myAudio").loop;	//设置或返回音频是否应在结束时重新播放
document.getElementById("myAudio").mediaGroup; //属性设置或返回音频所属的媒体组合的名称。媒体分组允许两个或更多音频元素保持同步。
--------------------------------------------------------------
document.getElementById("myAudio").muted; //属性设置或返回音频是否应该被静音（关闭声音）。该属性反映了 <audio> muted 属性。该属性指定了音频是静音的。
document.getElementById("myAudio").volume; //属性设置或返回音频的音量，从 0.0 (静音) 到 1.0 (最大声)。
---------------------------------------------------------------

document.getElementById("myAudio").readyState; //属性返回音频的当前就绪状态。就绪状态指示音频是否已准备好播放。注意： 该属性是只读属性。
document.getElementById("myAudio").networkState; //属性返回音频的当前网络状态（activity）。
											//---0 = NETWORK_EMPTY - 音频尚未初始化
											//---1 = NETWORK_IDLE - 音频是活动的且已选取资源，但并未使用网络
											//---2 = NETWORK_LOADING - 浏览器正在下载数据
											//---3 = NETWORK_NO_SOURCE - 未找到音频来源


document.getElementById("myAudio").play();	//开始播放音频
document.getElementById("myAudio").pause();	//暂停当前播放的音频
addTextTrack();//	向视频添加新的文本轨道。
load();//	重新加载视频元素。
play();//	开始播放视频。
pause();//	暂停当前播放的视频。


---------------video
document.getElementById("myAudio").autoplay;	//设置或返回是否在就绪（加载完成）后随即播放视频。
----------------------------------------------------------------------
document.getElementById("myAudio").currentTime;	//设置或返回视频中的当前播放位置（以秒计）。
document.getElementById("myAudio").seekable;	//返回表示视频可寻址部分的 TimeRanges 对象。
document.getElementById("myAudio").seeking;		//返回用户当前是否正在视频中进行查找。
document.getElementById("myAudio").played;		//返回表示视频已播放部分的 TimeRanges 对象。
document.getElementById("myAudio").buffered	;	//返回表示视频已缓冲部分的 TimeRanges 对象。
document.getElementById("myAudio").duration;	//返回视频的长度（以秒计）。
------------------------------------------------------------
document.getElementById("myAudio").controls;	//设置或返回视频是否应该显示控件（比如播放/暂停等）。

----------------------------------------------------------
document.getElementById("myAudio").src;			//设置或返回视频的 src 属性的值。
document.getElementById("myAudio").currentSrc;	//返回当前视频的 URL。
-------------------------------------------------------------------------------
document.getElementById("myAudio").defaultMuted;//设置或返回视频默认是否静音。
document.getElementById("myAudio").defaultPlaybackRate;//设置或返回视频的默认播放速度。
document.getElementById("myAudio").playbackRate;//设置或返回视频播放的速度。
document.getElementById("myAudio").ended;		//返回视频的播放是否已结束。
document.getElementById("myAudio").error;		//返回表示视频错误状态的 MediaError 对象。
document.getElementById("myAudio").height;		//设置或返回视频的 height 属性的值。
document.getElementById("myAudio").loop	;		//设置或返回视频是否应在结束时再次播放。
document.getElementById("myAudio").muted;		//设置或返回是否关闭声音。
document.getElementById("myAudio").paused;		//设置或返回视频是否暂停。
document.getElementById("myAudio").poster;		//设置或返回视频的 poster 属性的值。
document.getElementById("myAudio").preload;		//设置或返回视频的 preload 属性的值。
document.getElementById("myAudio").readyState;	//返回视频当前的就绪状态。
document.getElementById("myAudio").networkState	;//返回视频的当前网络状态。
document.getElementById("myAudio").mediaGroup;	//设置或返回视频所属媒介组合的名称。
-----------------------------------------------
document.getElementById("myAudio").volume;		//设置或返回视频的音量。
document.getElementById("myAudio").width;		//设置或返回视频的 width 属性的值。
--------------------------------------------------------------
document.getElementById("myAudio").addTextTrack();//向视频添加新的文本轨道。
document.getElementById("myAudio").canPlayType();//检查浏览器是否能够播放指定的视频类型。
document.getElementById("myAudio").load();		//重新加载视频元素。
document.getElementById("myAudio").play();		//开始播放视频。
document.getElementById("myAudio").pause();		//暂停当前播放的视频。

-------------canvas
--2d
-----------定义画笔样式------------------------------
context.fillStyle=color|gradient|pattern;			//设置或返回用于填充绘画的颜色、渐变或模式。
context.strokeStyle=color|gradient|pattern;			//设置或返回用于笔触的颜色、渐变或模式。
context.shadowColor=color;							// 属性设置或返回用于阴影的颜色。
													//注意：请将 shadowColor 属性与 shadowBlur属性一起使用，来创建阴影。
													//提示：请通过使用 shadowOffsetX和 shadowOffsetY 属性来调节阴影效果。
context.shadowOffsetX|shadowOffsetY; 				//属性设置或返回阴影与形状的水平距离或竖直。
													//shadowOffsetX=0|shadowOffsetY 指示阴影位于形状的正下方。
													//shadowOffsetX=20|shadowOffsetY 指示阴影位于形状 left 位置右侧的 20 像素处。
													//shadowOffsetX=-20|shadowOffsetY 指示阴影位于形状 left 位置左侧的 20 像素处。
context.shadowBlur=number;							//shadowBlur 属性设置或返回阴影的模糊级数。
--------定义画出的线样式
context.lineCap="butt|round|square";				//lineCap 属性设置或返回线条末端线帽的样式。
														//butt	默认。向线条的每个末端添加平直的边缘。
														//round	向线条的每个末端添加圆形线帽。
														//square	向线条的每个末端添加正方形线帽。
context.lineJoin="bevel|round|miter";				//lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。注意："miter" 值受miterLimit 属性的影响。
														//bevel	创建斜角。
														//round	创建圆角。
														//miter	默认。创建尖角。
context.lineWidth=number;							//lineWidth 属性设置或返回当前线条的宽度，以像素计。
context.miterLimit=number;							//miterLimit 属性设置或返回最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。超过将会变成方形
----------定义怎么画 的方法
context.fill(); 									//方法填充当前的图像（路径）。默认颜色是黑色。
context.stroke();									//绘制已定义的路径。
context.clip();										//裁剪已经绘制的路径
---------定义画的啥的方法
context.beginPath();								//beginPath() 方法开始一条路径，或重置当前的路径。
													//提示：请使用这些方法来创建路径 moveTo()、lineTo()、quadricCurveTo()、bezierCurveTo()、arcTo() 和 arc()。
context.moveTo(x,y);								//moveTo() 方法把路径移动到画布中的指定点，不创建线条。
context.closePath();								//closePath() 方法创建从当前点到开始点的路径。
context.lineTo(x,y);								//ineTo() 方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
													//提示：请使用 stroke() 方法在画布上绘制确切的路径。
context.quadraticCurveTo(cpx,cpy,x,y);				//quadraticCurveTo() 方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。寻要调用两次才能画一个曲线
													//开始点： moveTo(20,20)
													//控制点： quadraticCurveTo(20,100,200,20)
													//结束点： quadraticCurveTo(20,100,200,20)
context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);		//bezierCurveTo() 方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
													//开始点： moveTo(20,20)
													//控制点 1： bezierCurveTo(20,100,200,100,200,20)
													//控制点 2： bezierCurveTo(20,100,200,100,200,20)
													//结束点： bezierCurveTo(20,100,200,100,200,20)
context.arc(x,y,r,startAngle,endAngle,counterclockwise);	//画圆最后一个顺时针还是逆时针 													
context.arcTo(x1,y1,x2,y2,r);						//画弧  起点终点半径
context.isPointInPath(x,y);							//如果指定的点位于当前路径中，isPointInPath() 方法返回 true，否则返回 false。
context.rect(x,y,width,height);						//画矩形
context.fillRect(x,y,width,height);					//fillRect() 方法绘制"已填充"的矩形。默认的填充颜色是黑色。
context.strokeRect(x,y,width,height);				//strokeRect() 方法绘制矩形（无填充）。笔触的默认颜色是黑色。
context.clearRect(x,y,width,height);				//clearRect() 方法清空给定矩形内的指定像素。
-------转换
context.scale(scalewidth,scaleheight);				//scale() 方法缩放当前绘图至更大或更小。
													//注意：如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。
													//如果您 scale(2,2)，那么绘图将定位于距离画布左上角两倍远的位置。
context.rotate(angle);								//rotate() 方法旋转当前的绘图。
													//注意：旋转只会影响到旋转完成后的绘图。
context.translate(x,y);								//translate() 方法重新映射画布上的 (0,0) 位置。
													//注意：当您在 translate() 之后调用诸如 fillRect() 之类的方法时，值会添加到 x 和 y 坐标值上。
context.transform(a,b,c,d,e,f);						//换句话说，transform() 允许您缩放、旋转、移动并倾斜当前的环境。
													//注意：该变换只会影响 transform() 方法调用之后的绘图。
------文本  定义写法
context.font="italic small-caps bold 12px arial";	//font 属性设置或返回画布上文本内容的当前字体属性。
													//font 属性使用的语法与 CSS font 属性 相同。
context.textAlign="center|end|left|right|start";	//textAlign 属性根据锚点，设置或返回文本内容的当前对齐方式。
--表示定位的锚点											//通常，文本会从指定位置开始，不过，如果您设置为 textAlign="right" 并将文本放置到位置 150，那么会在位置 150 结束。
context.textBaseline="alphabetic|top|hanging|middle|ideographic|bottom";//textBaseline 属性设置或返回在绘制文本时的当前文本基线。
																		//下面的图示演示了 textBaseline 属性支持的各种基线：
------写字
--实心字
context.fillText(text,x,y,maxWidth);				//fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
													//提示：请使用 font 属性来定义字体和字号，并使用 fillStyle属性以另一种颜色/渐变来渲染文本。
--空心字
context.strokeText(text,x,y,maxWidth);				//strokeText() 方法在画布上绘制文本（无填充色）。文本的默认颜色是黑色。
													//提示：请使用 font 属性来定义字体和字号，并使用 strokeStyle属性以另一种颜色/渐变来渲染文本。
context.measureText(text).width;					//easureText()方法返回一个对象，该对象包含以像素计的指定字体宽度。
													//提示：如果您需要在文本向画布输出之前，就了解文本的宽度，那么请使用该方法。
--图像
context.drawImage(img[,sx,sy,swidth,sheight],x,y[,width,height]);			//方法在画布上绘制图像、画布或视频。
																			//drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸
--像素操作
imgData.width;																//属性返回 ImageData 对象的寬度，以像素计。
imgData.height;																//属性返回 ImageData 对象的高度，以像素计。
imgdata.data;																//返回像素信息  一個像素數組 每一位有四个属性 rgba
for (var i=0;i<imgData.data.length;i+=4){
	imgData.data[i+0]=255;
  	imgData.data[i+1]=0;
  	imgData.data[i+2]=0;
  	imgData.data[i+3]=255;
}
建图操作---

var imgData=context.createImageData(width,height);							//形成新尺寸的空 图像
var imgData=context.createImageData(imageData);								//赋值另一个图片的尺寸但是不进行
var imgData=ctx.createImageData(100,100);------------对新建的图像进行处理
for (var i=0;i<imgData.data.length;i+=4){
	imgData.data[i+0]=255;
  	imgData.data[i+1]=0;
  	imgData.data[i+2]=0;
  	imgData.data[i+3]=255;
}
context.getImageData(x,y,width,height);										//像素截取  起始位置  宽高
var imgData=ctx.getImageData(0,0,c.width,c.height);
// invert colors
for (var i=0;i<imgData.data.length;i+=4)
  {
  imgData.data[i]=255-imgData.data[i];
  imgData.data[i+1]=255-imgData.data[i+1];
  imgData.data[i+2]=255-imgData.data[i+2];
  imgData.data[i+3]=255;
  }
  
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);//放置图像  前三个属性有用
---------填充样式的方法
var a=context.createLinearGradient(x0,y0,x1,y1);							//创建线性渐变（用在画布内容上）。
var a=gradient.addColorStop(stop,color);									//规定渐变对象中的颜色和停止位置。
var a=context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");	//在指定的方向上重复指定的元素。
var a=context.createRadialGradient(x开始,y开始,r开始,x结束,y结束,r结束);			//创建放射状/环形的渐变（用在画布内容上）。

----绘图设置
context.globalAlpha=number;													//globalAlpha 属性设置或返回绘图的当前透明值（alpha 或 transparency）。
ontext.globalCompositeOperation="source-in";								//设置图像覆盖方法
