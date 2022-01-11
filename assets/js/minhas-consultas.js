let arrow = document.getElementById('arrow');
let down = document.querySelector('.down');

let downStatus = () => {
  
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
  document.getElementById("value").innerHTML = txt;
  downStatus();
}

document.querySelector(".ls-select.status").addEventListener("click", () => {
  downStatus();
});


//minhas consultas - tabela - click drodown manual

let line = (e) => {
  
  let IDlinha = e.id;
  let divLinha = document.getElementById(IDlinha);
  let divExt = document.querySelector('.'+ IDlinha + '.ext');

  if(divExt.style.display == 'block') {
    divExt.style.display = 'none';
    divLinha.classList.remove('select');
  } else {
    divLinha.classList.add('select');
    divExt.style.display = 'block';
  }

  let table = document.getElementById('table');

  table.addEventListener('click', (mouse) => {
    let x = mouse.pageX;
    let y = mouse.pageY;

    divExt.style.top = y + 'px';
    divExt.style.left = x + 'px';

  });
  
}



/*
let twoS = document.getElementById('two');
let ext2 = document.querySelector('#two .ext');

twoS.addEventListener('click', () => {
  if(ext2.style.display == 'block') {
    ext2.style.display = 'none';
    twoS.classList.remove('select');
    twoS.style.position = 'static';
  } else {
    twoS.style.position = 'relative';
    twoS.classList.add('select');
    ext2.style.display = 'block';
  }
});


let threeS = document.getElementById('three');
let ext3 = document.querySelector('#three .ext');

threeS.addEventListener('click', () => {
  if(ext3.style.display == 'block') {
    ext3.style.display = 'none';
    threeS.classList.remove('select');
    fourS.style.position = 'static';
  } else {
    threeS.style.position = 'relative';
    threeS.classList.add('select');
    ext3.style.display = 'block';
  }
});


let fourS = document.getElementById('four');
let ext4 = document.querySelector('#four .ext');

fourS.addEventListener('click', () => {
  if(ext4.style.display == 'block') {
    ext4.style.display = 'none';
    fourS.classList.remove('select');
    fourS.style.position = 'static';
  } else {
    fourS.style.position = 'relative';
    fourS.classList.add('select');
    ext4.style.display = 'block';
  }
});*/
