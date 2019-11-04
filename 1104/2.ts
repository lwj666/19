/*
 * @Description: typescript
 * @Author: Do not edit
 * @Date: 2019-11-04 13:48:58
 * @LastEditTime: 2019-11-04 15:14:22
 * @LastEditors: winki
 */
/* typescript 常见用法 */
// 联合类型与交叉类型
// 联合类型：使用|作为标记，常用于对象类型是多种类型之一。
// 交叉类型：使用&作为标记，创建新类型，拥有多个了性的所有定义。

  interface Student{
    name : string;
    school : string;
  }
  interface People{
    name : string;
    age : number;
  }

//   作为交叉类型，两个接口的定义必须都符合
const a : Student & People = {
    name : '',
    school : '',
    age : 1
}
  
// 作为联合类型，只能访问接口共有定义
let b : Student | People = a;
console.log(b.name);
// console.log(b.age)//error:编译错误

// 数组、元祖与枚举
// 数组的定义，可以使用范型，也可以使用[];
const nums : Array<number> = [1,2,3];
const nums2: number[] = [1,2,3];//更推荐

// 元祖使用[]声明，枚举使用enum声明。它们的应用场景比较少
// 枚举
enum Days{
    Sun,//0
    Mon,//1
    Tue,//2
    Wed,//3
    Thu,//4
    Fri,//5
    Sat//6
}

// 元祖
let yuanzu : [string,number];

yuanzu[0] = 'Xcat Liu';
yuanzu[1] = 1;

//类型断言
// 当【类型推断】无法判定类型的时候，需要利用【类型断言】来告诉编译器对象的类型。

// 对于类型断言，推荐使用：as 。而不是在对象前使用<>,这和jsx语法有冲突
interface LogInfo{
    time:Date;
    info:string;
    level?:'log'|'error'|'warning';
}
const obj1: LogInfo = {
    time:new Date(),
    info:'obj1'
};

const obj2 = {};

const logInfo = process.env.NODE_ENV === 'development' ? obj2 : obj1;

// console.log(logInfo.info) //编译报错
console.log((logInfo as LogInfo).info);//类型断言，指明接口类型为：LogInfo

// 类型别名
// 这功能非常好用了，比如声明一个联合声明：'log'|'info'|'error'。许多地方要用到，总不能每次都写一遍，因此：
type LogLevel = 'log' | 'info' | 'error';

// 函数
// 默认参数与剩余参数
// 默认参数的语法是=，不能给【可选参数】
function buildName(firstName:string='默认值',lastName?:string){}

// 【剩余参数】是数组类型，并且元素类型无法确定，因此指定为any:
function push(array:any[],...items:any[]){
    items.forEach(function(item){
        array.push(item);
    });
}

// Async Function
// 对于async/await函数来说，返回值是Promise对象。Promise对象的类型定义如下：
interface Promise<T>{
    finally(onfinally?:(() => void) | undefined | null):Promise<T>
}
// 因此，asnyc返回结果的类型需要用到范型语法：
async function demo():Promise<number>{
    return 1;
}
// 函数重载
// ts的函数重载和c++、java等语言中的函数重载不一样。ts函数重载最终，还是编译成一个函数(c语言等是编译成不同函数)

// 它的目的是为了提供编译器进行更多种类的类型判断，而不需要使用'类型断言'技术。
// 在定义函数冲杂物i的时候，要按照【精确 => 宽泛】的级层来定义函数

function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
    if(typeof x === 'number'){
        return Number(
            x
                .toString()
                .split('')
                .reverse()
                .join('')
        );
    }else if(typeof x === 'string'){
        return x
            .split('')
            .reverse()
            .join('');
    }
}

// 接口
// 任意属性
// 一个接口允许有任意的属性：
interface Person{
    name:string;
    [propName:string]:any;
}

let tom : Person = {
    name : 'Tom',
    gender : 'male'
};
// 索引签名
// 借助【索引签名】，可以进一步规范存储对象的结构。索引签名的参数可以是number或string

// 例如下面，info接口就是所有的字符串字读的值必须为number类型:
interface Info{
    [propName:string]:number;
}

interface Info{
    [propName:string]:number;
    x:string;//编译error:x不符合索引签名的定义
}
// 当然，此处也可以同时拥有两种类型的索引签名：
interface People{
    [name:string]:number|string;
    [age:number]:number;
}
// 如果想规定【有限】的字符串字面量，借助in即可：
type LogLevel = 'log'|'info'|'warning'|'error'|'success';

const localLogFile:{
    [level in LogLevel]?:string|void;
} = {
    info:'info.log',
    warning:'warning.log',
    error:'error.log',
    success:'success.log'
};

// 接口组合
interface MongConf{
    host:string;
    port:number;
    db:string;
}

interface ProcessConf{
    pid:number;
    mongodb:MongConf;
}

// 类型声明复用
// 在typescript的编译器中，类型定义是可以导出的。比如 上面定义的MongoConf就可以export出来，给别的文件使用：
// a.ts
export interface MongoConf{
    host:string;
    port:number;
    db:string;
}
// b.ts
import {MongoConf} form './a.ts';