-----------------event-----------------------------------
------------事件声明-  第一个参数就是event  arguments[0]--------------------------
	----DOM0级------
		document.getElementById("test").onclick = function(e){};
		document.getElementById("test").onclick = 函数引用;!!!!!
		document.getElementById("test")["onmousemove"] = function(e){
			e=e||window.event;
		};
		document.getElementById("test").onclick= null;  //解除绑定   this运算符会指向调用他的节点也就是出发event的节点
		<div id="test" class="test" onclick="exec();" ></div>----DOM0级可以在html文档中进行声明
		使用dom0级的方法  ----高级应用 --select标签比较特殊传入的是selectHtmlelement 使用的内部属性
		<select name="customers" onchange="showCustomer(this.value)" style="font-family:Verdana, Arial, Helvetica, sans-serif;">
			<option value="APPLE">Apple Computer, Inc.</option>
			<option value="BAIDU ">BAIDU, Inc</option>
			<option value="Canon">Canon USA, Inc.</option>
			<option value="Google">Google, Inc.</option>
			<option value="Nokia">Nokia Corporation</option>
			<option value="SONY">Sony Corporation of America</option>
		</select>
	----DOM2级------
		DOM2支持同一dom元素注册多个同种事件。  -- 先捕获后冒泡 无法区别按照注册的顺序 
		DOM2新增了捕获和冒泡的概念。
		element.addEventListener(event, function,[ useCapture]);	//添加dom事件 函数引用
																	//event	必须。字符串，指定事件名。 function	必须。指定要事件触发时执行的函数。useCapture	可选。布尔值，指定事件是否在捕获阶段执行。 
		element.removeEventListener(event, function, useCapture);	//dom移除事件
																	//event	必须。要移除的事件名称。function	必须。指定要移除的函数。useCapture	可选。布尔值，指定移除事件句柄的阶段。

--------事件类型----------------------------------------------
	-----鼠标事件-----------------------
	document.getElementById().onmousemove=function(e){};		//鼠标移动的时候触发
	document.getElementById().onmouseenter=function(e){};		//移动到元素上触发
	document.getElementById().onmouseleave=function(e){};		//移出元素触发  以上两个事件不帽泡
	document.getElementById().onmousedown=function(e){};		//按下鼠标触发	
	document.getElementById().onmouseup=function(e){};			//松开鼠标触发
	document.getElementById().onclick=function(e){};			//等同于上面两个过成的和
	document.getElementById().oncontextmenu=function(e){};		//右键展开下拉菜单的事件
	document.getElementById().onmousewheel=function(e){};			//该事件在鼠标滚轮在元素上下滚动时触发
									有一个属性  wheeldalta表示转动 -120 和120
	document.getElementById().onmouseover=function(e){};		//移动到某元素  
	document.getElementById().onmouseout=function(e){};			//从元素移开 		新属性 relatedtager 关联元素
	这两个属性多了一个relatedTarget						
	在mouseover事件中，它表示鼠标来自哪个元素				
