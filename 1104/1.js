/*
 * @Description: Promise
 * @Author: winki
 * @Date: 2019-11-04 09:37:40
 * @LastEditTime: 2019-11-04 13:48:49
 * @LastEditors: winki
 */
/* 
  关于Promise
  Promise实例一旦被创建就会被执行
  Promise过程分为两个分支：pending=>resolved 和 pending=>rejected
  Promise状态改变后，依然会执行之后的代码
*/
const warnDemo = ctx =>{
  const promise = new Promise(resolve =>{
    resolve(ctx);
    console.log('After resolved,but Run')
  });
  return promise;
};
warnDemo('ctx').then(ctx => console.log(`this is ${ctx}`));

// then方法
/* 在Console键入以下内容 */
let t = new Promise(()=>{});
console.log(t.__proto__);

let resolve = function test(params) {
  console.log(params)
}
let p = new Promise((resolve, reject) => {
  //做一些异步操作
  setTimeout(() => {
      console.log('执行完成');
      resolve('我是成功！！');
  }, 2000);
});


