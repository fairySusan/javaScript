var mainbox = document.getElementById('mainbox');
mainbox.addEventListener('mousemove',(event) => {
    event.stopPropagation();
    var offsetp = document.getElementById('offset');
    var clientp = document.getElementById('client');
    var screenp = document.getElementById('screen');
    offsetp.innerHTML = `offsetX:${event.offsetX}<br>offsetY:${event.offsetY}`;
    clientp.innerHTML = `clientX:${event.clientX}<br>clientY:${event.clientY}`;
    screenp.innerHTML = `screenX:${event.screenX}<br>screenY:${event.screenY}`;
},true)