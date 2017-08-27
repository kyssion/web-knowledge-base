//----基础知识点---总结

//----变量声明   ---  如果省略  var 将会成为全局变量
var hehe; --- 局部连梁
hehe;  --- 全局变量

//---特殊控制流程语句
//1. for -- in  循环迭代使用的时 注意有些属性要声明为可迭代的
//2. label--- constision: for--for; --双层嵌套操作--用来跳出循环



//typeof ----   返回function object null ubderfind string number boolean
//typeof ----   在大多数的情况下进行的变量类型的节本类型的验证
//underfind---  当相关的属性没有进行初始化的时候的默认赋值----和 null进行区分-表明未付给初始基本类型值
//null  --- 空指针引用 --   表明变量是一个object类型 并且 还没有引用的对象，如果想要将相关的属性付给对象的时候最好为这个元素附上初始值
//注意！！！！  underfind 继承自 null underfind == null 返回true
//instanceof --- object 类型 检测


//对象的相关属性
//Boolean ---// true false 对应的基本类型所对应的相干属性
//---- 在js 中 存在各种隐式转化-- 比如
var he= new Boolean("sdfsdf");//he 的值是true
he= new Boolean("");//"" false 0 NaN null underfind 将会he 的boolean值微false

//number---- boolean 相关属性 --  注意js是弱类型-  整型和浮点型是可以相互转化的
var a= 10;// a 将会自动成为整型
var a=10.9;// a 将自动转化成成浮点型
var a= 0334;// 指定声明相关的类型为 八进制
var a= 0xA;//指定声明的样式微16进制
var a=213e333;//使用科学计数法
var a= 33e-22;//使用科学计数法表示小数点后面第几位
var a=Number.MAX_VALUE;//指定最大值和最小值
a=Number.MIN_VALUE;
a=Number.POSITIVE_INFINITY;//正无穷
a=Number.NEGATIVE_INFINITY;//负无穷
isFinite(100e100);//判断树枝是否超过数值范围
//NaN
//判读字符串使用是数字  ---如果传入的字符串不是数字的时候， 首先使用valueof()判断返回值是否可以转化成数值 
//如果不能在通过使用 toString()进行转化然后在进行相关的操作
isNaN("sdfsdf");//
//NaN   属性非特殊   NaN b不和任何属性相等  NaN+x --- 等于NaN NaN==NaN 返回false
console.log(NaN===NaN);
console.log(isNaN(NaN));
//注意!!! 使用Number 类的方法进行转化成字符串的方法
//---一共有三种方法 Number() parseInt() parsefloat();
//1. Number();
var he= Number("");//将传入的字符串变成相关的数字 true|false =0|1 null-0  注意如果使用underfind 方法  返回的值将会是NaN
//'070'--转化成70  089.890--89.89  ""--0; "0000sdfsdf"--NaN
var he = Number("sdfsdf999'");//返回NaN
//2.parseInt()和 parsefloat

var hee= parseInt("123123jkljlkj");//  转化成123123
parseInt('89.9');//去小数点  89
parseInt('');//返回NaN
var hehe=parseInt('sdf');//返回NaN
//parseInt 可以指定进制转化
parseInt("0xAlee");//转化成0xA lee 会忽略掉
parseInt('0123');//转化成 八进制
parseInt('10101',2);//可以自己指定相关的数据进制类型
//parsefloat---- 区别是 不能进行 进制转化
parseFloat('1e23');//支持科学计数法
var he = parseFloat('123.23.2');//会忽略掉最后一个小数点--- 使用


//字符串 -- string-- 数字转化成字符串
var jkl = 1234;
var o=jkl.toString(2);//以二进制转
console.log(o);

//Object --- 
var e = new Object(123);//object 会对传入的参数进行默认的转化-- String Number Boolean --



//操作符相关的知识点
//==  和 ===   区别 == 会进行类型同意转化   而 === 不会进行类型统一转化
//1. == 先将相关的属性转化成数字  boolean  (false true)  字符串   对象 使用valueOf 和 toString进行相关的转化
//2.null 和 underfind 是相等的
//3. NaN --- 使用逻辑判断的时候永远不相等
//4.false == 0  -- 返回true
//5.true == 1 --- 返回true

//&& ||   --&&---第一个操作数 null 或者 NaN 或者underfind 直接返回这些--||--将会运行下一个操作符
//1. && 遵循的规则   如果操作数是object 并且 object 不是 null 和underfind  判断的时候默认是true 
var ss=(3>2)&&123;//   如果第一个参数是true 将会返回 第二个操作数--- 直接返回 第二个操作不论是不是boolean
//上面的返回 123
//alert(typeof ss);---number
//alert(true&&jklll);----报错 了-- 因为 jklllweidingyi
//alert(true&&);
//2.||   ---- 特性和 && 相反  null underfind -- 会转化成 false  -- 利用这个特性就理解这种写法
/*
a.addEventListener("click",function(e){
	e=e||window.event;//-------当第一个值是null 或者underfind的时候将会直接使用这个方法
})
*/
//! 对象 - 非空字符串  - 非零数字(包括infinity)- 在逻辑运算的时候相当于 true
//null underfind NaN 空字符串 0 ---相当于 false
//&& || 将会返回这个运算符结束后的结果,对象返回对象 boolean返回boolean
//! --- 返回进行逻辑转换之后的东西 如对象变成falseundefined
"23">"20000"==true

//----js + 运算符 和java相同
var a=12;
var b =""+a;// b 自动的转化成字符串类型

var  a=123,b=123,c=123;//   多重赋值


//js 流程控制语句
//两个特殊的  label-continue break
//for(var a in  b)--可枚举对象的属性-各种arraylist   throw  try--catch -- finish  do--while
//with(){}---将代码的作用于放在特定的作用域中
var  box={
	'name':'dfdf'
}
with(box){
	var n=name;//相当于n= box.name;
}
