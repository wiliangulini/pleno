//step number bakcground
document.querySelector('.stepInt.two p.h5').classList.add('active');

//inserir e remover background verde e mudar imagens e cor de texto para branco, variaveis e funçoes abaixo
let credito = document.getElementById('credito');
let imgCred = document.getElementById('imgCred');
let colCred = document.querySelector('.colCred');
let optionOne = document.querySelector(".option.one");

let debito = document.getElementById('debito');
let imgDeb = document.getElementById('imgDeb');
let colDeb = document.querySelector('.colDeb');

let pix = document.getElementById('pix');
let imgPix = document.getElementById('imgPix');
let colPix = document.querySelector('.colPix');
let cardPix = document.getElementById('cardPix');

let boleto = document.getElementById('boleto');
let imgBol = document.getElementById('imgBol');
let colBol = document.querySelector('.colBol');
let divBoleto = document.getElementById('divBoleto');
let bolDados = document.getElementById('bolDados');
let bolGer = document.getElementById('bolGer');

//button div 
let btnProx = document.getElementById('btnProx');

let btn = document.getElementById('btn');

let credInsert = () => {
  credito.classList.add("background");
  imgCred.setAttribute("src","assets/images/financeiro/credit-card-w.webp");
  colCred.style.color = "#FFF";
}
let credRemove = () => {
  credito.classList.remove("background");
  imgCred.setAttribute("src","assets/images/financeiro/credit-card.webp");
  colCred.style.color = "#727272";
}

let debInsert = () => {
  debito.classList.add("background");
  imgDeb.setAttribute("src","assets/images/financeiro/debito-w.svg");
  colDeb.style.color = "#FFF";
}
let debRemove = () => {
  debito.classList.remove("background");
  imgDeb.setAttribute("src","assets/images/financeiro/debito.webp");
  colDeb.style.color = "#727272";
}

let pixInsert = () => {
  pix.classList.add("background");
  imgPix.setAttribute("src","assets/images/financeiro/pix-w.webp");
  colPix.style.color = "#FFF";
}
let pixRemove = () => {
  pix.classList.remove("background");
  imgPix.setAttribute('src','assets/images/financeiro/pix.webp');
  colPix.style.color = "#727272";
}

let bolInsert = () => {
  boleto.classList.add("background");
  imgBol.setAttribute("src","assets/images/financeiro/boleto-w.webp");
  colBol.style.color = "#FFF";
}
let bolRemove = () => {
  boleto.classList.remove("background");
  imgBol.setAttribute("src","assets/images/financeiro/boleto.webp");
  colBol.style.color = "#727272";
}

let titleColor = () => {
  document.querySelector('.title.prenc p.h4').style.color = "#4B4B4B";
  document.getElementById('arrowUp').setAttribute('src','assets/images/checkout/arrowMob.webp');
}

credito.addEventListener("click", () => {
  credInsert();
  debRemove();
  pixRemove();
  bolRemove();
  titleColor();
  divBoleto.style.display = "none";
  cardPix.style.display = "none";
  optionOne.style.display = "flex";
  btnProx.style.marginTop = "0";
  btn.classList.add("btn-gradient");
  btn.classList.remove("btn-grey");
});

debito.addEventListener("click", () => {
  debInsert();
  credRemove();
  pixRemove();
  bolRemove();
  titleColor();
  divBoleto.style.display = "none";
  cardPix.style.display = "none";
  optionOne.style.display = "flex";
  btnProx.style.marginTop = "0";
  document.getElementById('cred').style.display = "none";
  document.getElementById('cardDeb').style.display = "flex";
  btn.classList.add("btn-gradient");
  btn.classList.remove("btn-grey");
});

pix.addEventListener("click", () => {
  pixInsert();
  debRemove();
  credRemove();
  bolRemove();
  titleColor();
  optionOne.style.display = "none";
  btnProx.style.marginTop = "0";
  divBoleto.style.display = "none";
  cardPix.style.display = "flex";
  btn.classList.add("btn-gradient");
  btn.classList.remove("btn-grey");
});

boleto.addEventListener("click", () => {
  bolInsert();
  debRemove();
  pixRemove();
  credRemove();
  titleColor();
  optionOne.style.display = "none";
  btnProx.style.marginTop = "0";
  cardPix.style.display = "none";
  divBoleto.style.display = "flex";
  btn.classList.add("btn-gradient");
  btn.classList.remove("btn-grey");
  btn.setAttribute("onclick","gerarBoleto()");
});

let gerarBoleto = () => {
  bolDados.style.display = 'none';
  bolGer.style.display = 'flex';
}


//mascara para num cartao

function medidor(v){
  v = v.replace(/\D/g,"");
  v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
  v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
  v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
  return v;
}


//mascara para data de validade

function mccDate(v){
  v = v.replace(/\D/g,""); // Permite apenas dígitos
  v = v.replace(/(\d{2})/g, "$1/"); // Coloca um ponto a cada 4 caracteres
  v = v.replace(/\/$/, ""); // Remove o ponto se estiver sobrando
  v = v.substring(0, 5)// Limita o tamanho

  return v;
}

