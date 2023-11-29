var cs = 0;
var mdog = 0;
var maxdog = 0;

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  document.getElementById('disclick').innerHTML=`You've got ${items.clicks} clicks, and generating ${cs} c/s!`
  document.getElementById('disdog').innerHTML=`You've got ${items.dogs} dogs!`
  document.getElementById('discat').innerHTML=`You've got ${items.cats} cats!`
  document.getElementById('disfox').innerHTML=`You've got ${items.foxes} foxes!`
  document.getElementById('diswol').innerHTML=`You've got ${items.wolfs} wolfs!`
  document.getElementById('disham').innerHTML=`You've got ${items.hamsters} hamsters!`
  document.getElementById('diswha').innerHTML=`You've got ${items.whales} whales!`
  
  
  
  
  
  document.getElementById('dislem').innerHTML=`You've got ${items.lemons} lemons!`
  document.getElementById('dislt3').innerHTML=`You've got ${items.lt3} L. trees!`
}
load();

function upload(){
  update();
  load();
}

function cash(){
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220;
  upload();
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

function mmdog(){
    while (maxdog>0) {
    buydog();
    maxdog--;
  }
}
var floordog =0
function dogmvalue(){
  mdog = items.clicks/100;
  maxdog = Math.floor(mdog);
  floordog = maxdog*100
  items.clicks -= floordog
  items.dogs += maxdog 
  upload();
  mdog = 0
  floordog = 0
  maxdog = 0
}
function catmvalue(){
  mdog = items.dogs/10;
  maxdog = Math.floor(mdog);
  floordog = maxdog*10
  items.dogs -= floordog
  items.cats += maxdog 
  upload();
  mdog = 0
  floordog = 0
  maxdog = 0
}
function foxmvalue(){
  mdog = items.dogs/15;
  maxdog = Math.floor(mdog);
  floordog = maxdog*15
  items.dogs -= floordog
  items.foxes += maxdog 
  upload();
  mdog = 0
  floordog = 0
  maxdog = 0
}