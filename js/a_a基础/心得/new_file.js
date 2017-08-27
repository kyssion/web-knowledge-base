----为了防止重复点击造成计时器重叠 需要手动的清除计数器
function startMove() {
	clearInterval(iTimer); //运动前清除定时器
	iTimer = setInterval(function() {
		if(oDiv.offsetLeft == 500) {
			clearInterval(iTimer); //满足条件清除定时器
		} else {
			oDiv.style.left = oDiv.offsetLeft + 10 + 'px'; //每次向前移动
		}

	}, 30);
}
-----有一些元素不能直接用过 node.style.xxx 获取需要使用这个方法
parseInt(window.getComputedStyle(myMinImg, null).width, 10);---只读属性 获得这个属性上祖宗十八代的属性
-----getElemnetbyclassname和getComputedStyle的兼容性写法
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
function getClassName(abc) {
	if(!document.getElementsByClassName) {
		var list = document.getElementsByTagName('*');
		var arr = [];
		for(var i = 0; i < list.length; i++) {
			if(list[i].className == abc) {
				//在浏览器版本不支持该方法时使用className属性
				arr.push(list[i]);
			}
		}
		return arr;
	} else {
		return document.getElementsByClassName(abc);
	}
}

---e.stopPropagation();阻止事件冒泡

---js动画的时间函数setintervl h和 setTimeout相对于处理器来说是异步的所以需要如果要使用顺顺序的变化要使用牵头
---


---在使用offset进行定位的时候注意参考的父元素是offsetparent---被定位的父元素   根节点没有offsetleft等属性
--获得任意节点相对于整个浏览器的节点位置
function getXY(node,donghuafrom){
	var x=0;
	var y=0;
	while(node){
		if (node.offsetLeft==undefined){
			break;
		}else{
			console.log(node.id+"**"+node.offsetLeft+"  "+node.offsetTop)
		}
		x=x+node.offsetLeft;
		y=y+node.offsetTop;
		node=node.offsetParent ;
	}
	donghuafrom.x=x;
	donghuafrom.y=y;
}


---in_parent.scrollTop == in_parent.scrollHeight - in_parent.clientHeight
滚动高度的相关问题