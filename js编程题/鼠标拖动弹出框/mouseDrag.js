 el.onmousedown=function(ev){
     //ev.clientX是鼠标点击的位置，el是元素，el.offsetLeft是元素离浏览器左边的距离
              var disX=ev.clientX-el.offsetLeft;
              var disY=ev.clientY-el.offsetTop;
              el.style.cursor="default";
              var parent = el.parentNode;
              console.log(el.clientWidth);
                document.onmousemove=function(ev){
                  var l = ev.clientX-disX;
                  var t = ev.clientY-disY;
                  var leftEdge = parent.clientWidth-el.clientWidth;
                  if(l<=0){
                    el.style.left=0+'px';
                  }else if(l>=leftEdge){
                    el.style.left = leftEdge;
                  } else{
                    el.style.left = l+'px';
                  }
                 
                 
                  
                  if(t<=0){
                    el.style.top = 0+'px';
                  }else{
                    el.style.top = t+'px';
                  }
                }
                document.onmouseup=function(){
                  document.onmousemove=null;
                  document.onmouseup=null;
                }
            }