------ajax------------------------

--1.创建--
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
--发送服务请求--
	-创建链接配置-注意请求可能是换存的结果 所以xmlhttp.open("GET","demo_get.html?t=" + Math.random(),true);形成随机数字
		open(method,url,async);
		//method：请求的类型；GET 或 POST ;url：文件在服务器上的位置 ;async：true（异步）或 false（同步）
	-发送请求-
		send(string);	//将请求发送到服务器。;string：仅用于 POST 请求-
		//如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
			xmlhttp.open("POST","ajax_test.html",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("fname=Henry&lname=Ford");
				(setRequestHeader(header,value)	向请求添加 HTTP 头。header: 规定头的名称 value: 规定头的值)
--接受响应--
	xmlhttp.onreadystatechange=function(){  -----每当 readyState 改变时，就会触发 onreadystatechange 事件。
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    	}
  	}
	--onreadystatechange	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
				readyState	
						存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
							0: 请求未初始化
							1: 服务器连接已建立
							2: 请求已接收
							3: 请求处理中
							4: 请求已完成，且响应已就绪
					status	200: "OK"
							404: 未找到页面
	获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
		-responseText-
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		-responseXML-
			xmlDoc=xmlhttp.responseXML;
			------然后解析
			

--------ajax 前端集成回调写法----------------------

var xmlhttp;

function loadXMLDoc(url, cfunc) {
	if(window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari 代码
		xmlhttp = new XMLHttpRequest();
	} else { // IE6, IE5 代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
-------js 的事件将会触发这个方法   回调的执行ajax的相关方法
function myFunction() {
	loadXMLDoc("/statics/demosource/ajax_info.txt", function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	});
}



------php返回ajax--------------------------------------------------------------------------------------------
 $q=$_GET["q"];
if ($hint == ""){
	$response="no suggestion";
}
 else{
	$response=$hint;
}

//output the response
echo $response;