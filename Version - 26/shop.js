var a = 1;
function loga(){
  console.log(a);
  a++;
  loga();
}


// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  document.getElementById('disclick').innerHTML=`You've clicked ${items.clicks} times!`
  document.getElementById('disdog').innerHTML=`You've got ${items.dogs} dogs!`
  document.getElementById('discat').innerHTML=`You've got ${items.cats} cats!`
  document.getElementById('disfox').innerHTML=`You've got ${items.foxes} foxes!`
  document.getElementById('diswol').innerHTML=`You've got ${items.wolfs} wolfs!`
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
  items.clicks += items.dogs + items.cats*10 + items.foxes*15;
  
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