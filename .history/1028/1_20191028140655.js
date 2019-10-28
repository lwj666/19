/*
 * @Description: 普通函数和箭头函数的this
 * @Author: Do not edit
 * @Date: 2019-10-28 13:56:20
 * @LastEditTime: 2019-10-28 14:06:55
 * @LastEditors: winki
 */
function fn(){
    console.log(this);//a:1
    
    // execute itself
    (function(){
        console.log(this);//在浏览器中，window
    })();

    let arr = [1,2,3];//define a arr
    (arr.map(function(item){
        console.log(this);//window
        return item+1;
    }))();

    (arr.map(item =>{
        console.log(this);//a:1
        return item + 1;
    }))
}
fn.call({a:1});
// 记住this的作用域：es5的普通函数，es6的箭头函数，以及通过bind绑定改变上下文返回的新函数