let cs
let brb = document.getElementById('brb')
let upg = document.getElementById('upg')
let dg1 = document.getElementById('dg1')
let ct1 = document.getElementById('ct1')
let fx1 = document.getElementById('fx1')
let wl1 = document.getElementById('wl1')
let hm1 = document.getElementById('hm1')
let wh1 = document.getElementById('wh1')
let cp1 = document.getElementById('cp1')
let pl1 = document.getElementById('pl1')
let lm1 = document.getElementById('lm1')
let lt1 = document.getElementById('lt1')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
// Update
function update(){
  let i = JSON.stringify(items);
  localStorage.setItem('items', i);
  cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280 + items.platapuses*400;
}
function c(x){
  items.clicks += x;
  console.log(x + ' clicks added!');
  upload();
}

// Load
function load(){
  items = JSON.parse(localStorage.getItem('items'));
  if(items.lang == 1){
    document.getElementById('disclick').innerHTML=`You've got ${fornum(items.clicks)} clicks, and making ${fornum(cs)} c/s!`
    document.getElementById('disdog').innerHTML=`You've got ${fornum(items.dogs)} dogs!`
    document.getElementById('discat').innerHTML=`You've got ${fornum(items.cats)} cats!`
    document.getElementById('disfox').innerHTML=`You've got ${fornum(items.foxes)} foxes!`
    document.getElementById('diswol').innerHTML=`You've got ${fornum(items.wolfs)} wolfs!`
    document.getElementById('disham').innerHTML=`You've got ${fornum(items.hamsters)} hamsters!`
    document.getElementById('diswha').innerHTML=`You've got ${fornum(items.whales)} whales!`
    document.getElementById('discap').innerHTML=`You've got ${fornum(items.capybaras)} capybaras!`
    document.getElementById('displa').innerHTML=`You've got ${fornum(items.platapuses)} platypuses!`
    
    
    
    
    document.getElementById('dislem').innerHTML=`You've got ${fornum(items.lemons)} lemons!`
    document.getElementById('dislt3').innerHTML=`You've got ${fornum(items.lt3)} lemon trees!`
    
    cs = items.dogs + items.cats*12 + items.foxes*18 + items.wolfs*100 + items.hamsters*130 + items.whales*220 + items.capybaras*280;

    document.getElementById('disdgmake').innerHTML=`They're generating ${fornum(items.dogs*1)} clicks per second!`
    document.getElementById('disctmake').innerHTML=`They're generating ${fornum(items.cats*12)} clicks per second!`
    document.getElementById('disfxmake').innerHTML=`They're generating ${fornum(items.foxes*18)} clicks per second!`
    document.getElementById('diswlmake').innerHTML=`They're generating ${fornum(items.wolfs*100)} clicks per second!`
    document.getElementById('dishmmake').innerHTML=`They're generating ${fornum(items.hamsters*130)} clicks per second!`
    document.getElementById('diswhmake').innerHTML=`They're generating ${fornum(items.whales*220)} clicks per second!`
    document.getElementById('discpmake').innerHTML=`They're generating ${fornum(items.capybaras*280)} clicks per second!`
    document.getElementById('displmake').innerHTML=`They're generating ${fornum(items.platapuses*400)} clicks per second!`

    brb.innerHTML = 'Go to BRB!'
    upg.innerHTML = 'Go to Upgrades!'
    dg1.innerHTML = 'Buy a Dog for 100 clicks'
    ct1.innerHTML = 'Buy a Cat for 10 dogs'
    fx1.innerHTML = 'Buy a Fox for 15 dogs'
    wl1.innerHTML = 'Buy a Wolf for 6 dogs and 5 foxes'
    hm1.innerHTML = 'Buy a Hamster for 1 wolf and 2 cats'
    wh1.innerHTML = 'Buy a Whale for 2 wolfs'
    cp1.innerHTML = 'Buy a Cappybarra for 1 whale and 4 cats'
    pl1.innerHTML = 'Buy a Platypus for 1 cappybarra and 1 wolf'
    lm1.innerHTML = 'Buy a Lemon for <b style="font-weight: 1000;">some</b> cats'
    lt1.innerHTML = 'Buy a Lemon Tree for 5 lemons'
  }
  if(items.lang == 0){
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

    brb.innerHTML = 'B.R.B.'
    upg.innerHTML = 'Vylepšení'
    dg1.innerHTML = 'Kup Psa za 100 kliků'
    ct1.innerHTML = 'Kup Kočku za 10 psů'
    fx1.innerHTML = 'Kup Lišku za 15 psů'
    wl1.innerHTML = 'Kup Vlka za 6 psů a 5 lišek'
    hm1.innerHTML = 'Kup Křečka za 1 vlka a 2 kočky'
    wh1.innerHTML = 'Kup 1 Velrybu za 2 vlky'
    cp1.innerHTML = 'Kup Kapybaru za <br /> 1 velrybu a 4 kočky'
    pl1.innerHTML = 'Kup Ptakopyska za <br /> 1 capybaru a 1 vlka'
    lm1.innerHTML = 'Kup Citrón za <b style="font-weight: 1000;">pár</b> koček'
    lt1.innerHTML = 'Kup Citrónovník za 5 citrónů'
  }
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

// Function to convert a number into a more readable format
function fornum(num) {
  // Define the suffixes for thousands and millions
  const suffixes = ['', ' k', ' mil', ' mld', ' bil', ' bld', ' tri'];

  // Divide the number by 1000 until it is less than 1000
  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }

  // Round the number to one decimal place
  num = Math.round(num * 10) / 10;

  // Concatenate the number with the appropriate suffix
  return num + suffixes[i];
}












/* SHOPPING WITH ONLY CLICKS */

//cat
function buyCcat(){
  if(items.clicks >= 1200){
    items.cats++;
    items.clicks -= 1200;
    upload();
  }
}
function mxCct(){
  one = Math.floor(items.clicks / 1200)
  
  items.clicks -= one * 1200
  items.cats += one
  upload();
}