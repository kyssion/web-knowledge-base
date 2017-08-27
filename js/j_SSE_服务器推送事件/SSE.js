
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {-----接收事件
	document.getElementById("result").innerHTML += event.data + "<br>";
};

服务器端代码实例
为了让上面的例子可以运行，您还需要能够发送数据更新的服务器（比如 PHP 和 ASP）。
服务器端事件流的语法是非常简单的。把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。
<?php
header('Content-Type: text/event-stream');
 header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}nn";
flush();
?>

