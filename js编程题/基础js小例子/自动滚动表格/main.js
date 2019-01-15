window.onload = function () {
    var tBody = document.getElementById('tbox');
    var tablebox = document.getElementById('tablebox');
    var tempTop = 0;
    setInterval(() => {
        if (tempTop <= - tBody.childElementCount * 33) {
            tempTop = 0;
        } else {
            tempTop -= 1;
        }
        tBody.style.top = tempTop + 'px';
    }, 50);
}

