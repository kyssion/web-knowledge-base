document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.ie是官方支持的
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