var sliderIndex =1;//代表图片序号
showSlider();
function showSlider(){
	var isSlide = 1;//鼠标点击停止还是播放的flag，1：播放，0：停止
	var slides = document.getElementsByClassName('slider-img');
	var dots = document.getElementsByClassName('dot');
	if(sliderIndex>slides.length) sliderIndex = 1;
	if (sliderIndex<1) sliderIndex = slides.length;
	for(var i=0;i<slides.length;i++){
		slides[i].style.display='none';
	}
	for(var j=0;j<dots.length;j++){
		dots[j].className = dots[j].className.replace(" active","");
	}
	slides[sliderIndex-1].style.display = 'block';
	dots[sliderIndex-1].className += " active";
	sliderIndex++;
	var timer = setTimeout(showSlider,2000);
	slides[sliderIndex-1].onclick = function(){
		if(isSlide){
			setTimeout(showSlider,2000);
			isSlide = 0;
		}else{
			clearTimeout(timer);
			isSlide = 1;
		}
	}
}