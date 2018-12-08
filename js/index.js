var oDiv = document.getElementsByClassName('container')[0];
var oInner = document.getElementsByClassName('inner')[0];
var oBtn = document.getElementById('menul');
var oMenu = document.getElementsByClassName('menuD')[0];
var flag = true;
var aLi = document.getElementsByTagName('li');
var startX, //触摸时的坐标   
	x, //滑动的距离     
	leftX = 0; // 设一个全局变量记录上一次内部块滑动的位置   
function touchStart(e) { //触摸开始   
	e.preventDefault();
	var touch = e.touches[0];
	startX = touch.pageX; //刚触摸时的坐标                          
}

function touchMove(e) { //滑动   
	e.preventDefault();
	var touch = e.touches[0];
	x = touch.pageX - startX; //滑动的距离                                             
	oInner.style.left = leftX + x + "px";
	////               document.getElementById("spText").innerHTML=inner.style.left;      
	//                          
	//                                
}

function touchEnd(e) { //手指离开屏幕                            
	leftX = parseInt(oInner.style.left); //touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字;   
	if(x > 0 && leftX > 0) { //当滑动到最左侧时候不能再往左滑动   
		oInner.style.left = 0;
		//                oInner.animate({left:0},200);   
		leftX = 0;
	}

	if(x < 0 && leftX < (-8250)) { //当滑动到最右侧时候不能再往右滑动   
		oInner.style.left = -8250 + "px";
		//                    $("#inner").animate({left:-(documentWidth-wapperWidth)},200);   
		leftX = -8250;
	}
}
oDiv.addEventListener('touchstart', touchStart, false);
oDiv.addEventListener('touchmove', touchMove, false);
oDiv.addEventListener('touchend', touchEnd, false);

oBtn.onclick = function() {

	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}

}
aLi[1].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = 0 + 'px';
	console.log(oInner.style.left);
}
aLi[2].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -375 + 'px';

}
aLi[3].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -1125 + 'px';
}
aLi[4].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -1500 + 'px';

}
aLi[5].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -2250 + 'px';
}
aLi[6].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -2625 + 'px';
}
aLi[7].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -3375 + 'px';
}
aLi[8].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -4125 + 'px';
}
aLi[9].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -4500 + 'px';
}
aLi[10].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -5625 + 'px';
}
aLi[11].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -6000 + 'px';
}
aLi[12].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -6750 + 'px';
}

aLi[13].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -7125 + 'px';
}
aLi[14].onclick = function() {
	if(flag) {
		oMenu.style.display = 'inline-block';
		flag = false;
	} else {
		oMenu.style.display = 'none';
		flag = true;
	}
	oInner.style.left = -7875 + 'px';
}
