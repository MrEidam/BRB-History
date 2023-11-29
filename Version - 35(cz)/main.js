// Items
let items;
var cs = 0;
let e = 0;
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
    platapuses:0,
    porcupines:0,
    hippos:0,
    snakes:0,
    cheetahs:0,
    pythons:0,
    girrafes:0,
    lions:0,
    
    lemons:0, 
    lt3:0,
  }
  load();
  update();
  for(let item in items){
    if(!items.item) items.item = 0;
  }
  cash();
}

// Reset
function reset(){
  if(confirm('Vážně chceš všechno resetovat?')){
    if(confirm('Seš si jistý?')){
      alert('Vše resetováno');
      items = {
        clicks:0,
        dogs:0, 
        cats:0, 
        foxes:0, 
        wolfs:0, 
        hamsters:0, 
        whales:0, 
        capybaras:0, 
        platapuses:0,
        porcupines:0,
        hippos:0,
        snakes:0,
        cheetahs:0,
        pythons:0,
        girrafes:0,
        lions:0,
        
        lemons:0, 
        lt3:0,
      }
      upg = {
        mememode: false,
        autobuydog: false,
      }
    }
  }
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  document.getElementById('disclick').innerHTML=`Právě máš ${items.clicks} kliků a generuješ ${cs} k/s!`
}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

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
    update();cash();
  },1000)
}

// HELP
function help(){
  e++
  if(e==1){
    alert('Klikni na tlačítko aby si získal \"Kliky\"!');
    alert('Klikni na mě pro více informací...');  
  }
  if(e==2){
    alert('Po 100 klicích klikni na odkaz nahoře, aby tě vzal do obchodu!');
    alert('Klikni na mě pro více informací. .');  
  }
  if(e==3){
    alert('V obchodě klikni na koupení psa');
    e=0;
  }
}
