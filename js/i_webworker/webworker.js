var w;

function startWorker() {
	if(typeof(Worker) !== "undefined") -- -- -- - 检测浏览器是否支持webworker {
		if(typeof(w) == "undefined") {
			w = new Worker("demo_workers.js");
			-- -- --创建webworker
		}
		w.onmessage = function(event) {
			-- -- -- --后台的脚本向前台传输数据的时候进行接受
			document.getElementById("result").innerHTML = event.data;
		};
	}
	else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
	}
}

function stopWorker() {
	w.terminate();
	-- --终止脚本
}

-----------------------------------------
var i=0;

 function timedCount()
 {
 i=i+1;
 postMessage(i);------------定义向前台传输什么数据
 setTimeout("timedCount()",500);
 }

 timedCount(); 