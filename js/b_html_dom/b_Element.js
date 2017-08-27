---element文档对象-----------------------------------
!!!!!!Element 对象代表 XML 文档中的一个元素。元素可以包含属性、其他元素或文本。如果一个元素包含文本，则在文本节点中表示该文本。
----节点属性集合---------------------------------------------
element.attributes;									//返回一个元素的属性数组 	返回值NamedNodeMap 对象, 表示属性的集合。--可以使用这些方法进行访问-[0],['name'],item();
element.childNodes;									//返回元素的一个子节点的数组nodelist--包括文字节点和元素节点
element.children;									//返回元素的所有子孩子
element.classlist;									//返回元素的类名，作为 DOMTokenList 对象。---间后面
element.className;									//设置或返回元素的class属性  
element.id=id;										//设置文档节点
element.innerHTML=text;								//	设置或者返回元素的内容。
element.tagName;									//作为一个字符串返回某个元素的标记名（大写）
element.nodeName;									//--js中名称都是大写的
element.textContent;								//设置或返回一个节点和它的文本内容 同 nodevalue
element.nodeName;									//返回元素的标记名（大写）
element.nodeType;									//如果节点是一个元素节点，nodeType 属性返回 1。如果节点是属性节点, nodeType 属性返回 2。
element.nodeValue;									//返回元素的类型--text节点将返回内容 同 textContext
1、value / innerHTML / innerText / textContent
	value 是带有value属性的标签拥有的值，一般是单闭合标签的属性(可赋值，也可获取)
	innerHTML 是双闭合标签两个标签之间的内容（识别标签）(可赋值，也可获取)
	innerText 是双闭合标签两个标签之间的内容（不识别标签）(可赋值，也可获取)(老版本的火狐不支持)
	textContent 与innerText属性类似，老版本的火狐支持该属性(可赋值，也可获取)(IE678不支持)
2、nodeType / nodeName / nodeValue
	(1)nodeName 属性含有某个节点的名称。
		* 元素节点的 nodeName 是标签名称
		* 属性节点的 nodeName 是属性名称
		* 文本节点的 nodeName 永远是 #text
		* 文档节点的 nodeName 永远是 #document
		注释：nodeName 所包含的 XML 元素的标签名称永远是大写的.
	(2)nodeValue
		* 对于文本节点，nodeValue 属性包含文本。
		* 对于属性节点，nodeValue 属性包含属性值。
		* nodeValue 属性对于文档节点和元素节点是不可用的。
	(3)nodeType
		* nodeType 属性可返回节点的类型。
		* 最重要的节点类型是：
		* 元素类型 节点类型
		* 元素element 1
		* 属性attr 2
		* 文本text 3
		* 注释comments 8
		* 文档document 9
	-----所有节点属性-----
1	Element			代表元素				Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
2	Attr			代表属性				Text, EntityReference
3	Text	代表元素或属性中的文本内容。	None
4	CDATASection	代表文档中的 CDATA 部分（不会由解析器解析的文本）。	None
5	EntityReference	代表实体引用。	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
6	Entity			代表实体。	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
7	ProcessingInstruction	代表处理指令。	None
8	Comment			代表注释。	None
9	Document		代表整个文档（DOM 树的根节点）。	Element, ProcessingInstruction, Comment, DocumentType
10	DocumentType	向为文档定义的实体提供接口	None
11	DocumentFragment	代表轻量级的 Document 对象，能够容纳文档的某个部分	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
12	Notation		代表 DTD 中声明的符号。	None		
---------使用nodename  和   nodevalue返回值-----
1	Element		元素名		null
2	Attr		属性名称		属性值
3	Text		#text		节点的内容
4	CDATASection	#cdata-section	节点的内容
5	EntityReference	实体引用名称	null
6	Entity	实体名称	null
7	ProcessingInstruction	target	节点的内容
8	Comment	#comment	注释文本
9	Document	#document	null
10	DocumentType	文档类型名称	null
11	DocumentFragment	#document 片段	null
12	Notation	符号名称	null
		
		
		
3、获取任意类型的CSS样式的属性值
[javascript] view plain copy print?
div.style.width; //只能获取行内样式  
div.currentStyle.width; //旧版本IE浏览器中  
window.getComputedStyle(div,null).width; //所有属性都可以获取  


----快捷键----------------------------------------------
document.accessKey="code";            					//accessKey 属性可设置或返回访问单选按钮的快捷键。 指定快捷键之后相关的属性就变成了alt加快捷键快速访问 将制定的节点进行激活和点击并且获得焦点

------DOM2级事件--------------------------------------------
element.addEventListener(event, function,[ useCapture]);	//添加dom事件
															//event	必须。字符串，指定事件名。 function	必须。指定要事件触发时执行的函数。useCapture	可选。布尔值，指定事件是否在捕获或冒泡阶段执行。 
