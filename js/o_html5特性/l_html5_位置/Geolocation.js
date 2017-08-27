var x = document.getElementById("demo");
function getLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
		-- -- - 进行定位 第一个参数表示获取为值第二个表示出现错误怎么办
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	x.innerHTML = "纬度: " + position.coords.latitude +
		"<br>经度: " + position.coords.longitude;
}

function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			x.innerHTML = "用户拒绝对获取地理位置的请求。"
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "位置信息是不可用的。"
			break;
		case error.TIMEOUT:
			x.innerHTML = "请求用户地理位置超时。"
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML = "未知错误。"
			break;
	}
}