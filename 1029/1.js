/*
 * @Description: 原型的组合继承
 * @Author: Do not edit
 * @Date: 2019-10-29 11:53:08
 * @LastEditTime: 2019-10-29 13:43:57
 * @LastEditors: winki
 */
// 定义一个构造函数
function Dog(name,color){
	this.name = name
	this.color = color
}
// 定义原型对像上的方法
Dog.prototype.bark = () =>{
	console.log('wangwang~')
}
// 定义另一个构造函数
function Husky(name,color,weight){
	Dog.call(this,name,color)
	this.weight = weight
}
// 将Dog实例对象上的属性方法赋值给Husky原型对象
Husky.prototype = new Dog()
// 往Husky的原型对象上增加方法
Husky.prototype.test = () =>{
    console.log('这是Husky自己的方法6')
}
/* 测试代码 */
let c = new Husky()
console.log(c.bark())
console.log(c.test())