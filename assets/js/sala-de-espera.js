const progress = document.querySelector('.inputR');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #1F9CB8 0%, #2EA68D ${value}%, #CCFFD4 ${value}%, #CCFFD4 100%)`
})

let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let c0 = document.getElementById('c0');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c_initial = document.getElementById('cardInitial');

btn0.addEventListener('click', () => {
  c0.style.display = "none";
  c1.style.display = "flex";
});

btn1.addEventListener('click', () => {
  c1.style.display = "none";
  c2.style.display = "flex";
});

btn2.addEventListener('click', () => {
  c2.style.display = "none";
  c3.style.display = "flex";
});

btn3.addEventListener('click', () => {
  c3.style.display = "none";
  c_initial.style.display = "none";
  c4.style.display = "flex";
});