// Items
var items

var anime = false

function load(){
  items = JSON.parse(localStorage.getItem('items'));
}

function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

window.onload = function(){
  items = {
  clicks:0,
  dogs:0, 
  cats:0, 
  foxes:0, 
  wolfs:0, 
  lemons:0, 
  lt3:0, 
}
  load();
  update();
}



// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  document.getElementById('disclick').innerHTML=`You've clicked ${items.clicks} times!`
}


// Clicks

// BRB
function clicking(){
  items.clicks += 1;
  update();
  
  document.getElementById('unpressed').style.visibility='hidden'
  document.getElementById('pressed').style.visibility='visible'
  anime=false;
    
  setTimeout(beriba, 75)
}