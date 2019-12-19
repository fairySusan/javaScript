var count = 1;
var contatiner = document.getElementById('container');
function getUserAction(e) {
  console.log(e); // 当函数被当做事件处理函数时，函数里的这个指向触发事件的DOM对象，这里指向一个div对象。
  contatiner.innerHTML = count++;
}

// setTimeout和setInterval调用的函数里this的指向都是window，所以要把this的指向换过来
function debounce(func, wait, immediate) {
  var timer, result; // func可能有返回值
  return function() {
    const context = this;
    const args = arguments; // 获取event对象
    if(timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {  // 第一次触发是立即执行，在距上次时间触发之后1s内再触发就不执行，1s之后再触发就执行
        timer = null;
      }, wait)
      if(callNow) result = func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
    return result;
  }
}
contatiner.onmousemove = debounce(getUserAction, 1000, true);

/** 用requestAnimationFrame也可做发抖函数 ***/
function debounce2(func) {
  var t;
  return function() {
    cancelAnimationFrame(t);
    t = requestAnimationFrame(func);
  }
}