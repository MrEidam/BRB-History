var items = {
			clicks: 0,
			dogs: 0,
			cats: 0,
		};

var user = {
	device: function(){return (/Android|iPhone/i.test(navigator.userAgent));},/* true for mobiles */
	
	setkeys: function(){
		if(user.device()){
			document.getElementById('button1').ontouchstart=function(){button.press()};document.getElementById('button1').ontouchend=function(){button.unpress()}
		}else{document.getElementById('button1').onmousedown=function(){button.press()};document.getElementById('button1').onmouseup=function(){button.unpress()};};},
	
};

var button = {
	
	press: function(){
		game.click();
			document.getElementById('unpressed').style.visibility = 'hidden';
			document.getElementById('pressed').style.visibility = 'visible';
	},
	
	unpress: function(){
			document.getElementById('unpressed').style.visibility = 'visible';
			document.getElementById('pressed').style.visibility = 'hidden';
	},
};

var ui = {
	updateitems: function(){document.getElementById('clicks').innerHTML='clicks: ' + items.clicks + ', ' + ' dogs: ' + items.dogs + ', ' + 'cats: ' + items.cats;
	localStorage.setItem('items',JSON.stringify(items))}
	
}



var game = {
	loaditems: function(){
		items = JSON.parse(localStorage.getItem('items'));
	},
	
	reset: function(){if(confirm('are you sure you want to reset all your progress')){items={clicks: 0,dogs: 0,cats: 0,};ui.updateitems();}},
	
	click: function(){items.clicks+=1;ui.updateitems();},
	
	dog: function(){if(items.clicks>=100){items.dogs+=1;items.clicks-=100;ui.updateitems();}},
	
	cat: function(){if(items.dogs>=20){items.cats+=1;items.dogs-=20;ui.updateitems();}},
};

window.onload = function(){
	user.setkeys();
	
	if (localStorage.getItem('items')!=null){game.loaditems();};
	
	ui.updateitems();
};
