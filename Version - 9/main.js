
window.onload = function(){
	start();
}
var count = 0;
function start(){
	if (localStorage.getItem('count')==undefined) {count=0;}else{count = localStorage.getItem('count');}
	
	document.getElementById('clicks').innerHTML='Congratulation you\'ve clicked ' + count + ' times!';
	
	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var button = document.getElementById('button1');
	if (/Android|iPhone/i.test(navigator.userAgent)) {

  button.ontouchstart = function(){
		count++;
		localStorage.setItem('count',count);
		  document.getElementById('clicks').innerHTML='Congratulation you\'ve clicked ' + count + ' times!';
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
		  document.getElementById('clicks').innerHTML=
		  'Congratulation you\'ve clicked ' + count + ' times!';
		  
	 red.style.visibility='hidden';
		green.style.visibility='visible';
	}
	button.onmouseup = function(){
		red.style.visibility='visible';
		green.style.visibility='hidden'
	}
}
	
}

function reset(){
	localStorage.removeItem('count');
	localStorage.removeItem('dogs')
	start();
	}
	
	var dogs=0;
	
function dog(){
 /* if (localStorage.getItem('dogs')==undefined) {dogs=0;}else{dogs = localStorage.getItem('dogs');}
  
  localStorage.setItem('dog' ,dogs);
  document.getElementById('dog').innerHTML='Congratulation you got ' + dogs + ' dogs!'
  if (count>=100) {
    count - 100;
    dogs++;
  } else {
    alert('You don\'t have enough clicks!');
    alert('Click more!')
  }*/
  if(count>=100){
    count -= 100;
    dogs++
    alert('congratulations you\'ve bought a dog🐕');
  }
  else{
    alert('You don\' have enough clicks!');
  }
}