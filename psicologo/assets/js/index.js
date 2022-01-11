let plantao = document.querySelector('.col-sm-4.col-md-4.col-lg-4.plantao');
let p1 = document.getElementById('p1');
let agende = document.querySelector('.col-sm-4.col-md-4.col-lg-4.agende');
let p2 = document.getElementById('p2');
let match = document.querySelector('.col-sm-4.col-md-4.col-lg-4.match');
let p3 = document.getElementById('p3');

plantao.addEventListener('mouseover', () => {
  p1.classList.add('btn-green');
});
plantao.addEventListener('mouseout', () => {
  p1.classList.remove('btn-green');
});

agende.addEventListener('mouseover', () => {
  p2.classList.add('btn-green');
});
agende.addEventListener('mouseout', () => {
  p2.classList.remove('btn-green');
});

match.addEventListener('mouseover', () => {
  p3.classList.add('btn-green');
});
match.addEventListener('mouseout', () => {
  p3.classList.remove('btn-green');
});