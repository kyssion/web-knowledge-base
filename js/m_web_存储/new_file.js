localStorage-- - 永久存儲

if(typeof(Storage) !== "undefined") {
	localStorage.sitename = "W3Cschool在线教程";
	document.getElementById("result").innerHTML = "网站名：" + localStorage.sitename;
} else {
	document.getElementById("result").innerHTML = "对不起，您的浏览器不支持 web 存储。";
}
sessionStorage 方法针对一个 session 进行数据存储。 当用户关闭浏览器窗口后， 数据会被删除。

if(sessionStorage.clickcount) {
	sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
	sessionStorage.clickcount = 1;
}

不管是 localStorage， 还是 sessionStorage， 可使用的API都相同，
保存数据： localStorage.setItem(key, value);
读取数据： localStorage.getItem(key);
删除单个数据： localStorage.removeItem(key);
删除所有数据： localStorage.clear();
得到某个索引的key： localStorage.key(index);