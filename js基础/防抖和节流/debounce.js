var count = 1;
var contatiner = document.getElementById('container');
function getUserAction(e) {
  console.log(e); // 当函数被当做事件处理函数时，函数里的这个指向触发事件的DOM对象，这里指向一个div对象。
  contatiner.innerHTML = count++;
}
// 第一次事件会延迟执行， 在2s内再次发生事件，第一次事件不会执行了，执行最后一次事件，并且是延后2s执行
function debounce(fn, delay) {
  var timer = null;
  var result = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      result = fn.apply(this, args);
    }, delay);
    return result;
  }
}
contatiner.onmousemove = debounce(getUserAction, 2000);

/** 用requestAnimationFrame也可做发抖函数 ***/
function debounce2(func) {
  var t;
  return function() {
    cancelAnimationFrame(t);
    t = requestAnimationFrame(func);
  }
}