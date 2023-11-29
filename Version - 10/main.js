
window.onload = function(){
	start();
}
var count = 0;
function start(){
	if (localStorage.getItem('count')==undefined){
	  count=0;
	}
	else{
	  count = localStorage.getItem('count');
	}
	
	if (localStorage.getItem('dogs')==undefined){
	  dogs=0;
	}
	else{
	  dogs = localStorage.getItem('dogs');
	}
	
	document.getElementById('clicks').innerHTML='Congratulation you\'ve clicked ' + count + ' times!';
	
	document.getElementById('dogs').innerHTML='Congratulations you got ' + dogs + ' dogs!';
	
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
	alert('Clicks and dogs successfully reseted!')
	start();
	}
	
	var dogs=0;
	
function dog(){
  if(count>=100){
    count -= 100;
    dogs++
    alert('Congratulations you\'ve bought a dog🐕');
		localStorage.setItem('dogs',dogs);
		document.getElementById('dogs').innerHTML='Congratulations you got ' + dogs + ' dogs!';
  }
  else{
    alert('You don\' have enough clicks!');
    alert('Tip: Click the button')
  }
}

function bigdog(){
  if(count >=1000){
    count -= 1000;
    
    dogs++
    
    alert('Congratulations you\'ve bought 10 dogs!')
    localStorage.setItem('dogs' ,dogs);
    	document.getElementById('dogs').innerHTML='Congratulations you got ' + dogs + ' dogs!';
  }
  else{
    alert('You don\'t have enough click! Try clicking the button');
  }
}