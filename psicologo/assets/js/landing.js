
// ls-select

let downEarly = () => {
    
  let arrow = document.getElementById('arrow');
  let down = document.getElementById('down');

  if(down.style.display == "none") {
    document.getElementById('ls-select').style.border = '2px solid #2E9680';
    document.getElementById('ls-select11').style.color = '#2E9680';

    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {
    document.getElementById('ls-select').style.border = '2px solid #848484';
    document.getElementById('ls-select11').style.color = '#848484';

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// funçoes click;
let radiocontainer = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("value").innerHTML = txt;
  downEarly();
}
document.querySelector(".ls-select.status").addEventListener("click", () => {
  downEarly();
});


//ls-select1
let down$ = () => {
    
  let arrow = document.getElementById('arrow1');
  let down = document.getElementById('down1');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// funçoes click;
let radiocontainer1 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("value1").innerHTML = txt;
  down$();
}
document.querySelector("#ls-select1").addEventListener("click", () => {
  down$();
});



//ls-select2
let downMin = () => {
    
  let arrow = document.getElementById('arrow2');
  let down = document.getElementById('down2');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// funçoes click;
let radiocontainer2 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("value2").innerHTML = txt;
  downMin();
}
document.querySelector("#ls-select2").addEventListener("click", () => {
  downMin();
});


let submit = document.getElementById('submit');
let submit1 = document.getElementById('submit2');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');

submit.addEventListener('click', () => {
  c1.style.display = 'none';
  c2.style.display = 'flex';
});

back2.addEventListener('click', () => {
  c2.style.display = 'none';
  c1.style.display = 'flex';
});

submit1.addEventListener('click', () => {
  c2.style.display = 'none';
  c3.style.display = 'flex';
});

back3.addEventListener('click', () => {
  c2.style.display = 'flex';
  c3.style.display = 'none';
});

//upload
let uploadClick = () => {
  let btn = document.getElementById('upload');
  btn.click();
}
let insert = document.getElementById('insert');
let cloud = document.querySelector('.cloud');

insert.addEventListener('click', () => {
  uploadClick();
});

cloud.addEventListener('click', () => {
  uploadClick();
});

let green = (e) => {
  let iden = e.id;
  let txt = document.getElementById('input' + iden);
  txt.style.color = "#2E9680";
}

let remove = (e) => {
  let iden = e.id;
  let txt = document.getElementById('input' + iden);
  txt.style.color = '#848484';
}