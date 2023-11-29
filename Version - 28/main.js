// Items
var items;
var cs = 0;
var anime = false;

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }
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


function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

function reset(){
  if(confirm('Do you really want to reset everything?')){
    if(confirm('Are you sure?')){
      alert('Everyting Reseted');
      items = {
        clicks:0,
        dogs:0, 
        cats:0, 
        foxes:0, 
        wolfs:0, 
        lemons:0, 
        lt3:0,
        
      }
    }
  }
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`
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


function cash(){
  setTimeout (function money(){
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*97;
    items.clicks += cs;
    update();
    cash();
  },1000)
}
cash();
