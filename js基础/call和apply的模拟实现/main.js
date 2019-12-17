Function.prototype.call2 = function(context) {
  // 首先获取调用call的函数，用this可以获取
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }
 /**
  * 把函数放到context对象里
  * var foo = {
      value: 1,
      bar: function(name, age) {
        console.log(this.value, name, age);
      }
    };
  */
  context.fn = this; 
  context.fn(...args); // 假如不用ES6的语法该怎么传递参数呢？参见call3
  delete context.fn;
}

// 测试
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value, name, age);
}
bar.call2(foo, 'susan', 18); //1

// call3...........
Function.prototype.call3 = function(context) {
  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args +')');
  var context = context || window;
  context.fn = this;

  delete context.fn
  return result;
}

// 测试
var value = 2;
var foo1 = {
  value: 1
}
function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call3(null); // 2