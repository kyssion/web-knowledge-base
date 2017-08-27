function WebSocketTest() {
	if("WebSocket" in window) {
		alert("您的浏览器支持 WebSocket!");

		// 打开一个 web socket
		var ws = new WebSocket("ws://localhost:9998/echo");----创建websocket链接第二个参数可选表示端口

		ws.onopen = function() {---web事件 建立链接的时候触发
			// Web Socket 已连接上，使用 send() 方法发送数据
			ws.send("发送数据");
			alert("数据发送中...");
		};

		ws.onmessage = function(evt) {---web事件接受信息的时候出发
			var received_msg = evt.data;
			alert("数据已接收...");
		};

		ws.onclose = function() {---web事件关闭信息的时候触发---onerre 发生错误的时候触发
			// 关闭 websocket
			alert("连接已关闭...");
		};
	} else {
		// 浏览器不支持 WebSocket
		alert("您的浏览器不支持 WebSocket!");
	}
}