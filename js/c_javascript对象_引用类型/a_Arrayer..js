var a= new Array(1,2,3);
var b=[4,5,6];
vst b=[[3,3][1,1]];
var c=new Array();-或者- var c=[];
c[0]=7;
c[1]=8;
//c[100]=100;//长度问题  
//console.log(a+" "+b+" "+c.length);
var ff={
	name:"haha"
};
注意!  js的数组没有传统意义上的下标而是对象的属性  字符串下标将会强行转化成 数组属性  当转化不了的时候将会自动的成为array对象中的一个属性
	类似php
-------------------数组链接函数--------------------------------------------
var d= a.concat(a,b,c); 			//array1.concat(array2,array3,...,arrayX)链接两个字符串返回一个结果
              
-------------------数组检索函数----------------------------------------------------

--检索所有的元素是否符合 内部函数全部返回true就返回true全 否则false  用法array.every(function(currentValue,index,arr), [thisValue])
		d=a.every(function(number,index,arr){
			return true;					//currentValue当前值,index下标,arr数组，thisvalue-对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
		},ff);//当每一个值通过函数处理的结果都是true的时候返会true

--检索所有的元素是否符合  一个内部函数返回true 就返回true否则false  array.some(function(currentValue,index,arr),[thisValue])
		d=a.some(function(number,index,arr){
			return false;
		},ff);//同every只要有一个是true就返会true

--检索所有的元素是否符合 返回符合的数组    用法array.filter(function(currentValue,index,arr), [thisValue])
		d=a.filter(function(number,index,arr){
			return true;
		},ff);   

--xxxxxxxxxxxxxxxxxxxxx
		d=a.forEach(function(number,index,arr){
		},[ff]);//只是进行单纯的迭代不反悔值


--检索所选的元素首次出现位置    array.indexOf(item,[start])
		d= a.indexOf(2);//判读元素是否相等的方式是=== 字符串和数字是不相等的

--检索所选的元素最后出现的问题 array.lastIndexOf(item,[start])
		d=a.lastIndexOf(1);//

-----------数组处理函数---------------------------------------------------------------
--对数组中的每一个元素进行加工并最后生成数组    array.map(function(currentValue,index,arr), [thisValue])
		d=a.map(function(number,index,arr){
			return number+1;
		},ff);//将返回值组成位数字返回

--截取数组中的一部分生成新的数组 array.slice(start, [end])  值可以是负数 表示从后面算起
		var d = a.slice(0,1);//截取数组的一部分进行返回

--***将原来的数组进行颠倒  array.reverse()
		a.reverse();//数组倒叙
--数组排序函数array.sort([sortfunction])---默认从小到大排序
		function compare(prevalue,nextvalue){
			if(prevalue>nextvalue){
				return -1;---交换顺序
			}
			else if (prevalue<nextvalue){
		return 1;---不交换顺序
	}
			else{
				return 0;
			}
		}
		a.sort(compare);//排序算法可对数组进行排序
--**数组插入替换函数 array.splice(index,howmany,[item1,.....,itemX]) 从哪里   删多少 插什么
		var d=a.splice(0,3,4,5,6,7);//替换元素 到 数组

-------------------数组转化函数-------------------------------------------------------
--将数组元素转化成字符串 array.join(separator)--参数分界符   toString()----只是单纯的转化 
		d=a.join("opopop");//其中的字符串为界将数组变成字符串返回                              
		valueof();返回数组???
-------------------数据结构函数-----------------------
		---a.pop();//出栈
		---a.push(1,2,3,4,5);//入栈 对js来说有的时候参数序列与参数数组是相同的
		---a.shift();//出队列
		---a.unshift(1,2,3,4,5);//入队列 同push
		
