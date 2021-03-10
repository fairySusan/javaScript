Vue.directive('drag', {
  bind: function (el, binding) {
    const switchPos = {
      x: 20,
      y: 20,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    }
    el.addEventListener('touchstart', function (ev: TouchEvent) {
      ev.stopPropagation()
      switchPos.startX = ev.touches[0].pageX
      switchPos.startY = ev.touches[0].pageY
      el.style.border = '1px solid #2BA0FF'
    })
    el.addEventListener('touchend', function (ev: TouchEvent) {
      ev.stopPropagation()
      switchPos.x = switchPos.endX
      switchPos.y = switchPos.endY
      switchPos.startX = 0
      switchPos.startY = 0
      el.style.border = '1px solid #dddddd'
    })
    el.addEventListener('touchmove', function (ev: TouchEvent) {
      ev.stopPropagation()
      el.style.border = '1px solid #2BA0FF'
      if (ev.touches.length > 0) {
        const offsetX = ev.touches[0].pageX - switchPos.startX
        const offsetY = ev.touches[0].pageY - switchPos.startY
        let x = switchPos.x - offsetX
        let y = switchPos.y - offsetY
        if (x + el.offsetWidth > document.documentElement.offsetWidth) {
          x = document.documentElement.offsetWidth - el.offsetWidth
        }
        if (y + el.offsetHeight > document.documentElement.offsetHeight) {
          y = document.documentElement.offsetHeight - el.offsetHeight
        }
        if (x < 0) { x = 0 }
        if (y < 0) { y = 0 }
        el.style.right = x + 'px'
        el.style.bottom = y + 'px'
        switchPos.endX = x
        switchPos.endY = y
        ev.preventDefault()
      }
    })
  }
})