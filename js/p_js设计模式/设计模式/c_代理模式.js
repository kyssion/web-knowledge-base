//使用代理模式实现缓存和图片预加载方法
function InsertImg(fatherdom){
	var imgDom= document.createElement("img");
	fatherdom.appendChild(imgData);
	return {
		"setImg":function(src){
			imgDom.src=src;
		}
	}
}
function ProxyImgLoad(src,loadimgDom){//传入需要进行代理的类表示要对他进行的操作 
	var img=new Image();
	img.onload=function(){
		loadimgDom.setImg(img.src);
	}
	return {
		"setImg":function(src,loading){
			img.src=src;
			loadimgDom.setImages(loadimgsrc)
		}
	}
}
