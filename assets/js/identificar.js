let continuar = document.getElementById("continuar");
let cardFix = document.getElementById("cardFix");
let cadastro = document.getElementById("cadastro");
let facaLogin = document.getElementById("facaLogin");
let login = document.getElementById("login");
let facaCadastro = document.getElementById("facaCadastro");

if(screen.width <= 768) {
  document.querySelector(".log .facebookImg").setAttribute("src","assets/images/psicologos/facebookMob.webp");

  document.querySelector(".cad .facebookImg").setAttribute("src","assets/images/psicologos/facebookMob.webp");

  continuar.addEventListener("click", () => {
    cardFix.style.display = "none";
    cadastro.style.display = "flex";
  });

}

facaLogin.addEventListener("click", () => {
  cadastro.style.display = "none";
  login.style.display = "flex";
});

facaCadastro.addEventListener("click", () => {
  login.style.display = "none";
  cadastro.style.display = "flex";
});

let cardFixo = document.getElementById("cardFix");

if(screen.width > 768) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 387) {
      cardFixo.style.position = "absolute";
      cardFixo.style.top = "35.7%";
    } else if(window.scrollY < 387) {
      cardFixo.style.position = "fixed";
      cardFixo.style.top = "16%";
    }
  });
}