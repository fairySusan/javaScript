var btn = document.getElementsByClassName('title');
for(var i=0;i<btn.length;i++){
	btn[i].onclick=function(){
		var panel = this.nextElementSibling;
		this.classList.toggle("active");//检测是否有active类，有就删除，没有就添加
		if(panel.style.maxHeight){
			panel.style.maxHeight = null;
		}else{
			panel.style.maxHeight = panel.scrollHeight+'px';
		}
	}
}