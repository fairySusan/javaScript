var mainbox = document.getElementById('main');
var pbox = document.getElementById('pbox');
pbox.innerHTML = `clientWidth:${mainbox.clientWidth}  clientHeight:${mainbox.clientHeight}<br>
offsetWidth:${mainbox.offsetWidth}  offsetHeight:${mainbox.offsetHeight}<br>
scrollWidth:${mainbox.offsetWidth}  scrollHeight:${mainbox.scrollHeight}<br>
offsetTop:${mainbox.offsetTop}  offsetLeft:${mainbox.offsetLeft}`