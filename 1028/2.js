/*
 * @Description: 深拷贝和浅拷贝
 * @Author: Do not edit
 * @Date: 2019-10-28 14:35:19
 * @LastEditTime: 2019-10-28 14:40:47
 * @LastEditors: winki
 */
// 在js中，函数和对象的拷贝都为浅拷贝，其他都是深拷贝

// 开发中，常用的是对象的深拷贝
 Object.assign({},obj)//属于浅拷贝，拷贝的是对象的引用
 JSON.parse(JSON.stringify(src))//属于深拷贝，但是这种拷贝有局限性：如果拷贝的是一个函数或者一个类的实例时，无法正确拷贝
 