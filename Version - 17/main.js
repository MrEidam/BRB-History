window.onload = function(){
	game.setup();
};

// items
var items = {
			clicks: 0,
			dogs: 0,
			cats: 0,
			lemons: 0,
			
		};

// device
var user = {
	device: function(){return (/Android|iPhone/i.test(navigator.userAgent));},/* true for mobiles */
	
	setkeys: function(){
		if(user.device()){
			document.getElementById('button').ontouchstart=function(){button.press()};document.getElementById('button').ontouchend=function(){button.unpress()}
		}else{document.getElementById('button').onmousedown=function(){button.press()};document.getElementById('button').onmouseup=function(){button.unpress()};};},
	
};

//user interface
var ui = {
	updateitems: function(){
		for (let name in items) {
			document.getElementById('log'+name).innerHTML ='You have ' + name + ': ' + items[name];
		}
		localStorage.setItem('items', JSON.stringify(items))
	},
}

// BRB
var button = {
	press: function(){game.click();document.getElementById('unpressed').style.visibility = 'hidden';document.getElementById('pressed').style.visibility = 'visible';},
	unpress: function(){document.getElementById('unpressed').style.visibility = 'visible';document.getElementById('pressed').style.visibility = 'hidden';},
};

// game functions
var game = {
	loaditems: function(){items = JSON.parse(localStorage.getItem('items'));},
	
	reset: function(){if(confirm('Are you sure you want to reset all your progress?')){items={clicks: 0,dogs: 0,cats: 0,lemons: 0,};ui.updateitems();}},
	
	setup: function(){user.setkeys();if (localStorage.getItem('items')!=null){game.loaditems();};ui.updateitems();},
	
	click: function(){items.clicks+=1;ui.updateitems();},
};

// buy item functions
var buy = {
	dog: function(){if(items.clicks>=100){items.dogs+=1;items.clicks-=100;ui.updateitems();}},
	
	cat: function(){if(items.dogs>=10){items.cats+=1;items.dogs-=10;ui.updateitems();}},
	
	lemon: function(){if(items.cats>=5){items.lemons+=1;items.cats-=5;ui.updateitems();}},
}
