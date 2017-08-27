----------------------------josn--------------------------------------------
		数据在名称/值对中
		数据由逗号分隔
		花括号保存对象
		方括号保存数组。
		
---------------------样例-------------------------------
var a={--------------标准是必须加上-  参数没有必要加上""  不加上将自动的转化成数字类型 不能转化将报错
    "book": [
        {
            "id":"01",
            "language": "Java",
            "edition": "third",
            "author": "Herbert Schildt"
        },
        {
            "id":"07",
            "language": "C++",
            "edition": "second"
            "author": "E.Balagurusamy"
    }]
};
js josn序列化  JOSN.stringify(object,[functiong|array]); --如果是array 将只序列化array中的参数
													  --如果是 function 将进行相应的例子
		var josn =JSON.stringify(string , function(key,value){
			switch(key){
				case "xxx"
					return xxxx;
				case "xxxx"
					return undefined;----表示忽略
				default:
					return value;
			}
		});
		----元素定义了tojosn的方法 将会在进行序列化的时候 调用tojosn的方法而不进行其他的
js解析  josn  eval ("("+josn+")");须把文本包围在括号中，这样才能避免语法错误：
JSON.parse();   (josn,function) 同上
