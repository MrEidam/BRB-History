// Items
let items;
var cs = 0;
let e = 0;
var anime = false;
let flag = document.getElementById('flag');
let del = document.getElementById('del');
let sos = document.getElementById('sos');
let shop = document.getElementById('shop');

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
    lang:0,
  }
  load();
  update();
  for(let item in items){
    if(!items.item) items.item = 0;
  }
  cash();
  checklang()
}

// Reset
function reset(){
  if(items.lang == 1){
    if(confirm('Do you really want to reset everything?')){
      if(confirm('Are you sure?')){
        alert('Everything Reseted');
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
          lang:items.lang,
          
          lemons:0, 
          lt3:0,
        }
      }
    }
  }
  if(items.lang == 0){
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
          lang:items.lang,
          
          lemons:0, 
          lt3:0,
        }
      }
    }
  }
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.lang == 0){
    document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`
    flag.src = './img/fg-cz.png'
  }
  if(items.lang == 1){
    document.getElementById('disclick').innerHTML=`Právě máš ${items.clicks} kliků a generuješ ${cs} k/s!`
    flag.src = './img/fg-uk.png'
  }
  checklang();
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
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400;
    items.clicks += cs;
    update();cash();
  },1000)
}

// HELP
function help(){
  e++
  if(e==1){
    alert('Click the button to earn clicks!');
    alert('Click on me for more...');  
  }
  if(e==2){
    alert('After 100 clicks, click the link above to take you to the shop!');
    alert('Click on me for more. .');  
  }
  if(e==3){
    alert('In the shop click on the buy dog button to buy a dog');
    e=0;
  }
}
function language(){
  if(items.lang == 0){ /* CZ */
    items.lang = 1;
    console.log(items.lang);
    del.innerHTML = 'RESET'
    sos.innerHTML = 'POMOC'
    shop.innerHTML = 'Klikni na mě aby ses dostal do Obchodu!'
    document.getElementById('disclick').innerHTML=`Právě máš ${items.clicks} kliků a generuješ ${cs} k/s!`

  }else if(items.lang == 1){ /* UK */
    items.lang = 0;
    console.log(items.lang);
    del.innerHTML = 'RESET'
    sos.innerHTML = 'HELP'
    shop.innerHTML = 'Click me to get to the Shop!'
    document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`

  }
}

function checklang(){
  if(items.lang == 0){ /* CZ */
    del.innerHTML = 'RESET'
    sos.innerHTML = 'POMOC'
    shop.innerHTML = 'Klikni na mě aby ses dostal do Obchodu!'
    document.getElementById('disclick').innerHTML=`Právě máš ${items.clicks} kliků a generuješ ${cs} k/s!`

  }else if(items.lang == 1){ /* UK */
    del.innerHTML = 'RESET'
    sos.innerHTML = 'HELP'
    shop.innerHTML = 'Click me to get to the Shop!'
    document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`

  }
}
