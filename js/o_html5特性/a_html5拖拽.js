//相关重点
1. DataTransfer 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。
2. draggable 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：
			<div title="拖拽我" draggable="true">列表1</div>
3. ondragstart 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
4. ondragenter 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
5. ondragover 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
6. ondrop 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
7. ondragend 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上
8. Event.preventDefault() 方法：阻止默认的些事件方法等执行。
		在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。
		另外，如果是从其他应用软件或是文件中拖东西进来，尤其是图片的时候，默认的动作是显示这个图片或是相关信息，并不是真的执行drop。
		此时需要用用document的ondragover事件把它直接干掉。Event.effectAllowed 属性：就是拖拽的效果。



//1.DataTransfer     //拖拽数据传递对象，一般使用方式event.dataTransfer。
(1) dataTransfer . dropEffect [ = value ]   	//拖拽效果，可选值：“none”, “copy”, “copyLink”, “copyMove”, “link”, “linkMove”, “move”, “all”, and “uninitialized”。
	dataTransfer . effectAllowed
	1.dropEffect   表示拖放操作的视觉效果
	2.effectAllowed  用来指定当元素被拖放式所允许的视觉效果
(2) dataTransfer . items  					    //拖拽的数据集合，是一个数组。
(3) dataTransfer . setDragImage (element, x, y) //設置进行拖拽时候的背景
(4) data = dataTransfer . getData (format)    	//获取自定义的数据格式，如ev.dataTransfer.getData("text");通常是配合ev.dataTransfer.setData使用。
(5)	dataTransfer . setData (format, data)		//添加自定义数据格式，如ev.dataTransfer.setData("text", ev.target.innerHTML);有点像jquery里面的data
(6) dataTransfer . clearData ( [ format ] )			//清除自定义的数据格式及其数据。


var $ = function(selector) {
    return document.querySelector(selector);
};

var eleDustbin = $(".dustbin")[0], eleDrags = $(".draglist"), lDrags = eleDrags.length, eleRemind = $(".dragremind")[0], eleDrag = null;
for (var i=0; i<lDrags; i+=1) {
    eleDrags[i].onselectstart = function() {
        return false;
    };
    eleDrags[i].ondragstart = function(ev) {
        /*拖拽开始*/
        //拖拽效果
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text", ev.target.innerHTML);
        ev.dataTransfer.setDragImage(ev.target, 0, 0);
        eleDrag = ev.target;
        return true;
    };
    eleDrags[i].ondragend = function(ev) {
        /*拖拽结束*/
        ev.dataTransfer.clearData("text");
        eleDrag = null;
        return false
    };
}
eleDustbin.ondragover = function(ev) {
    /*拖拽元素在目标元素头上移动的时候*/
    ev.preventDefault();
    return true;
};

eleDustbin.ondragenter = function(ev) {
    /*拖拽元素进入目标元素头上的时候*/
    this.style.color = "#ffffff";
    return true;
};
eleDustbin.ondrop = function(ev) {
    /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
    if (eleDrag) {
        eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
        eleDrag.parentNode.removeChild(eleDrag);
    }
    this.style.color = "#000000";
    return false;
};