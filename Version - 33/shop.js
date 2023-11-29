let cs
// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;
}
function c1000(){
  items.clicks = 1000;
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  
  document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`
  document.getElementById('disdog').innerHTML=`You've got ${items.dogs}!`
  document.getElementById('discat').innerHTML=`You've got ${items.cats}!`
  document.getElementById('disfox').innerHTML=`You've got ${items.foxes}!`
  document.getElementById('diswol').innerHTML=`You've got ${items.wolfs}!`
  document.getElementById('disham').innerHTML=`You've got ${items.hamsters}!`
  document.getElementById('diswha').innerHTML=`You've got ${items.whales}!`
  document.getElementById('discap').innerHTML=`You've got ${items.capybaras}!`
  
  
  
  
  
  document.getElementById('dislem').innerHTML=`You've got ${items.lemons}!`
  document.getElementById('dislt3').innerHTML=`You've got ${items.lt3}!`
  
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;
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
    console.log('Added '+one+' wolfs');
  }else if(one>=two){
    items.foxes -= two*5
    items.dogs  -= two*6
    items.wolfs += two
    console.log('Added '+two+' wolfs');
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
    console.log('Added '+one+' hams');
  }else if(one>=two){
    items.wolfs -= two*1
    items.cats  -= two*2
    items.hamsters += two
    console.log('Added '+two+' hams');
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
    console.log('Added '+one+' capps');
  }else if(one>=two){
    items.whales -= two*1
    items.cats  -= two*4
    items.capybaras += two
    console.log('Added '+two+' capps');
  }else{
    console.log('You fucked up you stupid bitch')
  }
  upload();
}