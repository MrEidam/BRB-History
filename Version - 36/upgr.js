let items;
let cs;

// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
}

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }





  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400;
  
  document.getElementById('dislm').innerHTML = `You've got ${items.lemons} lemons!`
}

function upload(){
  update();
  load();
}

function cash(){
  setTimeout (function money(){
    items.clicks += cs;
    upload();cash();
    if(upg.autobuydog === true){
      items.clicks -= Math.floor(items.clicks / 100) * 100
      items.dogs += Math.floor(items.clicks / 100)
      upload();
    }
  },1000)
}


window.onload = function(){
  load();cash();
}