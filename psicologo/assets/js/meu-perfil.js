let temas = () => {
    
  let arrow = document.getElementById('seta');
  let down = document.getElementById('baixo');

  if(down.style.display == "none") {
    document.getElementById('ls-select').style.border = '2px solid #28a745';
    
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
let temasSelect = (elmnt) => {
  let n = elmnt.id;
  console.log(n);
  let txt = document.getElementById(n).innerText;
  document.getElementById("value").innerHTML = txt;
  temas();
}
document.querySelector(".ls-select.status").addEventListener("click", () => {
  temas();
});

// ls-select1

let Abordagem = () => {
    
  let arrow = document.getElementById('arrow1');
  let down = document.getElementById('down1');

  if(down.style.display == "none") {
    document.getElementById('ls-select1').style.border = '2px solid #28a745';

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
    document.getElementById('ls-select1').style.border = '2px solid #848484';

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
let abordagemSelect = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("value1").innerHTML = txt;
  Abordagem();
}
document.querySelector(".ls-select1.status").addEventListener("click", () => {
  Abordagem();
});

//upload img 
$(document).ready(function() {

  let readUrl = function(input) {
      if(input.files && input.files[0]) {
          let reader = new FileReader();
          reader.onload = function(e) {
              $("#img").attr('src', e.target.result);
              $("#upload").attr('value', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("#upload").on('change',function(){
   readUrl(this);
  });
  $("#img").click(function() {
      let btn = $("#upload");
      btn.trigger('click');
  });

});


// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();