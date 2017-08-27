//1. 日期类型的基本输出声明
var mydate = new Date();
var heh=Date.parse("6/12/2017");//parse  传入日期返回指定日期对对应的毫秒数
var h = new Date("6/12/2016");//后台将会直接进行相关的调用
var h= Date.UTC(2015,11,12,4,7,20);//指定相关的信息返回毫秒数
// 年月日时分秒毫秒
//2.格式化输出
console.log(mydate.toDateString());//星期 月 日 年
console.log(mydate.toGMTString());//星期 +,+ 日 月 年 时 分 秒 时区
console.log(mydate.toTimeString());//时分秒时区

//3.组件方法 
console.log(mydate.getDate());//time-毫秒数 FullYear-四位年份
//Month-月份 Date-日  host-时 minutes-分 Seconed - 秒  Miliseconed-毫秒数---注意这些属性是拆分出来的而不是直接的
//这些属性都有get和set方法方便设置属性的更改属性
console.log(mydate.getMilliseconds());


