var cs = 0;
let mdog = 0;
let maxdog = 0;

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
  document.getElementById('disdog').innerHTML=`You've got ${items.dogs} dogs!`
  document.getElementById('discat').innerHTML=`You've got ${items.cats} cats!`
  document.getElementById('disfox').innerHTML=`You've got ${items.foxes} foxes!`
  document.getElementById('diswol').innerHTML=`You've got ${items.wolfs} wolfs!`
  document.getElementById('disham').innerHTML=`You've got ${items.hamsters} hamsters!`
  document.getElementById('diswha').innerHTML=`You've got ${items.whales} whales!`
  document.getElementById('discap').innerHTML=`You've got ${items.capybaras} capybaras!`
  
  
  
  
  
  document.getElementById('dislem').innerHTML=`You've got ${items.lemons} lemons!`
  document.getElementById('dislt3').innerHTML=`You've got ${items.lt3} L. trees!`
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
let percent = 50;

function max(item){
  let cost = eval(item + 'Cost');
  let all = [];
  for (let i = 0; i < cost.lenght; i += 2){
    all.push(Math.floor(items[cost[i]]/cost[i + 1]));
  }
  return Math.min.apply(null,all);
}

function buy(item,percent){
  let cost = eval(item + 'Cost');
  let count = perc(item, percent);
  for(let i = 0; i < cost.lenght; i += 2){
    items[cost[i]] -= cost[i+1]*count;
  }
  items[item] += count;
}

function perc(item,count){
  return Math.ceil((max(item)/100)*count);
}

let dogsCost = ["clicks",100]
let catsCost = ["dogs",10]
let foxesCost = ["dogs",15]
let wolfsCost = ["foxes",5,"dogs",6]
let whalesCost = ["wolfs",2]
let hamstersCost = ["wolfs",1,"cats",2]
let lemonsCost = ["cats",20]








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

let floordog = 0;

function dogmvalue(){
  mdog = items.clicks/100;
  maxdog = Math.floor(mdog);
  floordog = maxdog*100
  items.clicks -= floordog
  items.dogs += maxdog 
  upload();
}
function catmvalue(){
  mdog = items.dogs/10;
  maxdog = Math.floor(mdog);
  floordog = maxdog*10
  items.dogs -= floordog
  items.cats += maxdog 
  upload();
}
function foxmvalue(){
  mdog = items.dogs/15;
  maxdog = Math.floor(mdog);
  floordog = maxdog*15
  items.dogs -= floordog
  items.foxes += maxdog 
  upload();
}
function lemmvalue(){
  mdog = items.cats/20;
  maxdog = Math.floor(mdog);
  floordog = maxdog*20
  items.cats -= floordog
  items.lemons += maxdog 
  upload();
}
