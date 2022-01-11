if(screen.width <= 1023) {
   
  let pointOne = document.getElementById('p1');
  let btnOne = document.querySelector('.buttonInt.one a.btn-yellow');

  pointOne.addEventListener('click', () => {
    if(btnOne.classList.contains('d-flex') == true) {
      btnOne.classList.remove('d-flex');
      pointOne.setAttribute('src','../assets/images/menu-vertical/points.webp');
    } else {
      pointOne.setAttribute('src','../assets/images/menu-vertical/pointsGreen.webp');
      btnOne.classList.add('d-flex');
    }
  });

}


//expandir
let eight = document.getElementById('eight');
let four = document.getElementById('four');
let expandir = document.getElementById('expandir');

expandir.addEventListener('click', () => {
  if(four.style.display === 'none') {
    menu.click();
    four.style.display = 'flex';
    eight.style.flex = '0 0 66.66667%';
    eight.style.maxWidth = '66.66667%';
  } else {
    menu.click();
    four.style.display = 'none';
    eight.style.flex = '0 0 100%';
    eight.style.maxWidth = '100%';
  }
});