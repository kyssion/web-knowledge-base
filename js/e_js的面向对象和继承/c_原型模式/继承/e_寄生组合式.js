//使用寄生构造方法将会让夫元素的prototype和夫元素的实例方法分别付给子元素
fucntion object(o) {
	function A() {}
	A.prototype = o
	var ox = new A()
	return ox
}
function addprototype(child, father) { //核心1.为子孩子绑定夫元素prototype
	var prototype = object(father.prototype);//!!!!注意为什么不使用夫元素的prototype因为这将会让子元素修改prototype的时候链夫元素的也修改掉了造成代码混乱
	prototype.constructor = child;
	child.prototype = prototype;
}

function father() {
	this.name = "sdf";
	this.age = 123;
}
father.prototype.say = function() {
	console.log(this.name);
}

function child() {
	father.apply(this, arguments); //定义要继承的夫元素的属性
	this.age = "222";
}
var hehe = addprototype(new child(), new father());
hehe.prototype.say = function() {
	console.log("666");
}