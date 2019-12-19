var count = 1;
var contatiner = document.getElementById('container');
function getUserAction(e) {
  console.log(e); // 当函数被当做事件处理函数时，函数里的这个指向触发事件的DOM对象，这里指向一个div对象。
  contatiner.innerHTML = count++;
}
// 第一版 会立即执行， 但不会执行最后一次事件
function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function() {
      var now = +new Date();
      context = this;
      args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
  }
}

// 第二版 不会立即执行，但是会执行最后一次事件
function throttle2(func, wait) {
  var timeout;
  return function() {
    context = this;
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(function(){
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}
contatiner.onmousemove = throttle(getUserAction, 1000);

// 那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果
// leading：false 表示禁用第一次执行
// trailing: false 表示禁用停止触发的回调
function throttle(func, wait, options) {
  var timeout, context, args;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  }
  var throttled = function() {
    var now = new Date().getTime();;
    if (!previous && options.leading) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 在距离上次触发事件已经过了wait时间，就可以再次触发，否则跳else
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  }
  return throttled;
}