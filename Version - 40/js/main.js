// Items
let items;
let cs = 0;
let e = 0;
let anime = false;

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
    otters:0,
    meerkat:0, 
    raccoon:0, 
    owl:0, 
    badger:0, 
    squirrel:0, 
    chameleon:0, 
    chicken:0, 
    wombat:0, 
    panther:0, 
    coyote:0, 
    frog:0, 
    bear:0, 
    pig:0, 


    
    lemons:0, 
    lt3:0,
    lang:0,
    pres:1,
    mode:0,
    Mclick:1,
    token:0,
  }
  load();
  update();
  for(let item in items){
    if(!items.item){
      items.item = 0;
    }
  }
  cash();
  checklang()
  LDmodes()
}

// Reset
function reset(){
  if((items.lang == 1) && confirm('Do you really want to reset everything?') && confirm('Are you sure?')){
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
      otters:0,
      meerkat:0, 
      raccoon:0, 
      owl:0, 
      badger:0, 
      squirrel:0, 
      chameleon:0, 
      chicken:0, 
      wombat:0, 
      panther:0, 
      coyote:0, 
      frog:0, 
      bear:0, 
      pig:0, 
  
  
      
      lemons:0, 
      lt3:0,
      lang:items.lang,
      pres:1,
      mode:items.mode,
      Mclick:1,
      token:0,
    }
  }
  if((items.lang == 0) && confirm('Vážně chceš všechno resetovat?') && confirm('Seš si jistý?')){
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
      otters:0,
      meerkat:0, 
      raccoon:0, 
      owl:0, 
      badger:0, 
      squirrel:0, 
      chameleon:0, 
      chicken:0, 
      wombat:0, 
      panther:0, 
      coyote:0, 
      frog:0, 
      bear:0, 
      pig:0, 


      
      lemons:0, 
      lt3:0,
      lang:items.lang,
      pres:1,
      mode:items.mode,
      Mclick:1,
      token:0,
    }
  }
}

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  if(items.lang == 1){
    document.getElementById('disclick').innerHTML=`You've got ${fornum(items.clicks)} clicks, and generating ${fornum(cs*items.pres)} c/s!`
  }
  if(items.lang == 0){
    document.getElementById('disclick').innerHTML=`Právě máš ${fornum(items.clicks)} kliků a generuješ ${fornum(cs*items.pres)} k/s!`
  }
  if((items.mode != 0)&&(items.mode != 1)){
    items.mode = 0;
  }
  checklang();
}

// Upload
function upload(){update();load();}

// BRB
function beriba(){
  document.getElementById('unpressed').style.visibility='visible'
  document.getElementById('pressed').style.visibility='hidden'
  anime=true;
}

function clicking(){
  items.clicks += 1*(items.Mclick||1)*items.pres;
  console.log(items.clicks);
  update();
  
  document.getElementById('unpressed').style.visibility='hidden'
  document.getElementById('pressed').style.visibility='visible'
  anime=false;
    
  setTimeout(beriba, 75);
}

function cash(){
  setTimeout (function money(){
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400 + items.porcupines*650 + items.hippos*950 + items.snakes*1000 + items.cheetahs*3000 + items.pythons*7800 + items.girrafes*8400 + items.otters*9000 + items.meerkat*9800 + items.raccoon*14500 + items.owl*16000;
    items.clicks += cs*items.pres;
    update();cash();
  },1000)
}

// HELP
function help(){
  if(items.lang == 1){ /* EN */
    window.open('https://youtu.be/G0fP-l-05dM');
  }else if(items.lang == 0){ /* CZ */
    window.open('https://youtu.be/XhmETe4MSVI');
  }
}
// Languages Cz || Uk
function language(){
  if(items.lang == 0){ /* CZ */
    items.lang = 1;
    console.log(items.lang);
    document.documentElement.setAttribute('lang', 'cz');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Pomoc';
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    modes.innerHTML = 'Změn do Temného módu';
    langs.innerHTML = 'Switch into English';

  }else if(items.lang == 1){ /* UK */
    items.lang = 0;
    console.log(items.lang);
    document.documentElement.setAttribute('lang', 'en');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Help';
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    modes.innerHTML = 'Switch into Dark Mode';
    langs.innerHTML = 'Změň si jazyk do Češtiny';
  }
  upload();
}

function checklang(){
  if(items.lang == 0){ /* CZ */
    document.documentElement.setAttribute('lang', 'cz');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Pomoc';
    shop.innerHTML = 'Obchod';
    upg.innerHTML = 'Vylepšení';
    if((items.mode||0) == 0){
      modes.innerHTML = 'Změn do Temného módu';
    }else if(items.mode == 1){
      modes.innerHTML = 'Změn do Světlého módu';
    }
    langs.innerHTML = 'Switch into English';
  }else if(items.lang == 1){ /* UK */
    document.documentElement.setAttribute('lang', 'en');
    del.innerHTML = 'Reset';
    sos.innerHTML = 'Help';
    shop.innerHTML = 'Shop';
    upg.innerHTML = 'Upgrades';
    if((items.mode||0) == 0){
      modes.innerHTML = 'Switch into Dark Mode';
    }else if(items.mode == 1){
      modes.innerHTML = 'Switch into Light Mode';
    }
    langs.innerHTML = 'Změň si jazyk do Češtiny';
  
}
}
// Dark || Light Mode
function SLDmodes(){
  if(items.mode == 0){
    items.mode = 1;
  }else if(items.mode == 1){
    items.mode = 0;
  }
  LDmodes()
  console.log(items.mode);
}
function LDmodes(){
  if((items.mode||0) == 0){// Light Mode
    body.style.background = '#fff';
    tycoon.style.background = 'radial-gradient(125% 100% at 50% 0%,#9aff9a 20%,#fff 70%)';
    yt.style.filter = 'drop-shadow(10px 8px 6px #333)';
  }else if(items.mode == 1){// Dark Mode
    body.style.background = '#333';
    tycoon.style.background = 'radial-gradient(125% 100% at 50% 0%,#9aff9a 20%,#333 70%)';
    yt.style.filter = 'drop-shadow(10px 8px 6px #666)';
  }
  upload();
}


// Function to convert a number into a more readable format
function fornum(num) {
  // Define the suffixes for thousands and millions
  const suffixes = ['', ' k', ' mil', ' mld', ' bil', ' bld', ' tri', ' tld', ' qua', ' qld', ' kvi', ' kld', ' sex', ' sld', ' sep', ' spld', ' okt', ' okld', ' non', ' nld', ' dec', ' dld'];

  // Divide the number by 1000 until it is less than 1000
  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }
  num = Math.floor(num * 10) / 10;
  return num + suffixes[i];
}