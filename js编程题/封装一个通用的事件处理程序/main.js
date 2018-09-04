var EventUtil = {
    addHandler: function(element,type,handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler,false);
        }else{
            element["on"+type] = handler;
        }
    },
    removeHandler: function(element,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null;
        }
    }
}
var btn = document.getElementById('btn');
EventUtil.addHandler(btn,'click',handler);
function handler(){
    alert('123');
}