element.removeEventListener(event, function, useCapture);	//dom移除事件
															//event	必须。要移除的事件名称。function	必须。指定要移除的函数。useCapture	可选。布尔值，指定移除事件句柄的阶段。
------节点--------------------------------------------
	-----元素节点-------------------------------------------------
		father.appendChild(node);								//在所有子元素的后面添加节点
		father.insertBefore(newnode,existingnode);				//父元素在existingnode子节点前加入newnode节点   --如果新插入的节点是在dom树中的时候将会自动的更新相关的属性
		//---这几个属性是只读属性
		element.firstChild;										//firstChild 属性返回被选节点的第一个子节点。   --- 同样
		element.lastChild;										//返回的最后一个子元素
		element.nextSibling;									//返回该元素紧跟的一个元素
		element.parentNode;										//返回元素的父节点
		element.previousSibling;(node)								//返回某个元素紧接之前元素
		element.previousElementSibling()                        //返回之前的element节点
		element.getElementsByTagName(tagname);					//获得子元素中所有指定标签的属性--nodelist
		element.getElementsByClassName(classname);				//nodelist---属性 [''] item length ---最大的特点时效性
		element.querySelector(CSSselector);						//返回匹配指定 CSS 选择器元素的第一个子元素节点列表
		element.querySelectorAll(CSSselector);					//返回匹配指定 CSS 选择器元素的所有子元素节点列表
		element.hasChildNodes();								//检查节点是否含有孩子节点
		element.normalize();									//方法合并相邻的文本节点并删除空的文本节点。
		element.removeChild(node);								//removeChild() 方法可从子节点列表中删除某个节点。
		element.replaceChild(newnode,oldnode);					//插入newnode 移除oldnode   替换一个子元素
		element.childNodes;     //返回所有的可显示的节点,包括文档节点
		element.children;// 获得所有子元素节点----不同于childNodes--返回所有的元素节点包括文字节点
		注意--这个属性 是所有的node 如果想要使用element需要使用element属性
	-----节点完全拷贝
		element.cloneNode(boolean);								//cloneNode() 方法可创建指定的节点的精确拷贝。
																//cloneNode() 方法 拷贝所有属性和值。 deep是否进行递归调用
	-----节点属性
		//只能获取能在html显示出来的属性节点---如果只是使用属性而并不需要加入到html中进行渲染 那么只要使用 dom+属性就行
		document.xxx=yyy;//给dom添加属性但是不在html中渲染
		element.attributes;//返回节点中attributeMap
		//获取能取出来 在元素身上的属性
		element.getAttribute(attributename);				//获得节点中attributename属性的值
		element.getAttributeNode(attributename);			//获得指定的属性节点
		element.removeAttribute(attributename);				//移除节点中attributename属性的值
		element.removeAttributeNode(attributenode);			//removeAttributeNode() 方法从元素中删除指定的属性节点
		element.setAttribute(attributename,attributevalue);	//setAttribute() 方法创建或改变某个新属性。     如果指定属性已经存在,则只设置该值。
		element.setAttributeNode(attributenode);			//添加一个node节点
					var atr=document.createAttribute("class");
							atr.nodeValue="democlass";//注意odevalue的特点
									document.getElementsByTagName("H1")[0].setAttributeNode(atr);
		element.hasAttribute(attributename);				//检查节点是否含有这个属性
		element.hasAttributes();							//hasAttributes() 方法如果某节点有任何属性时返回 true，否则返回 false。
--------其他------------------------------------------
		element.compareDocumentPosition();					//比较两个元素的文档位置。
		element.contentEditable;							//设置或返回元素的内容是否可编辑
		element.isContentEditable;							//如果元素内容可编辑返回 true，否则返回false
		element.dir=text-direction;  						//dir 属性设置或返回元素的文字方向。 rtl ltr
		√element.focus();									//设置文档或元素获取焦点
		√document.hasFocus(); 								//用于检测文档或元素是否获取焦点
		√document.isDefaultNamespace(namespaceURI);			//如果指定的命名空间是默认的 ，isDefaultNamespace() 方法返回 true，否则返回 false。
		√element.isEqualNode(node);							//	检查两个元素是否相等
																* 有相同节点类型
																* 相同的节点名，节点值，本地名，命名空间URI和前缀。
																* 他们与所有的后代都有相同的子节点
																* 有相同的属性和属性值(属性没有相同的排序方式)
		element.isSameNode(node);							//SameNode() 方法可在某个节点与给定的节点是同一个节点时返回 true，否则返回 false。
		//Firefox 在第10版本后已经不再支持 isSameNode 方法，因为该方法在 DOM 4后已经废弃该方法，你可以使用 === 来比较两个元素。
		element.lang;											* 设置或者返回一个元素的语言。
		element.src-----可以直接访问相关的属性

		