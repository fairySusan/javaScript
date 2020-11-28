// 对称数的特点 反转过来跟原数字相等
function isSymmetryNum(start,end){
	for(var i=start;i<end+1;i++){
		var iInversionNumber=+(i.toString().split("").reverse().join(""));
		
		if(iInversionNumber===i&&i>10){
			console.log(i);
		}
		
	}
}
isSymmetryNum(1,10000);