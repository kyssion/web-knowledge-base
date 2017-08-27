//1.创建正则表达式
var pattem = new RegExp("bbb","ig");//第一个参数  -- 指定模式匹配串, 第二个参数 指定可选模式修饰符
//0-----------------------------------------可选模式修饰符 支持  i忽略大小写 g全局匹配  m多行匹配
					// --- 第二个参数可以忽略
//使用表达式直接指定正则表达式
var mypattem = /bbb/i;
var mypattem2 = /bbb/;
var ceshi = "bbbbbbb"
// --- 正则表达式的方法
//1.判断方法 test()-判断是否存匹配项
console.log(pattem.test(ceshi));
//2.exec() 返回第一个匹配项
console.log(pattem.exec(ceshi));
//----string 对象中的方法
//1.match() 获取匹配数组--- 不包含重叠的项
console.log(ceshi.match(pattem));
//2.replace--- 使用正则表达式进行替换匹配的字符串
ceshi=ceshi.replace(pattem,"t");
console.log(ceshi);
//3.search ---  返回首次匹配字符串的初始位置  从零开始
ceshi = "bbbaaabbbaaa";
console.log(ceshi.search(pattem));
//4.split ---  字符串拆分方法
console.log(ceshi.split(pattem));

