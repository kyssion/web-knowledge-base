var a="   23234";
var b=new String("233333333");
a.length;//字符数量
-----------string 参数---------------------------------
constructor	 //对创建该对象的函数的引用
length		//字符串的长度
prototype	//允许您向对象添加属性和方法

------------字符字符串提取函数-----------------------------------------------------
--获取指定位置上的字符 string.charAt(index)
		var c =a.charAt(4);//打印指定位置上的字符

--字符串定长提取 string.slice(start,[end])-包含结束符---数组方法
		-如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
		var n=str.slice(1,4);

--用于提取字符串中介于两个指定下标之间的字符。 string.substring(from, to)
		--方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。

*--字符串索引提取 string.substr(start,[length])
		--如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。

--字符串分割 string.split(【separator],[limit])--分割符  限制数组的长度

--获取指定位置上字符串的编码 string.charCodeAt(index)
		var c = a.charCodeAt(4);//返回指定位置上的字符编码

------------字符字符串链接函数-----------------------------------------------------------------
		--连接两个或多个字符串。string.concat(string1[, string2, ..., stringX])
		var c =a.concat(b);//字符串合并

------------字符串检索函数------------------------------------
--返回某个指定的字符串值在字符串中首次出现的位置。 string.indexOf(searchvalue[,start])
		a.indexOf();
--方法可返回一个指定的字符串值最后出现的位置            string.lastIndexOf(searchvalue,start)
		a.lastIndexOf();
--字符串内检索指定的值，或找到一个或多个正则表达式的匹配。 string.match(regexp)
		var n=str.match(/ain/g);   ---返回一个匹配成功的字符串数组
--于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。 string.replace(searchvalue,newvalue)
		var n=str.replace("Microsoft","W3CSchool");
--检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。 string.search(searchvalue)
		var n=str.search("W3CSchool");

------------字符编码转换函数------------------------------------------------------
--将自字符串 un编码转化为字符 String.fromCharCode(n1, n2, ..., nX)
		var a= String.fromCharCode(72,69,76,76,79);---不能传入数组,想传入数组要进行自定义函数
--string.toLowerCase()	把字符串转换为小写。
--string.toUpperCase()	把字符串转换为大写。


------------------HTML包装方法------------------------------------------------
--anchor() 方法用于创建 HTML 锚。 该方法返回加了 <a> 标签的字符串 string.anchor(name)
		var txt = "Chapter 10";
		txt.anchor("chap10");
--字符串其他处理
		document.write("<p>字体变大: " + txt.big() + "</p>");
		document.write("<p>字体缩小: " + txt.small() + "</p>");
		document.write("<p>字体加粗: " + txt.bold() + "</p>");
		document.write("<p>斜体: " + txt.italics() + "</p>");
		document.write("<p>固定定位: " + txt.fixed() + "</p>");
		document.write("<p>加删除线: " + txt.strike() + "</p>");
		document.write("<p>字体颜色: " + txt.fontcolor("green") + "</p>");
		document.write("<p>字体大小: " + txt.fontsize(6) + "</p>");
		document.write("<p>下标: " + txt.sub() + "</p>");
		document.write("<p>上标: " + txt.sup() + "</p>");
		document.write("<p>链接: " + txt.link("http://www.w3cschool.cc") + "</p>");
		document.write("<p>闪动文本: " + txt.blink() + " (不能用于IE,Chrome,或者Safari)</p>");
		

window.parseInt();  //parseInt("10sss", 10); //returns 10
window.parseFloat();