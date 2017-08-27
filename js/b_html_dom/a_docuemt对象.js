----document是window对象下的一个子类----------
Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。
-------文档焦点对象------------------------------------------------
document.activeElement;						//获得当前页面已经获得焦点的元素
											//注意： 该属性是只读的。
											//提示： 为元素设置焦点，可以使用element.focus() 方法。
											//提示：可以使用document.hasFocus() 方法来查看当前元素是否获取焦点。
-------文档事件(添加了一个全局的事件)----------------------------------------------------
	---更多信息查看 elment属性 
		document.addEventListener("事件名称",function(){
			return 1;	
		},false);//dom2级添加事件  ---最后一个参数   true - 事件句柄在捕获阶段执行false- false- 默认。事件句柄在冒泡阶段执行
		document.removeEventListener("事件名","方法引用",true);
------dom数据------------------------
		document.open(MIMEtype,replace);			//调用 open() 方法打开一个新文档并且用 write() 方法设置文档内容后，
													//必须记住用 document.close() 方法关闭文档，并迫使其内容显示出来。
													//MIMEtype	可选。规定正在写的文档的类型。默认值是 "text/html"。
													//replace	可选。当此参数设置后，可引起新文档从父文档继承历史条目。
		document.close();							//关闭用 document.open() 方法打开的输出流，并显示选定的数据。



-------dom参数----------------------------------------------
		document.baseURI;                           //返回文档的绝对URL地址
		document.documentElement;					//返回文档的根节点
		var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;//兼容性获得element的根节点
		document.documentURI;						//返回文档的本地地址
		document.domain;							//返回当前服务器的域名
		document.inputEncoding;						//返回用于文档的编码方式（在解析时）。
		document.lastModified;						//返回文档被最后修改的日期和时间。
		document.readyState;						//返回文档状态 (载入中……)
		document.referrer;							//referrer 属性返回载入当前文档的来源文档的URL。
		document.title;								//返回当前文档的标题。
		document.URL;								//返回文档完整的URL
		document.write();							//向文档写 HTML 表达式 或 JavaScript 代码。
		document.writeln();							//等同于 write() 方法，不同的是在每个表达式之后写一个换行符。

------dom 集合对象返回-------------------------------
		document.anchors;							//返回对文档中所有 Anchor 对象的引用。
		document.cookie;							//设置或返回与当前文档有关的所有 cookie。
		document.forms;								//返回对文档中所有 Form 对象引用。
		document.images;							//返回对文档中所有 Image 对象引用。
		document.links;								//返回对文档中所有 Area 和 Link 对象引用。

-----dom节点-----------------------------------
	--------节点创建
		document.createComment(text);				//创建一个注释文档节点
		document.createDocumentFragment();  //这个方法不会穿凿节点而是穿凿一个节点容器        //创建一个空节点 并且返回对象的引用createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法。
				//类似createElement但是想这个添加东西的时候不会精进行额外的渲染		//当你想提取文档的一部分，改变，增加，或删除某些内容及插入到文档末尾可以使用createDocumentFragment() 方法。
------------------------样例														//你也可以使用文档的文档对象来执行这些变化，但要防止文件结构被破坏，createDocumentFragment() 方法可以更安全改变文档的结构及节点。
//先创建文档碎片
var oFragmeng = document.createDocumentFragment(); 
for(var i=0;i<10000;i++){ 
    var op = document.createElement("span"); 
    var oText = document.createTextNode(i); 
   op.appendChild(oText); 
    //先附加在文档碎片中
    oFragmeng.appendChild(op);  
} 
//最后一次性添加到document中
document.body.appendChild(oFragmeng); 
---------
		document.createElement(nodename);			//创建一个元素节点  element 元素节点
		document.createTextNode(text);				//创建一个文本节点元素
	--------节点属性
		//document.doctype;							//返回 HTML 文档的文档类型对象:
		document.createAttribute(attributename);  	//var att=document.createAttribute("class");--创建属性
										  	//att.value="democlass";---属性赋值
	--------查找element节点   返回值为nodelist 或者一个node-----
		document. getElementsByClassName(classname);//返回文档中所有指定类名的元素集合，作为 NodeList 对象。
		document.getElementById(elementid);			//返回对拥有指定 id 的第一个对象的引用。
		//document.getElementsByName(name);			//返回带有指定名称的对象集合。 html5取消了
		document.getElementsByTagName(tagname);		//返回和元素标签名字相同的集合
		document.querySelector();					//返回文档中匹配指定的CSS选择器的第一元素
		document.querySelectorAll();				//是 HTML5中引入的新方法，返回文档中匹配的CSS选择器的所有元素节点列表
	-------复制节点------
		√ document.cloneNode(deep);				//复制节点  true 表示递归进行复制
	-------节点合并----
		√  node.normalize();  							//合并相邻的文本节点并删除空的文本节点。
      
	------其他----
		document.documentElement;					//返回文档的根节点
		document.documentURI;						//返回文档的本地地址
		ddocument.domain;							//返回当前服务器的域名
		
	----页面相关
