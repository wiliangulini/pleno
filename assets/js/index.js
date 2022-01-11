if(screen.width <= 1023) {
   
  let pointOne = document.getElementById('p1');
  let btnOne = document.querySelector('.buttonInt.one a.btn-yellow');
  let pointTwo = document.getElementById('p2');
  let btnTwo = document.querySelector('.buttonInt.two a.btn-yellow');
  let pointThree = document.getElementById('p3');
  let btnThree = document.querySelector('.buttonInt.three a.btn-yellow');

  p1.addEventListener('click', () => {
    if(btnOne.classList.contains('d-flex') == true) {
      btnOne.classList.remove('d-flex');
      p1.setAttribute('src','assets/images/menu-vertical/points.webp');
    } else {
      p1.setAttribute('src','assets/images/menu-vertical/pointsGreen.webp');
      btnOne.classList.add('d-flex');
    }
  });

  p2.addEventListener('click', () => {
    if(btnTwo.classList.contains('d-flex') == true) {
      btnTwo.classList.remove('d-flex');
      p2.setAttribute('src','assets/images/menu-vertical/points.webp');
    } else {
      p2.setAttribute('src','assets/images/menu-vertical/pointsGreen.webp');
      btnTwo.classList.add('d-flex');
    }
  });

  p3.addEventListener('click', () => {
    if(btnThree.classList.contains('d-flex') == true) {
      btnThree.classList.remove('d-flex');
      p3.setAttribute('src','assets/images/menu-vertical/points.webp');
    } else {
      p3.setAttribute('src','assets/images/menu-vertical/pointsGreen.webp');
      btnThree.classList.add('d-flex');
    }
});

}