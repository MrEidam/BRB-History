var count = 0;
window.onload = function(){
	count = localStorage.getItem('count');
	document.getElementById('clicks').innerHTML=count;
	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var button = document.getElementById('button1');
	button.ontouchstart = function(){
		red.style.visibility='hidden';
		green.style.visibility='visible'
		count++;
		localStorage.setItem('count',count);
		  document.getElementById('clicks').innerHTML=count;
	}
	button.ontouchend=function(){
		red.style.visibility='visible';
		green.style.visibility='hidden'
	}
}
function reset(){
	localStorage.removeItem('count');
	count=0;
	document.getElementById('clicks').innerHTML=count;
}