document.documentElement.clientHeight ==> 0 
document.documentElement.clientHeight ==> 0 
document.documentElement.clientWidth ==> 页面对象宽度（即BODY对象宽度加上Margin宽) 
document.documentElement.clientHeight ==> 页面对象高度（即BODY对象高度加上Margin高） 
//这两个属性计算可视区域的大小相对的 不计算边框之外的大小
网页可见区域宽： document.body.clientWidth 
网页可见区域高： document.body.clientHeight 
//这两个属性计算边框的位置 ----
网页可见区域宽： document.body.offsetWidth   父元素(包括边线的宽) 
网页可见区域高： document.body.offsetHeight 父元素(包括边线的高) 
//前两个属性是使用滚动属性的真实高度
网页正文全文宽： document.body.scrollWidth  --- 子元素的总高度当子元素不能滚动的时候取值为容器的可读区的高度
网页正文全文高： document.body.scrollHeight 
//这两个属性使用的相对高度---滚动过的距离
网页被卷去的高： document.body.scrollTop  ---就是子元素页面别卷上去的高度
网页被卷去的左： document.body.scrollLeft  ---子元素

网页正文部分上： window.screenTop 
网页正文部分左： window.screenLeft 
屏幕分辨率的高： window.screen.height 
屏幕分辨率的宽： window.screen.width 
屏幕可用工作区高度： window.screen.availHeight 
屏幕可用工作区宽度： window.screen.availWidth 

//下面四个属性查找夫元素的的定位属性 --- 类似就是absolece 属性的相关属性
offsetHeight:获取对象相对于版面或由父坐标  offsetParent 属性指定的父坐标的高度 
offsetWidth:
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
//!!!!重点---offset 会计算位移属性的距离 margin left等  transation!!!不会让元素脱离文档流只是改变渲染效果
document.getBoundingClientRect();
//打印出bottom left top right width height 返回盒模型详细信息

//-----event对象发生事件后将会传入的值
event.clientX 相对文档的水平座标
event.clientY 相对文档的垂直座标 
event.pageX=event.clientX+滚动距离
event.offsetX 相对容器的水平坐标 
event.offsetY 相对容器的垂直坐标 
document.documentElement.scrollTop 垂直方向滚动的值 ---对应html标签
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量 


//document 事件
document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
document.readyState="";
function subSomething() 
{ 
 if(document.readyState == "complete"){ //当页面加载状态为完全结束时进入 
              //你要做的操作。
    }
}
	readyState 属性返回当前文档的状态（载入中……）。
	该属性返回以下值:
	uninitialized - XML 对象被产生，但没有任何文件被加载。 
	loading -加载程序进行中，但文件尚未开始解析。 
	loaded-部分的文件已经加载且进行解析，但对象模型尚未生效。 
	interactive - 仅对已加载的部分文件有效，在此情况下，对象模型是有效但只读的。 
	complete - 文件已完全加载，代表加载成功。 
说明 ：onreadystatechange 事件能辨识readyState 属性的改变。

//监听js加载完成
function include_js(file) {
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', file);
    _doc.appendChild(js);
    if (!/*@cc_on!@*/0) { //if not IE
        //Firefox2、Firefox3、Safari3.1+、Opera9.6+ support js.onload
        js.onload = function () {
            alert('Firefox2、Firefox3、Safari3.1+、Opera9.6+ support js.onload');
        }
    } else {
        //IE6、IE7 support js.onreadystatechange
        js.onreadystatechange = function () {
            if (js.readyState == 'loaded' || js.readyState == 'complete') {
                alert('IE6、IE7 support js.onreadystatechange');
            }
        }
    }
    return false;
}

//引申
<body>, <frame>, <frameset>, <iframe>, <img>, <link>, <script> 都存在onload---设置设置属性的加载