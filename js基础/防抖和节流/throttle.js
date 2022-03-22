var count = 1;
var contatiner = document.getElementById('container');
function getUserAction(e) {
  console.log(e); // 当函数被当做事件处理函数时，函数里的这个指向触发事件的DOM对象，这里指向一个div对象。
  contatiner.innerHTML = count++;
}
// 第一版 不在wait时间范围内点击的事件会立即执行
function throttle(func, wait) {
  var previous = 0;                       
  return function(...args) {
      var now = +new Date();
      if (now - previous > wait) {
        func.apply(this, args);
        previous = now;
      }
  }
}
//第二版 不在wait时间范围内点击的事件会延迟wait秒执行 
function throttle2(func, wait) {
  var flag = false; // 是否还在wait这个时间间隔内
  return function(...args) {
    if (!flag) { // 如果不是在wait这个时间范围内发生的点击事件，就延后wait执行，如果是在wait时间范围内发生的点击事件，就不执行。
      flag = true;
      timeout = setTimeout(() => {
        flag = false;
        func.apply(this, args)
      }, wait)
    }
  }
}
contatiner.onmousemove = throttle(getUserAction, 1000);

/**
 *总结：
 *函数防抖：将几次操作合并为一此操作进行。原理是维护一个计时器，
 *规定在delay时间后触发函数，但是在delay时间内再次触发的话，
 *就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。适用输入框远程搜索、用户滚动
 *----------**
 *函数节流：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。适用用户频繁点击按钮导致表单重复提交
 *----------**
 *区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，
 *而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，
 *我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
 */