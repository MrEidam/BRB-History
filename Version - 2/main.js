var count = 0;
window.onload = function(){
	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var button = document.getElementById('button1');
	button.ontouchstart = function(){
		red.style.visibility='hidden';
		green.style.visibility='visible'
		count++;
		  document.getElementById('clicks').innerHTML=count;
	}
	button.ontouchend=function(){
		red.style.visibility='visible';
		green.style.visibility='hidden'
	}
}
