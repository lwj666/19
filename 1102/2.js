/*
 * @Description:理解promise，async，await
 * @Author: Do not edit
 * @Date: 2019-11-02 14:09:41
 * @LastEditTime: 2019-11-02 15:18:08
 * @LastEditors: winki
 */
console.log('script start');
async function async1() {
    await async2();
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1();/* 调用async1函数 */
/* 
打印出 script start
到async1(),函数调用，执行async1，async1中调用async2，调用async2
async2中打印出 async2 end ，async2函数执行完毕，回到async1，遇到 await ，让出线程
执行下一步，setTimeout，直接将setTimeout放入下一轮的宏观任务中，
执行下一步，打印出Promise，将promise1，promise2放入微观任务中
执行下一步，打印出script end
由于async2 有 async 修饰，所以在让出线程的时候，async1在调用async2之后的部分的代码就被压人了微观任务中了，因为async2是异步操作，所以它必须等其他微观任务执行完成之后才执行
按照入栈的顺序
输出promise1，promise2，async1 end
*/
setTimeout(function () {
    console.log('setTimeout')
},0)

new Promise(resolve => {
    console.log('Promise');
    resolve();
})
.then(function () {
    console.log('promise1')
})
.then(function () {
    console.log('promise2')
});
console.log('script end')


/*
执行结果:
script start
async2 end
Promise
script end
promise1
promise2
async1 end
setTimeout 
 */