　　	在mouseout事件中，它指向鼠标去往的那个元素 			
	-----键盘事件  以顺序---------------------			
	document.getElementById().onkeydown=function(e){};			//按下 文字没写入
	document.getElementById().onkeypress=function(e){};			//按下并且没有松开手 文字写入
	document.getElementById().onkeyup=function(e){};			//按下 并松开手
	不支持的属性											
	 onkeypress 属性不能使用与以下元素: <base>, <bdo>, <br>, <head>, <html>, <iframe>, <meta>, <param>, <script>, <style>, 或<title>。
	event.charCode---只有在onkeypress中才能使用的方法返回char类型的ascll值
	event.keyCode;//按下建的ascll编码
	event.shiftKey-----ctrl alt meta--对应的键
	-----window 或者   框架对象--------------------------
	document.getElementById().onerror=function(e){} ;			//在加载文档(<object>,<body>和 <frameset>)或图像(媒体类)时发生错误.
	document.getElementById().onload=function(e){} ;			//一张页面(<object>,<body>和 <frameset>)或一幅图像(媒体类)完成加载。
	document.getElementById().onpageshow=function(e){} ; 		//事件类似于 onload 事件，onload 事件在页面第一次加载时触发，onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。
	document.getElementById().onbeforeunload=function(e){} ;	//该事件在即将离开页面（刷新或关闭）时触发
	document.getElementById().onscroll=fucntion(e){} ; 			//文档再发生滚动的时候触发的事件---相当于我曾经写的自定义滚轮事件
	window.onresize();											//当文件窗口发生改变的时候触发的事件
	
	-----表单事件------------------------------------
	document.getElementById().onblur=function(e){};				//元素失去焦点的时候触发
	document.getElementById().onchange=function(e){};			//元素内容改变时候触发 onchange 事件会在域的内容改变时发生。注意并且要移出焦点
																//onchange 事件也可用于单选框与复选框改变后触发的事件。
																//支持的标签<input type="text">, <select>, <textarea>
	document.getElementById().onfocusin=function(e){};			//元素即将获得焦点的时候触发
	document.getElementById().onfocus=function(e){};//元素获得焦点的时候触发 --注意焦点属性必须能获得焦点当获得不了焦点的时候需要使用tableindex属性进行设置
	document.getElementById().onfocusout=function(e){};			//元素即将失去焦点的时候触发
	document.getElementById().oninput=function(e){};			//元素获取用户输入的时候触发  效果同onchange
																//	<input type="password">, <input type="search">, <input type="text"> 和 <textarea>
	document.getElementById().onreset=function(e){};			//表单重置的时候触发
	document.getElementById().onselect=function(e){};			//onsearch 事件在用户按下"ENTER（回车）" 
																//当文本被选中的时候触发
	document.getElementById().onsubmit=function(e){};			//用户提交表单的时候触发
	-----剪切板事件------------------------------------
	document.getElementById().oncopy=function(e){};   			//用户copy元素时触发
	document.getElementById().oncut=function(e){};				//用户裁剪元素时 触发
	document.getElementById().onpaste=function(e){};			//用户黏贴元素是触发
	-----拖动事件   详情见html文档--------------------------------------
	document.getElementById().ondragstart=function(e){};		//该事件在用户开始拖动元素时触发	
	document.getElementById().ondrag=function(e){};				//该事件在元素正在拖动时触发
	document.getElementById().ondragleave=function(e){};		//该事件在拖动元素离开放置目标时触发
	document.getElementById().ondragover=function(e){};			//该事件在拖动元素在放置目标上时触发
	document.getElementById().ondragenter=function(e){};		//该事件在拖动的元素进入放置目标时触发	
	document.getElementById().ondrop=function(e){};				//该事件在拖动元素放置在目标区域时触发
	document.getElementById().ondragend=function(e){};			//该事件在用户完成元素的拖动时触发
	
	-----多媒体事件------------------------------------------------
	//视屏播放过程中--触发
	document.getElementById().onloadstart=function(e){};		//事件在浏览器开始寻找指定视频/音频（audio/video）触发。	
	document.getElementById().ondurationchange=function(e){};	//事件在视频/音频（audio/video）的时长发生变化时触发。
			ondurationchange 事件在视频/音频（audio/video）的时长发生变化时触发。---不是播放事件变化而是总得播放时间从NaN变到正常时触发
				注意： 当视频/音频（audio/video）已经加载后，视频/音频（audio/video）的时长从 "NaN" 修改为正在的时长。
				在视频/音频（audio/video）加载过程中，事件的触发顺序如下:
			onloadstart-ondurationchange-onloadedmetadata-onloadeddata-onprogress-oncanplay-oncanplaythrough
	document.getElementById().onloadedmetadata=function(e){};	//事件在指定视频/音频（audio/video）的元数据加载后触发。	
	document.getElementById().onloadeddata=function(e){};		//事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。	
	document.getElementById().onprogress=function(e){};			//事件在浏览器下载指定的视频/音频（audio/video）时触发。	
	document.getElementById().oncanplay=function(e){};			//事件在用户可以开始播放视频/音频（audio/video）
	document.getElementById().oncanplaythrough=function(e){};	//事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。
	
	document.getElementById().onplay=function(e){};				//事件在视频/音频（audio/video）开始播放时触发。	
	document.getElementById().onpause=function(e){};			//事件在视频/音频（audio/video）暂停时触发。	 
	document.getElementById().onplaying=function(e){};			//事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。
	
	document.getElementById().onended=function(e){};			//事件在视频/音频（audio/video）播放结束时触发。onended 事件在视频/音频（audio/video）播放结束时触发。该事件通常用于送类似"感谢观看"之类的消息。
	//---- 影响多媒体加载的事件有:
	document.getElementById().onabort=function(e){};			//事件在视频/音频（audio/video）终止加载时触发。
	document.getElementById().onemptied=function(e){};			//当期播放列表为空时触发	 
	document.getElementById().onerror=function(e){};			//事件在视频/音频（audio/video）数据加载期间发生错误时触发。
	document.getElementById().onstalled=function(e){};			//事件在浏览器获取媒体数据，但媒体数据不可用时触发。	 
	document.getElementById().onsuspend=function(e){};			//事件在浏览器读取媒体数据中止时触发。	
	//播放过程中状态改变时触发
	document.getElementById().onratechange=function(e){};		//事件在视频/音频（audio/video）的播放速度发送改变时触发。	 
	document.getElementById().onseeked=function(e){};			//事件在用户重新定位视频/音频（audio/video）的播放位置后触发。	 
	document.getElementById().onseeking=function(e){};			//事件在用户开始重新定位视频/音频（audio/video）时触发。	 
	document.getElementById().ontimeupdate=function(e){};		//事件在当前的播放位置发送改变时触发。事件发生改变的时候	 
	document.getElementById().onvolumechange=function(e){};		//事件在音量发生改变时触发。	 
	document.getElementById().onwaiting=function(e){};			//事件在视频由于要播放下一帧而需要缓冲时触发。
	
	//!!!!!想要真正的对对象进行相关的操作需要使用video/audio相关的对象--- f_js对象
	
	
	------动画事件---------------------------------------------------
	document.getElementById().animationstart=function(e){};		//该事件在 CSS 动画开始播放时触发
	document.getElementById().animationiteration=function(e){};	//该事件在 CSS 动画重复播放时触发	 
	document.getElementById().animationend=function(e){};		//该事件在 CSS 动画结束播放时触发
	------其他属性---------------------------------------------------
	document.getElementById().onmessage=function(e){};			//该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发

	-----文本事件--------
	

