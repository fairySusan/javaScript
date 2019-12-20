// 简单的函数柯里化
var curry = function(fn) {
  var args = [].slice.call(arguments, 1); //获取除了fn之外的参数，并变成数组
  return function() {
    var newArgs = args.contact([].slice.call(arguments));
    return fn.apply(this, newArgs);
  }
}

function add(a, b) {
  return a+b;
}
// 假如多次调用add函数参数a都是传1， b在不断变化，那么柯里化函数可以做到不传a，只传b
// 柯里化函数就是为了实现传参的灵活性
const newAdd = curry(add,1); //传参数a

newAdd(2); // 传参数b
newAdd(3); // 传参数b
newAdd(4); // 传参数b
newAdd(5); // 传参数b
console.log(res);

// 高级实现方式， 递归，闭包保存参数
//“用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数”

function curry2(fn, args) {
  var length = fn.length; // 获取fn的参数的个数
  var args = args || [];
  return function() {
    var _args = [].slice.call(arguments, 0);
    var newArgs = _args.contact(args);
    if (_args.length < length) {
      return curry2.call(this, fn, newArgs);
    } else {
      return fn.call(this, newArgs);
    }
  }
}
var fn = curry2(function(a,b,c){
  console.log([a,b,c]);
});
// 传的参数等于3个，返回执行结果
fn(1,2,3);
// 传的参数个数少于3个，返回的是一个函数
fn(1,2)(3);
fn(1)(2)(3);