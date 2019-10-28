/*
 * @Description: map、filter、reduce方法的使用
 * @Author: Do not edit
 * @Date: 2019-10-28 15:02:12
 * @LastEditTime: 2019-10-28 15:24:23
 * @LastEditors: winki
 */
// map：生成一个新数组，遍历原数组
let newArr1 = [1, 2, 3].map(item => item * 2);
console.log(`New array1 is ${newArr1}`);


// filter:过滤原先的函数，产生一个新数组
let newArr2 = [1, 2, 4, 6].filter(item => item !== 6);
console.log(`New array2 is ${newArr2}`);

// reduce:结果汇总为单个返回值
let newArr3 = [1, 2, 3,4].reduce((item1,item2) => item1*item2); 
console.log(`New array3 is ${newArr3}`);
