
window.onload = function(){
	start();
}
var count = 0;
function start(){
	if (localStorage.getItem('count')==undefined) {count=0;}else{count = localStorage.getItem('count');}
	
	document.getElementById('clicks').innerHTML=count;
	
	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var button = document.getElementById('button1');
	if (/Android|iPhone/i.test(navigator.userAgent)) {

  button.ontouchstart = function(){
		count++;
		localStorage.setItem('count',count);
		  document.getElementById('clicks').innerHTML=count;
		red.style.visibility='hidden';
		green.style.visibility='visible';
}
	button.ontouchend = function(){
		red.style.visibility='visible';
		green.style.visibility='hidden';
	}
}else{
	button.onmousedown = function(){
		console.log('click');
		count++;
		localStorage.setItem('count',count);
		  document.getElementById('clicks').innerHTML=count;
	 red.style.visibility='hidden';
		green.style.visibility='visible';
	}
	button.onmouseup = function(){
		red.style.visibility='visible';
		green.style.visibility='hidden'
	}
}
	function reset(){
	localStorage.removeItem('count');
	start();
	}
}