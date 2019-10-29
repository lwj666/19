/*
 * @Description: 实现es继承的四种方法
 * @Author: Do not edit
 * @Date: 2019-10-28 15:29:56
 * @LastEditTime: 2019-10-29 15:49:05
 * @LastEditors: winki
 */

//  方法1：绑定构造函数.缺点：不能继承父类原型/属性
function Animal() {
    this.species = '动物';
}
function Cat(){
    // 执行父类的构造方法，上下文为实例对象
    Animal.apply(this,arguments);
}
/* 
    测试代码
*/
var cat = new Cat();
console.log(cat.species)

// 方法2：原型链继承
function Animal(species){
    this.species = species;
}

Animal.prototype.func = function() {
  console.log('Animal')  
};
Animal.prototype.hey = 'hey,good dones!!!';

function Cat() {}

/* 此刻的func方法无效，因为后面的操作将原型指向Animal */
Cat.prototype.func = function() {
    console.log('Cat')
}

Cat.prototype = new Animal();//将Cat的原型对象指向Animal
Cat.prototype.constructor = Cat;//恢复

/* 测试代码 */
var cat = new Cat();
cat.func();//Animal;解释：Animal.func 跟 Cat.fun是同名函数，当指向new Animal()时，方法被重写。
console.log(cat.species);//undefined 由于species是Animal构造函数上的，不是Animal原型对象上的，所以无法被继承
console.log(cat.hey);//hey,good dones!!!

// 方法3：组合继承
function Animal(species) {
    this.species = species;
  }
  Animal.prototype.func = function() {
    console.log("Animal");
  };
  
  function Cat() {
    Animal.apply(this, arguments);
  }
  
  Cat.prototype = new Animal();
  Cat.prototype.constructor = Cat;
  
  /**
   * 测试代码
   */
  var cat = new Cat("cat");
  cat.func(); // output: Animal
  console.log(cat.species); // output: cat

// 寄生组合继承
function inheritPrototype(sub,parent){
    // 拿到父类的原型
    var prototype = Object.create(parent.prototype);
    // 改变constructor的指向
    prototype.constructor = sub;
    // 父类原型赋给子类
    sub.prototype = prototype;
}

function Animal(species) {
    this.species = species;
}

Animal.prototype.func = function() {
    console.log("Animal")
}
function Cat() {
    Animal.apply(this,arguments);//只调用了一次构造函数
}

inheritPrototype(Cat,Animal);

/* 测试代码 */
var cat = new Cat("cat");
cat.func();//Animal
console.log(cat.species);//cat