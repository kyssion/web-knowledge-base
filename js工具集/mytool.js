//对象复制方法
function MyElementTool() {
	//复制拷贝方法
	this.Clone = function(item) {
		if(item instanceof Array) {
			var theitem = [];
			for(var a = 0; a < item.length; a++) {
				theitem[a] = arguments.callee(item[a]);
			}
			return theitem;
		} else if(item instanceof Object) {
			var theobject = Object.create(item) || (function(the) {
				function F() {}
				F.prototype = the;
				return new F();
			})(item);
			return theobject;
		} else {
			return item;
		}
	}
	//开启全屏模式
	this.requestFullScreen = function(needdom) {
		var de = needdom;
		if(de.requestFullscreen) {
			de.requestFullscreen();
		} else if(de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		} else if(de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
	}
	//关闭全屏模式
	this.exitFullscreen = function(needdom) {
		var de = needdom;
		if(de.exitFullscreen) {
			de.exitFullscreen();
		} else if(de.mozCancelFullScreen) {
			de.mozCancelFullScreen();
		} else if(de.webkitCancelFullScreen) {
			de.webkitCancelFullScreen();
		}
	}
	//创建节点工具方法--- only单例模式节点-- updateitem-- 更新单例模式属性--- createpro简单new单例模式
	this.createElement = (function() {
		var itemMap = {};
		return function(what, info, status,events) {
			//传入节点tagname css 属性和id,class status--使用的属性
			function createitem() {
				var dom = document.createElement(what);
				for(var inf in info) {
					if(inf == "itemID") {
						continue;
					} else if(inf == "id") {
						dom.id = info[inf];
					} else if(inf == "class") {
						dom.className = info[inf];
					} else {
						dom.style[inf] = info[inf];
					}
				}
				dom.addEventListener(events.et,events.fn,events.status||false);
				return dom;
			}

			function only() {
				if(info.itemID == undefined) {
					console.log("No itemID");
					return "No itemID";
				}
				if(itemMap[info.itemID] == undefined) {
					itemMap[info.itemID] = createitem();
					return itemMap[info.itemID];
				} else {
					return itemMap[info.itemID];
				}
			}

			function updateItem() {
				if(info.itemID == undefined || itemMap[info.itemID] == undefined) {
					return "no element";
				} else {
					var dom = itemMap[info.itemID]
					for(var inf in info) {
						if(inf != "id" && inf != "class") {
							dom.style[inf] = info[inf];
						}
					}
					if (events!=undefined||events!=null){
						dom.addEventListener(events.et,events.fn,events.status||false);
					}
					return dom;
				}
			}
			function createnew() {
				return createitem();
			}
			
			
			if(status == "only") {
				return only();
			} else if(status == "update") {
				return updateItem();
			} else if(status == "new") {
				return createnew();
			} else {
				return null;
			}
		}
	})();
	this.getElement = function(info, status) {
		var dom;
		switch(info) {
			case "id":
				console.log(status);
				dom = document.getElementById(status);
				break;
			case "tagName":
				dom = document.getElementsByTagName(status);
				break;
			case "class":
				dom = document.getElementsByClassName(status);
				break;
			case "cssAll":
				dom = document.querySelectorAll(status);
				break;
			case "cssOnly":
				dom = document.querySelector(status);
				break;
			default:
				break;
		}
		return dom;
	}
}
var Tween = {
	"easeInSine": function(startWay, endWay, time, reserve) {
		return(endWay - startWay) * (Math.sin(time));
	}
}

//var obje={
//	100:234
//}
//console.log(obje.length);

//动画
var tweed = {
	//线性变化
	"line": function(startWay, endWay, time, duringtime, allorNow) {
		if(allorNow == "all") {
			var needspeadce = window.parseInt(time / duringtime);
			var speed = window.parseInt((endWay - startWay) / needspeadce);
			var speedarr = [];
			for(var a = 0; a < needspeadce; a++) {
				speedarr.push(startWay + a * speed);
			}
			speedarr.push(endWay);
			return speedarr;
		} else {
			if(time != duringtime) {
				var speed = (endWay - startWay) * (time) * duringtime;
				return speed;
			} else {
				return endWay;
			}
		}
	},
	//正玄函数变化
	//反对号sin变化量
	"easeInSine": function(startWay, endWay, time, duringtime, allorNow) {
		if(allorNow == "all") {
			var needspeace = window.parseInt(time / duringtime);
			var speedarr = [];
			var allnumber = endWay - startWay;
			for(var a = 0; a < needspeace; a++) {
				speedarr.push(startWay + allnumber * Math.sin((a / needspeace) * (Math.PI / 2)));
			}
			speedarr.push(endWay);
			return speedarr;
		} else {
			if(duringtime != time) {
				return startWay + (endWay - startWay) * (Math.sin((duringtime / time) * (Math.PI / 2)));
			} else {
				return endWay;
			}
		}
	},
	//正对号变化量
	"esseOutSine": function(startWay, endWay, time, duringtime, allorNow) {
		if(allorNow == "all") {
			var needspeace = window.parseInt(time / duringtime);
			var speedarr = [];
			var allnumber = endWay - startWay;
			for(var a = 0; a < needspeace; a++) {
				speedarr.push(endWay + allnumber * Math.sin((a / needspeace) * (Math.PI / 2) + 3 / 2 * Math.PI));
			}
			speedarr.push(endWay);
			return speedarr;
		} else {
			if(duringtime != time) {
				return endWay + (endWay - startWay) * (Math.sin((duringtime / time) * (Math.PI / 2) + 3 / 2 * Math.PI));
			} else {
				return endWay;
			}
		}
	},
	//正对号加反对号组合动画效果
	"easeInOutSine": function(startWay, endWay, time, duringtime, allorNow) {
		if(allorNow == "all") {
			var needspeace = window.parseInt(time / duringtime);
			var speedarr = [];
			var allnumber = endWay - startWay;
			for(var a = 0; a < needspeace; a++) {
				speedarr.push(1 / 2 * allnumber + 1 / 2 * allnumber * Math.cos((a / needspeace) * (Math.PI) + Math.PI));
			}
			speedarr.push(endWay);
			return speedarr;
		} else {
			if(duringtime != time) {
				return 1 / 2 * (endWay - startWay) + 1 / 2 * (endWay - startWay) * (Math.cos((duringtime / time) * (Math.PI) + Math.PI));
			} else {
				return endWay;
			}
		}
	}
	//
}

//var arr = tweed.line(0, 500, 1000, 10, "all");
//for(var a = 0; a < arr.length; a++) {
//	var time = window.setTimeout((function(a) {
//		var hehe = document.getElementsByClassName("ceshi")[0];
//		return function() {
//			hehe.style.left = tweed.easeInOutSine(0, 500, 1000, 10 * a) + "px";
//			hehe.style.top = arr[a] + "px";
//		}
//	})(a), a * 10);
//}