// pegar cartao utilizado
var tgdeveloper = {
    
  getCardFlag: function(cardnumber) {
      var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

      var cards = {
          visa      : /^4[0-9]{12}(?:[0-9]{3})/,
          mastercard : /^5[1-5][0-9]{14}/,
          diners    : /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
          amex      : /^3[47][0-9]{13}/,
          discover  : /^6(?:011|5[0-9]{2})[0-9]{12}/,
          hipercard  : /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
          elo        : /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
          jcb        : /^(?:2131|1800|35\d{3})\d{11}/,       
          aura      : /^(5078\d{2})(\d{2})(\d{11})$/     
      };

      for (var flag in cards) {
          if(cards[flag].test(cardnumber)) {
              return flag;
          }
      }       

      return false;
  }

}

// inserir dados do cartao de credito

let numCredit = document.getElementById("numerocartao1");
numCredit.onblur = function() {
  let numCardCredit = numCredit.value;
  let n_one = numCardCredit.slice(0, 4);
  let n_two = numCardCredit.slice(4, 8);
  let n_three = numCardCredit.slice(8, 12);
  let n_four = numCardCredit.slice(12, 16);

  let bandeira = tgdeveloper.getCardFlag(numCardCredit);

  document.querySelector("#numeroCartao").style.display = "flex";
  document.querySelector("#n_one").innerHTML = medidor(n_one);
  document.querySelector("#n_two").innerHTML = medidor(n_two);
  document.querySelector("#n_three").innerHTML = medidor(n_three);
  document.querySelector("#n_four").innerHTML = medidor(n_four);
  switch(bandeira) {
    case "visa": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/visa.webp");
      break;
    case "mastercard": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/mastercard.webp");
      break;
    case "diners": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/diners.webp");
      break;
    case "amex": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/amex.webp");
    break;
    case "discover": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/discover.webp");
    break;
    case "hipercard": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/hipercard.webp");
    break;
    case "elo": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/elo.webp");
    break;
    case "jcb": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/jcbb.webp");
    break;
    case "aura": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/aura.webp");
    break;
  }

}
let nome = document.getElementById("nometitularCred");
nome.onblur = () => {
  let nomePrint = nome.value;
  document.querySelector("#nameCard p.nome strong").innerHTML = nomePrint;
}

document.getElementById("expiracaoCred").onblur = () => {
  let datePrintD = document.getElementById("expiracaoCred").value;
  document.getElementById("date").innerHTML = mccDate(datePrintD);
}

// inserir dados do cartao de debito

let numDebit = document.getElementById("numerocartao2");
numDebit.onblur = function() {
  let numCardDebit = numDebit.value;
  let n_one = numCardDebit.slice(0, 4);
  let n_two = numCardDebit.slice(4, 8);
  let n_three = numCardDebit.slice(8, 12);
  let n_four = numCardDebit.slice(12, 16);

  let bandeira = tgdeveloper.getCardFlag(numCardDebit);
  
  document.querySelector("#numeroCartao").style.display = "flex";
  document.querySelector("#n_one").innerHTML = medidor(n_one);
  document.querySelector("#n_two").innerHTML = medidor(n_two);
  document.querySelector("#n_three").innerHTML = medidor(n_three);
  document.querySelector("#n_four").innerHTML = medidor(n_four);

  switch(bandeira) {
    case "visa": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/visa.webp");
      break;
    case "mastercard": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/mastercard.webp");
      break;
    case "diners": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/diners.webp");
      break;
    case "amex": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/amex.webp");
    break;
    case "discover": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/discover.webp");
    break;
    case "hipercard": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/hipercard.webp");
    break;
    case "elo": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/elo.webp");
    break;
    case "jcb": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/jcbb.webp");
    break;
    case "aura": 
      document.querySelector("#imgCard img").setAttribute("src","assets/images/financeiro/aura.webp");
    break;
  }

}
let nomeD = document.getElementById("nometitular1");
nomeD.onblur = function() {
  let nomePrintD = nomeD.value;
  document.querySelector("#nameCard p.nome strong").innerHTML = nomePrintD;
}
let dateD = document.getElementById("expiracao");
document.getElementById("expiracaoDeb").onblur = function() {
  let datePrintD = document.getElementById("expiracaoDeb").value;
  document.getElementById("date").innerHTML = mccDate(datePrintD);
}


//copiar e colar
document.getElementById("copyPix").addEventListener("click", function() {
  document.getElementById("chavepix").select();
  document.execCommand('copy');
});

document.getElementById("boletoCopy").addEventListener("click", function() {
  document.getElementById("numBol").select();
  document.execCommand('copy');
});

if(screen.width < 768) {
  btn.setAttribute('value','Concluir');
}

window.addEventListener('scroll', () => {

  if(window.scrollY >= 151) {

    document.getElementById('cardFix').classList.add('break');

  } else if(window.scrollY < 151) {

    document.getElementById('cardFix').classList.remove('break');

  }

});
