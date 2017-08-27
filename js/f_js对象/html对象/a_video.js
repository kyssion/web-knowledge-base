---------------video---注意video 和audio标签会出现幽灵空白节点

//1.--------------视屏时间
Video.currentTime;		//设置或返回视频中的当前播放位置（以秒计）。
Video.duration;			//返回视频的长度（以秒计）。
Video.played;			//返回表示视频已播放部分的 TimeRanges 对象。
							//TimeRanges 对象属性：
								//length - 获得音视频中已缓冲范围的数量----多缓存的东西可能让length>1 默认是1 所有start()和end中的参数默认是0
								//start(index) - 获得某个已缓冲范围的开始位置---
								//end(index) - 获得某个已缓冲范围的结束位置
							//注释：首个缓冲范围的下表是 0。
Video.seekable;			//返回表示视频可寻址部分的 TimeRanges 对象。
							//seekable 属性返回 TimeRanges 对象。
							//TimeRanges 对象表示音频/视频中用户可寻址的范围。
							//可寻址范围指的是用户在音频/视频中可寻址（移动播放位置）的时间范围。
							//对于流视频，通常可以寻址到视频中的任何位置，即使其尚未完成缓冲。
						//注意： 该属性为只读属性。



//2.--------------缓冲区控制类
Video.buffered	;		//返回表示视频已缓冲部分的 TimeRanges 对象。
//			TimeRanges 对象	表示音视频的已缓冲部分。
//				TimeRanges 对象属性：
//					length - 获得音视频中已缓冲范围的数量----多缓存的东西可能让length>1 默认是1 所有start()和end中的参数默认是0
//					start(index) - 获得某个已缓冲范围的开始位置---
//					end(index) - 获得某个已缓冲范围的结束位置
//			注释：首个缓冲范围的下表是 0。

//3.---------------页面控件类
Video.controls;			//设置或返回视频是否应该显示控件）true/false。
Video.height;		//设置或返回视频的 height 属性的值。
Video.width;		//设置或返回视频的 width 属性的值。


//4.---------------video 资源属性类
Video.src;				//设置或返回视频的 src 属性的值。
Video.currentSrc;		//返回当前视频的 URL。
Video.mediaGroup;		//设置或返回视频所属媒介组合的名称。--默认underfind --相当于一个标记表示相关视屏的分组方法


//5.---------------播放中状态控制类 如是否静音播放速度
Video.defaultMuted;				//设置或返回视频默认是否静音。
Video.defaultPlaybackRate;		//设置或返回视频的默认播放速度。
Video.playbackRate;				//设置或返回视频播放的速度。
Video.ended;					//返回视频的播放是否已结束。
Video.loop	;					//设置或返回视频是否应在结束时再次播放。
Video.muted;					//设置或返回是否关闭声音。
Video.networkState;				//返回视频的当前网络状态。
//				表示音频/视频元素的当前网络状态：
//					0 = NETWORK_EMPTY - 音频/视频尚未初始化
//					1 = NETWORK_IDLE - 音频/视频是活动的且已选取资源，但并未使用网络
//					2 = NETWORK_LOADING - 浏览器正在下载数据
//					3 = NETWORK_NO_SOURCE - 未找到音频/视频来源
Video.paused;					//设置或返回视频是否暂停。
Video.playbackRate;				//设置或返回视频播放的速度。
								//指示视频的当前播放速度。
										//例值：
											//1.0 正常速度
											//0.5 半速（更慢）
											//2.0 倍速（更快）
											//-1.0 向后，正常速度
											//-0.5 向后，半速
Video.poster;		//设置或返回视频的 poster 属性的值。属性描述了在视频加载时或在用户点击播放按钮前显示的图片。如果不包含该属性，视频的第一帧将被用来代替显示。
Video.preload;		//设置或返回视频的 preload 属性的值。preload 属性设置或返回是否在页面加载后立即加载音频/视频。
Video.readyState;	//返回视频当前的就绪状态。
						//表示音频/视频元素的就绪状态：
							//0 = HAVE_NOTHING - 没有关于音频/视频是否就绪的信息
							//1 = HAVE_METADATA - 关于音频/视频就绪的元数据
							//2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
							//3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
							//4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
Video.volume;		//设置或返回视频的音量。
						//1.0 是最高音量（默认）
						//0.5 是一半音量 （50%）
						//0.0 是静音
----------------方法-------------------------------------------------------
Video.addTextTrack();//向视频添加新的文本轨道。
Video.canPlayType();//检查浏览器是否能够播放指定的视频类型。
Video.load();		//重新加载视频元素。
Video.play();		//开始播放视频。
Video.pause();		//暂停当前播放的视频。



//进入全屏
function requestFullScreen() {
    var de = document.getElementById("one");
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}