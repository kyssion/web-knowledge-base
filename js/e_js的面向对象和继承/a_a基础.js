//对象创建方法
//1. --- 使用类似josn 的方法 -- 注意这中方法不会使用构造函数-默认类型是object 类型
var he={
	name:"df",
	age:12,
	say:function(){
		console.log(this.age);
	}
}
//2.
ECMA内部属性---用来定义引擎用的 在实际中很少使用
1.数据属性
		(1)Configuration - 定义能否删除等
		(2)Enumerable - 定义能否被for-in进行迭代
		(3)writable - 能否修改属性
		(4)Value - 这个属性的值
修改对象的数据属性
Object.defineProperty(this,name,{
	configuration:true,
	value:123,
	writable:true,
});
Object.defineProperties(this,{- 多个值使用这个方法进行多值载入 分vv吧                                                                                                                                                                                                                                                                                                                                                                                                
	"name":{
		value:"123"
	},
})
2.访问器属性
Configuration
Enumerable
get	- 读取的时候调用的函数
set - 设置的时候调用的函数

在对象中存在的属性
construction - 保存着构造函数
每个函数中都有一个prototype 属性 指向一个对象这个对象含有所有实例可以进行共享的方法--注意使用的时候使用函数名称进行调用

//javascript的面向对象是从上向下进行解析的













