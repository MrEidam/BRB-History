// Items
let items;
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
  hamsters:0, 
  whales:0, 
  capybaras:0, 
  
  lemons:0, 
  lt3:0, 
}
  load();
  update();
  fix();
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
        hamsters:0, 
        whales:0, 
        capybaras:0, 
        
        lemons:0, 
        lt3:0,
      }
    }
  }
}
// Fix for NaN
function nanfix(){if(items.clicks===NaN){items.clicks=0}if(items.dogs===NaN){items.dogs=0}if (items.cats === NaN){items.cats = 0}if(items.foxes === NaN){items.foxes = 0}if(items.wolfs === NaN){items.wolfs = 0}if(items.hamsters === NaN){items.hamsters = 0}if(items.whales === NaN){items.whales = 0}if(items.capybaras === NaN){items.capybaras = 0}if(items.lemons === NaN){items.lemons = 0}if(items.lt3 === NaN){items.lt3 = 0}}

// Fix for undefined 
function unfix(){if(items.clicks===undefined){items.clicks=0}if(items.dogs===undefined){items.dogs=0}if (items.cats === undefined){items.cats = 0}if(items.foxes === undefined){items.foxes = 0}if(items.wolfs === undefined){items.wolfs = 0}if(items.hamsters === undefined){items.hamsters = 0}if(items.whales === undefined){items.whales = 0}if(items.capybaras === undefined){items.capybaras = 0}if(items.lemons === undefined){items.lemons = 0}if(items.lt3 === undefined){items.lt3 = 0}}

function fix(){
  nanfix();unfix();
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
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;
    items.clicks += cs;
    update();cash();fix();
  },1000)
}
cash();fix();
