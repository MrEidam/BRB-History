let items
let cs
// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
}

function load(){
  if (localStorage.getItem('items')!=null){
    items = JSON.parse(localStorage.getItem('items'));
  }
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;
  
  document.getElementById('dislm').innerHTML = `You've got ${items.lemons} lemons!`
}
load()

function upload(){
  update();
  load();
}

function cash(){
  setTimeout (function money(){
    items.clicks += cs;
    upload();cash();
    console.log(items.clicks)
  },1000)
}
cash();