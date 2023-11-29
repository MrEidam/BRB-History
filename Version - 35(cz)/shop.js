let cs
// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;
}
function c(x){
  items.clicks += x;
  console.log(x + ' clicks added!');
  upload();
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  
  document.getElementById('disclick').innerHTML=`Právě máš ${items.clicks} kliků a děláš ${cs} k/s!`
  document.getElementById('disdog').innerHTML=`Právě máš ${items.dogs} psů!`
  document.getElementById('discat').innerHTML=`Právě máš ${items.cats} koček!`
  document.getElementById('disfox').innerHTML=`Právě máš ${items.foxes} lišek!`
  document.getElementById('diswol').innerHTML=`Právě máš ${items.wolfs} vlků!`
  document.getElementById('disham').innerHTML=`Právě máš ${items.hamsters} křečků!`
  document.getElementById('diswha').innerHTML=`Právě máš ${items.whales} velryb!`
  document.getElementById('discap').innerHTML=`Právě máš ${items.capybaras} kapybar!`
  document.getElementById('displa').innerHTML=`Právě máš ${items.platapuses} plakopysků!`
  
  
  
  
  document.getElementById('dislem').innerHTML=`Právě máš ${items.lemons} citrónů!`
  document.getElementById('dislt3').innerHTML=`Právě máš ${items.lt3} citronovníků!`
  
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;

  document.getElementById('disdgmake').innerHTML=`Generují ${items.dogs*1} kliků za sekundu!`
  document.getElementById('disctmake').innerHTML=`Generují ${items.cats*12} kliků za sekundu!`
  document.getElementById('disfxmake').innerHTML=`Generují ${items.foxes*18} kliků za sekundu!`
  document.getElementById('diswlmake').innerHTML=`Generují ${items.wolfs*100} kliků za sekundu!`
  document.getElementById('dishmmake').innerHTML=`Generují ${items.hamsters*130} kliků za sekundu!`
  document.getElementById('diswhmake').innerHTML=`Generují ${items.whales*220} kliků za sekundu!`
  document.getElementById('discpmake').innerHTML=`Generují ${items.capybaras*280} kliků za sekundu!`
  document.getElementById('displmake').innerHTML=`Generují ${items.platapuses*400} kliků za sekundu!`
}
load();

function upload(){
  update();
  load();
}

function cash(){
  setTimeout (function money(){
    items.clicks += cs;
    upload();
    cash();
  },1000)
}
cash();

// Nákupy 
function buydog(){
  if (items.clicks>=100){
    items.clicks -= 100;
    items.dogs += 1;
  }
  upload();
}
function buycat(){
  if(items.dogs>=10){
    items.dogs-=10;
    items.cats+=1;
  }
  upload();
}
function buyfox(){
  if(items.dogs>=15){
    items.dogs-=15;
    items.foxes+=1;
  }
  upload();
}
function buywol(){
  if(items.dogs>=6 && items.foxes>=5){
    items.dogs-=6;
    items.foxes-=5;
    items.wolfs+=1;
  }
  upload();
}
function buyham(){
  if(items.wolfs>=1 && items.cats>=2){
    items.wolfs-=1;
    items.cats-=2;
    items.hamsters+=1;
  }
  upload();
}
function buywha(){
  if(items.wolfs>=2){
    items.wolfs-=2;
    items.whales+=1;
  }
  upload();
}
function buycap(){
  if(items.whales>=1 && items.cats>=4){
    items.whales-=1;
    items.cats-=4;
    items.capybaras+=1;
  } 
  upload();
}
function buypla(){
  if(items.capybaras>=1 && items.wolfs>=1){
    items.capybaras-=1;
    items.wolfs-=1;
    items.platapuses+=1;
  } 
  upload();
}




function buylem(){
  if(items.cats>=10){
    items.cats-=10;
    items.lemons+=1;
  }
  upload();
}
function buylt3(){
  if (items.lemons>=5) {
    items.lemons-=5;
    items.lt3+=1;
  }
  upload();
}
/* Max Shop */
function mxdg(){
  one = Math.floor(items.clicks / 100)
  
  items.clicks -= one * 100
  items.dogs += one
  upload();
}
function mxct(){
  one = Math.floor(items.dogs / 10)
  
  items.dogs -= one * 10
  items.cats += one
  upload();
}
function mxfx(){
  one = Math.floor(items.dogs/15)
 
  items.dogs -= one*15
  items.foxes += one
  upload();
}
/*
function lemmvalue(){
  mdog = items.cats/20;
  maxdog = Math.floor(mdog);
  floordog = maxdog*20
  items.cats -= floordog
  items.lemons += maxdog 
  upload();
}*/
function mxlm(){
  one = Math.floor(items.cats/20)
  
  items.cats   -= one*20
  items.lemons += one
  upload();
}
function mxlt(){
  one = Math.floor(items.lemons/5)
  
  items.lemons -= one*5
  items.lt3 += one
  upload()
}
function mxwh(){
  one = Math.floor(items.wolfs/2)
  
  items.wolfs -= one*2
  items.whales += one
  upload()
}
let one,two,val

// Max Wolf 

function mxwl(){
  one = Math.floor(items.foxes/5)
  two = Math.floor(items.dogs/6)
  
  if(one<=two){
    items.foxes -= one*5
    items.dogs  -= one*6
    items.wolfs += one
  }else if(one>=two){
    items.foxes -= two*5
    items.dogs  -= two*6
    items.wolfs += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}

function mxhm(){
  one = Math.floor(items.wolfs/1)
  two = Math.floor(items.cats/2)
  
  if(one<=two){
    items.wolfs -= one*1
    items.cats  -= one*2
    items.hamsters += one
  }else if(one>=two){
    items.wolfs -= two*1
    items.cats  -= two*2
    items.hamsters += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxcp(){
  one = Math.floor(items.whales/1)
  two = Math.floor(items.cats/4)
  
  if(one<=two){
    items.whales -= one*1
    items.cats  -= one*4
    items.capybaras += one
  }else if(one>=two){
    items.whales -= two*1
    items.cats  -= two*4
    items.capybaras += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}
function mxpl(){
  one = Math.floor(items.capybaras/1)
  two = Math.floor(items.wolfs/1)
  
  if(one<=two){
    items.capybaras -= one*1
    items.wolfs  -= one*1
    items.platapuses += one
  }else if(one>=two){
    items.capybaras -= two*1
    items.wolfs  -= two*1
    items.platapuses += two
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}