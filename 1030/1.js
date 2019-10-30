/*
 * @Description: 闭包
 * @Author: Do not edit
 * @Date: 2019-10-30 09:56:14
 * @LastEditTime: 2019-10-30 10:43:21
 * @LastEditors: winki
 */
function mockData() {
    const mem = {};
    return {
        clear: () => { mem = null },//显式暴露清理接口
        get:page =>{
            if(page in mem){
                return mem[page];
            }
            mem[page] = Math.random();
        }
    };
}
console.log(mockData().get)
// 每个函数都是一个闭包，闭包的效果可以防止函数的全局变量被污染，但是有一点不好的是，容易造成内存泄漏，为了解决这种问题，程序员必须在使用闭包的函数中手动提供一个清理内存的方法。
// 要想使用闭包中的变量或者方法，可以通过return返回回去。
// this：this永远指向最后调用它的那个对象
// 改变this指向的三种方法：1.箭头函数 2._this = this 3,bind/apply/call方法 apply接收的为一个数组，其余两个为随意参数