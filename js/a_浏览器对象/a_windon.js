---window属性--------------------------------------------

---对象集------------------------------------------------
window.document					//对 Document 对象的只读引用。(请参阅对象)

window.frames					//返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架。
								//rames 属性返回窗口中所有命名的框架。
								//该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架或 <iframe>。属性 frames.length
								//存放数组 frames[] 中含有的元素个数。注意，frames[] 数组中引用的框架可能还包括框架，它们自己也具有 frames[] 数组。
								//提示： 使用 frames.length 来获取框架的数量。
								
window.history					//对 History 对象的只读引用。请参数 History 对象。--浏览器历史几率对象暂时部进行研究
								--back()	` istory 列表中的前一个 URL
								---forward()	加载 history 列表中的下一个 URL
								----go()	加载 history 列表中的某个具体页面
window.location					//location用于窗口或框架的 Location 对象。请参阅 Location 对象。
window.navigator				//对 Navigator 对象的只读引用。请参数 Navigator 对象。---浏览器对象暂时不进行研究
window.screen					//对 Screen 对象的只读引用。请参数 Screen 对象。---客户端显示对象暂时不进行研究
---窗口信息参数-----------------------------------------------
window.name;					//name	设置或返回窗口的名称。
window.closed; 					//返回窗口是否已被关闭。
var a=window.innerHeight;		//返回窗口的文档显示区的高度。--就是白框框!!
var b=window.innerWidth;		//返回窗口的文档显示区的宽度。!!
window.outerHeight				//返回窗口的外部高度，包含工具条与滚动条。!!
window.outerWidth				//返回窗口的外部宽度，包含工具条与滚动条。!!
window.length;					//设置或返回窗口中的框架数量。
window.parent					//返回父窗口。
window.opener;                  //当使用window.open()打开一个窗口，您可以使用此属性返回来自目标窗口源（父）窗口的window对象
window.parent;					//返回当前框架的父窗口

-----window对象方法----------------------------
window.open();//打开新窗口
-blank _self
--提示框弹出-----
	---window.alert(String);					//弹出简单的提示框
	---window.confirm(String);					//弹出带确认件的提示框 返回boolean类型
	---window.prompt(String,[defaultText]);		//弹出可以输入数据的提示框 返回输入的数据  
--计时类-------
var a=window.setTimeout(timea,1000);			//设置延时操作 返回定时标记
var b=window.setInterval(timea,1000);			//设置定时重复操作 返回定时标记
window.clearInterval(b);//清除
window.clearTimeout(a);//清除定时器

window.setTimeout(function(o){
	console.log(o);
},100,{
	name:"123"
});//第三个参数将会自动的传入使用的回调函数中----使用的是 object类型
window.setInterval(function(a){
	console.log(a);
},1000,["hehe","66"]);//第三个参数将会自动的传入使用的回调函数中----使用的是array类型


//时间类函数
for(var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(new Date + i);
	}, 1000);
}

console.log(new Date + i);
//js的输出是5----5,5,5,5,5....   
//因为js是单线程的   setTimeout只是做了一件事就是 延迟1000毫秒再将里面的函数放入运行栈顶---注意此时js运行并没有阻塞,for循环会一直运行而不会在setTimeout中进行等待

//1.升级1  输出成为 5-->0,1,2,3,4;
//(1)使用闭包
for(var i = 0; i < 5; i++) {
	(function(i) {
		setTimeout(function() {
			console.log(new Date + i);
		}, 1000);
	})(i);

}
console.log(new Date + i);
//(2)将闭包变成函数
function hee (i){
	setTimeout(function() {
		console.log(new Date + i);
	}, 1000);
}
for(var i = 0; i < 5; i++) {
	hee(i);

}
console.log(new Date + i);
//(3)使用es6 let
for (let i = 0; i < 5; i++) {//js 会为每一个 最用域单独存放一个对象
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);
//(4)输出成  0,1,2,3,4,5;
for (let i = 0; i < 5; i++) {//js 会为每一个 最用域单独存放一个对象
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i*1000);

window.clearTimeout(a);							//清除事件延时
window.clearInterval(a);						//清楚定时重复操作
--窗口操作类----
window.open();									//打开窗口 √
window.close();									//关闭窗口 √
window.focus();									//将焦点赋给这个窗口
window.print();									//调用网页打印程序
window.scrollBy(xnum,ynum);						//文档向右向下滚动数 √
window.scrollTo(xpos,ypos);						//文档滚动到一个为值 √
window.parseInt();  //parseInt("10sss", 10); //returns 10 √  ---还可以使用number();直接进行转换
window.parseFloat(); 


//!!!----windows 取出需要的字符串
window.getComputedStyle(node,"伪类");//获得处于(文档树中的不在其中的不能取到)之中的属性对象 
window.getComputedStyle(element, null).getPropertyValue("float");//获得元素最终被加入的类型
element.style.xxx;//是获取在文件中能体现处理来 存在节点中的属性 没写出来的取不到
//---以上两个方法都是获取相应的字符串