-----event对象属性--------
	-------静态变量------------------
		CAPTURING-PHASE								//当前事件阶段为捕获阶段(3)
		AT-TARGET									//当前事件是目标阶段,在评估目标事件(1)
		BUBBLING-PHASE								//当前的事件为冒泡阶段 (2)
	------一些属性-------------------------
		event.bubbles;								//事件是否是冒泡事件类型 true false
		event.cancelable;							//cancelable 事件返回一个布尔值。
													//如果用 preventDefault() 方法可以取消与事件关联的默认动作，则为 true，否则为 fasle。
		event.relatedTarget;						//对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
													对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。
		event.currentTarget; 相当于this				//currentTarget 事件属性返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口。
		event.target;     							//target 事件属性可返回事件的目标节点（触发该事件的节点）
		event.type;									//事件的类型  去掉on
	----------------------------------------
		event.altKey(shiftkey,ctrlkey,metakey);		//接收事件发生时 按键是否按下 true false
		event.button;								//监听当事件触发的时候那个鼠标按钮被点击 0左 1中 2右
		event.location;								//---------------=键盘按键的为值 0标准按键1左ctrl 2右ctrl 3 小键盘
		event.clientX(clientY);						//鼠标在窗口中的位置
		event.screenX(screeny);						//鼠标在在整个屏幕中的位置
		event.keyCode;event.charCode;event.which; 	//返回键值的uncidoc码	
	------event事件方法---------------------------------------

		event.initEvent();//初始化创建event对象的属性
		event.preventDefault();//取消事件的默认动作
		event.stopPropagation();//不再进行事件冒泡
		

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——相对当前坐标系的border左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

//html5 拖动 