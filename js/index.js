var oDiv = document.getElementsByClassName('container')[0];
var oBtn = document.getElementById('menul');
var oMenu = document.getElementsByClassName('menuD')[0];
var flag = true;
var aLi = document.getElementsByTagName('li');

oDiv.onclick = function() {
	var iSpeet = -80;
	if(oDiv.offsetLeft - 80 < -6400){
		oDiv.style.left = -6400 + 'px';
	}else{oDiv.style.left = oDiv.offsetLeft + iSpeet + 'px';}
	
	console.log(oDiv.style.left);
}
oBtn.onclick = function(){
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
	
}
aLi[1].onclick = function (){ 
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
oDiv.style.left = -400 + 'px';
console.log(oDiv.style.left);
}
aLi[2].onclick = function (){ 
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
oDiv.style.left = -800 + 'px';
console.log(oDiv.style.left);
}
aLi[3].onclick = function (){ 
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
oDiv.style.left = -1200 + 'px';
console.log(oDiv.style.left);
}
aLi[4].onclick = function (){ 
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
oDiv.style.left = -1600 + 'px';
console.log(oDiv.style.left);
}
aLi[5].onclick = function (){ 
	if(flag){oMenu.style.display = 'inline-block';
	flag = false;}else{
	oMenu.style.display = 'none';	
	flag = true;
	}
oDiv.style.left = -2000 + 'px';
console.log(oDiv.style.left);
}
