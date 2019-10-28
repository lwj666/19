/*
 * @Description: 普通函数和箭头函数的this
 * @Author: Do not edit
 * @Date: 2019-10-28 13:56:20
 * @LastEditTime: 2019-10-28 14:28:19
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
// 诀窍：es5的普通函数，es6的箭头函数，以及通过bind绑定改变上下文返回的新函数

// es5
//     函数被直接调用，this为window
//     函数作为对象属性被调用，this为对象本身
//     通过new绑定，this绑定在返回的实例上

// es6箭头函数
//     function run(){
//         const inner = () =>{
//             return () => {
//                 console.log(this.a);
//             };
//         };
//         inner()();//执行最内层函数
//     }
//     run.bind({a:1})();

// bind绑定上下文返回的新函数、bind对箭头函数无效
//     function run(){
//         console.log(this.a);
//     }

//     run.bind({a:1})();//赋值并执行，a:1
//     run.bind({a:2}).bind({a:1})();//多次绑定，只取第一个值

// 这几种方法的优先级 new > bind > 对象调用 > 直接调用



