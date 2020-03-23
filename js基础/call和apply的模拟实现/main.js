Function.prototype.call2 = function(context) {
  // 首先获取调用call的函数，用this可以获取
  var args = [];
  args = arguments[1]; // 第二个参数是数组
  context.fn = this; 
  context.fn(...args); // 假如不用ES6的语法该怎么传递参数呢？参见call3
  delete context.fn;
}

// 测试
var foo = {
  value: 1
};

function fn(name, age) {
  console.log(this.value, name, age);
}
fn.call2(foo, ['susan', 18]); //1

// call3...........
Function.prototype.call3 = function(context) {
  var args = [];
  args = arguments[1]; // 第二个参数是数组
  var context = context || window;
  context.fn = this;
  var result = eval('context.fn(' + args +')'); // 这里eval会把args变成字符串，逐个传递参数，跟ES6的扩展运算符一样
  delete context.fn
  return result;
}

// 测试
var value = 999;
var foo1 = {
  value: 111
}
function bar(name, age) {
  console.log('bar', this.value, name, age)
}

// 测试
bar.call3(foo1, [JSON.stringify('kelala'), 20]); // 'bar' 111 'kelala', 20

// apply 的实现
Function.prototype.apply2 = function(context) {
  let args = [];
  for(let i = 1; i<arguments.length; i++) {
    args.push(arguments[i]);
  }
  context.fn = this;
  context.fn(...args);
  delete context.fn;
}
// 测试
var foo2 = {
  value: 190
}
function apple(shape, color){
  console.log('apple is', shape, color, this.value);
}
apple.apply2(foo2, 'big', 'red');// apple is big red 190

// bind 函数的实现
Function.prototype.bind2 = function(context) {
  let fn = this;
  // 改变fn里的this指向
  return function() { 
    let args = [];
    for(let i = 0; i<arguments.length; i++) {
      args.push(arguments[i]);
    }
    return fn.call(context, args);
  }
}
// 测试
var foo3 = {
  value: 200,
}
function cherry(shape, color) {
  console.log('cherry', shape, color, this.value);
}
newCherry = cherry.bind2(foo3); //  此时 cherry已经被执行，返回了结果，调用newCherry 获得返回的结果
newCherry('little', 'pink');
