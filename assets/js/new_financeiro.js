var token_2;
var repetidor_de_status_pix_2;
function retorna_status_pix_2(){
    jQuery.ajax({
          type: "POST",
          url: "painel/enginePIX/retorna_status_pix.php",
          data: {pix_id: token_2},
          beforeSend: function() {},
          success: function(data) {
              var status =  data;
              //alert("Status do PIX atual: "+status);

              if(status == 'CONCLUIDA'){
                //alert('entrou no concluido');
                //parar o repetidor 
                clearInterval(repetidor_de_status_pix_2);

                //atualizar saldo
                var valor_pix = localStorage.getItem('valor_ultimo_pix_gerado');
                valor_pix = valor_pix * 1.3;
                var idheroi = localStorage.getItem('idheroi');

                //atualizar tabela financeiro e acrescentar saldo
                 jQuery.ajax({
                       type: "POST",
                       url: "painel/engine/atualiza_saldo_por_pix.php",
                       data: {"idheroi": idheroi, "valor": valor_pix, "token": token_2},
                        success: function(data)
                        {
                            //alert(data);
                           //atualizar variavel
                            localStorage.setItem('token_ultimo_pix_gerado', null);

                            //direcionar para o recarga-confirmada.php
                            window.location.href = 'recarga-confirmada.php?v='+valor_pix+'&t=PIX';
                        }
                });

              }

              if(status == 'CANCELADO'){
                 localStorage.setItem('token_ultimo_pix_gerado', null);
                 clearInterval(repetidor_de_status_pix_2);
              }
          }
      });
}

$(document).ready(function() {
    $("#one, #valor").on("click", function() {
        $("#amount").css("display","flex");
        $("#method").css("display","none");
        $("#confirmation").css("display","none");
        $("#pagamento").addClass("backWhite");
        $("#pagamento").removeClass("backBlue");
        $("#confirm").addClass("backWhite");
        $("#confirm").removeClass("backBlue");
        $("#one").addClass("border");
        $("#dois").removeClass("border");
        $("#tres").removeClass("border");
    });

    $("#dois, #voltar, #voltar1, #pagamento").on("click", function() {
        if( ($("#number").val().length > 1  && $("#cpf").val().length > 10) ) {
            $("#method").css("display","flex");
            $("#amount").css("display","none");
            $("#confirmation").css("display","none");
            $("#confirm").addClass("backWhite");
            $("#confirm").removeClass("backBlue");
            $("#pagamento").addClass("backBlue");
            $("#pagamento").removeClass("backWhite");
            $("#dois").addClass("border");
            $("#one").removeClass("border");
            $("#tres").removeClass("border");
        } else {
            alert("Preencha o campo Valor e CPF");
        }
    });

    $("#tres, #confirm").on("click", function() {
        if($("#sobDeb").css("display") === "none" && $("#sobCred").css("display") === "none" && $("#sobPix").css("display") === "none" && $("#sobBol").css("display") === "none") {
            alert("Escolha uma forma de pagamento antes de prosseguir!");
        } else if($("#sobDeb").css("display") === "flex") {
            $("a.btn").removeClass("btn-grey");
            $("a.btn").addClass("btn-blue");
            $("a.btn.finalizar").attr("onclick","mostrarDeb()");
            mostrarDeb();
        } else if($("#sobCred").css("display") === "flex") {
            $("a.btn").removeClass("btn-grey");
            $("a.btn").addClass("btn-blue");
            $("a.btn.finalizar").attr("onclick","mostrarCred()");
            mostrarCred();
        } else if($("#sobPix").css("display") === "flex") {
            $("a.btn").removeClass("btn-grey");
            $("a.btn").addClass("btn-blue");
            $("a.btn.finalizar").attr("onclick","mostrarPix()");
            mostrarPix();
        } else if($("#sobBol").css("display") === "flex") {
            $("a.btn").removeClass("btn-grey");
            $("a.btn").addClass("btn-blue");
            $("a.btn.finalizar").attr("onclick","mostrarBol()");
            mostrarBol();
        }
    });

    /*$("#tres").on("click", function() {
        if($("#4").prop("checked") || $("#3").prop("checked") || $("#2").prop("checked") || $("#1").prop("checked")) {
            $("#confirmation").css("display","flex");
            $("#amount").css("display","none");
            $("#method").css("display","none");
            $("#tres").addClass("border");
            $("#dois").removeClass("border");
            $("#one").removeClass("border");
        } else {
            alert("escolha um metodo de pagamento");
        }
    });*/

    //$(".numberFinal").val($("#number").val());

    /*$("#select").on("click", function() {
        $("#dois").addClass("border");
        $("#one").removeClass("border");
        $("#tres").removeClass("border");
        $("#amount").css("display","none");
        $("#method").css("display","flex");
    });*/

    $("#credito").on("click", function() {
        $("#sobDeb").css("display","none");
        $("#sobBol").css("display","none");
        $("#sobPix").css("display","none");
        $("#sobCred").css("display","flex");
        $("#sobCred").css("opacity",0.5);
        $("a.btn").removeClass("btn-grey");
        $("a.btn").addClass("btn-blue");
        $("a.btn.finalizar").attr("onclick","mostrarCred()");
    });



    $("#pix").on("click", function() {
        $("#sobDeb").css("display","none");
        $("#sobBol").css("display","none");
        $("#sobCred").css("display","none");
        $("#sobPix").css("display","flex");
        $("#sobPix").css("opacity",0.5);
        $("a.btn").removeClass("btn-grey");
        $("a.btn").addClass("btn-blue");
        $("a.btn.finalizar").attr("onclick","mostrarPix()");
    });

    $("#debito").on("click", function() {
        $("#sobPix").css("display","none");
        $("#sobBol").css("display","none");
        $("#sobCred").css("display","none");
        $("#sobDeb").css("display","flex");
        $("#sobDeb").css("opacity",0.5);
        $("a.btn").removeClass("btn-grey");
        $("a.btn").addClass("btn-blue");
        $("a.btn.finalizar").attr("onclick","mostrarDeb()");
    });

    $("#boleto").on("click", function() {
        $("#sobDeb").css("display","none");
        $("#sobPix").css("display","none");
        $("#sobCred").css("display","none");
        $("#sobBol").css("display","flex");
        $("#sobBol").css("opacity",0.5);
        $("a.btn").removeClass("btn-grey");
        $("a.btn").addClass("btn-blue");
        $("a.btn.finalizar").attr("onclick","mostrarBol()");
    });



});


document.getElementById("copyPix").addEventListener("click", function() {
    document.getElementById("chavepix").select();
    document.execCommand('copy');
});



function mostrarCred() {
    document.getElementById("amount").style.display = "none";
    document.getElementById("method").style.display = "none";
    document.getElementById("confirmation").style.display = "flex";
    document.getElementById("divbtn").style.display = "flex";
    document.getElementById("divbtn1").style.display = "none";
    document.getElementById("conf").style.display = "flex";
    document.getElementById("pix1").style.display = "none";
    document.getElementById("boleto1").style.display = "none";
    document.getElementById("confirm").classList.add("backBlue");
    document.getElementById("confirm").classList.remove("backWhite");
    document.getElementById('tres').classList.add("border");
    document.getElementById('dois').classList.remove("border");
    document.getElementById('one').classList.remove("border");
    document.querySelector(".confirmar").setAttribute('id', 'confirmar_cred');

    let valor = document.getElementById("number").value;
    document.querySelector('.numberFinal').value = valor;

}
function mostrarDeb() {
    document.getElementById("amount").style.display = "none";
    document.getElementById("divbtn").style.display = "none";
    document.getElementById("method").style.display = "none";
    document.getElementById("confirmation").style.display = "flex";
    document.getElementById("pix1").style.display = "none";
    document.getElementById("boleto1").style.display = "none";
    document.getElementById("conf").style.display = "flex";
    document.getElementById("divbtn1").style.display = "flex";
    document.getElementById("confirm").classList.add("backBlue");
    document.getElementById("confirm").classList.remove("backWhite");
    document.getElementById('tres').classList.add("border");
    document.getElementById('dois').classList.remove("border");
    document.getElementById('one').classList.remove("border");
    document.querySelector(".confirmar").setAttribute('id', 'confirmar_deb');

    let valor = document.getElementById("number").value;
    document.getElementById("debitNumber").value = valor;
}
function mostrarPix() {

    let valor_pix = document.getElementById("number").value;
    var cpf_pix = document.getElementById("cpf").value;
    var nome_pix = document.getElementById("nomeheroi").value;
    var idheroi_pix = document.getElementById("idheroi").value;

    jQuery.ajax({
         type: "POST",
         url: "painel/enginePIX/emitirPix_newfinanceiro.php",
         data: {
             nome_heroi: nome_pix,
             valor: valor_pix,
             cpf: cpf_pix,
             idheroi: idheroi_pix
         },
         beforeSend: function(){
           Swal.fire({
            title: 'Aguarde',
            text: 'Estamos recebendo sua solicitação de recarga por PIX',
            imageUrl: 'https://pedefacil.sodexobeneficios.com.br/PPW/img/tela-espera.gif',
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: 'aguarde',
          })
         },
         success: function(data)
         {
           Swal.close();
           //alert(data);
           data = JSON.parse(data);

           //insere imagem do qrcode
           $("#insere-img-pix").html(data[0]);

           //insere pix copia e cola
           document.getElementById("chavepix").value = data[1];

           //troca a tela
             document.getElementById("amount").style.display = "none";
             document.getElementById("method").style.display = "none";
             document.getElementById("confirmation").style.display = "flex";
             document.getElementById("divbtn").style.display = "none";
             document.getElementById("boleto1").style.display = "none";
             document.getElementById("divbtn1").style.display = "none";
             document.getElementById("pix1").style.display = "flex";
             document.getElementById("conf").style.display = "none";
             document.getElementById("confirm").classList.add("backBlue");
             document.getElementById("confirm").classList.remove("backWhite");
             document.getElementById('tres').classList.add("border");
             document.getElementById('dois').classList.remove("border");
             document.getElementById('one').classList.remove("border");
             let valor = document.getElementById("number").value;
             document.getElementById("pixNumber").value = valor;
           //fim do troca a tela

            //depois que o pix é gerado, precisamos ouvir se ele já foi pago. Vou criar uma variavel fixa para armazar o token
            token_2 = data[2];
            //alert(token_2);
            //token_2 = 'x7HczH3YNSFLxVHQfshuyDAu0fwZOupoUM4';
            localStorage.setItem('token_ultimo_pix_gerado', token_2);
            localStorage.setItem('valor_ultimo_pix_gerado', valor_pix);
            localStorage.setItem('idheroi', idheroi_pix);

            repetidor_de_status_pix_2 = setInterval(retorna_status_pix_2, 3000);

               
         }
     });

}
function mostrarBol() {

    let valor_boleto = document.getElementById("number").value;
    var cpf_boleto = document.getElementById("cpf").value;
    var nome_boleto = document.getElementById("nomeheroi").value;
    var idheroi_boleto = document.getElementById("idheroi").value;
    var email_boleto  = document.getElementById("emailheroi").value;
    var telefone_boleto  = document.getElementById("telefone").value;

    jQuery.ajax({
         type: "POST",
         url: "painel/engine/EBANX/carrega_saldo_por_boleto_newfinanceiro.php",
         data: {
             nome_heroi: nome_boleto,
             valor: valor_boleto,
             cpf: cpf_boleto,
             idheroi: idheroi_boleto,
             emailheroi: email_boleto,
             telefone: telefone_boleto
         },
         beforeSend: function(){
           Swal.fire({
            title: 'Aguarde',
            text: 'Estamos recebendo sua solicitação de recarga por boleto',
            imageUrl: 'https://pedefacil.sodexobeneficios.com.br/PPW/img/tela-espera.gif',
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: 'aguarde',
          })
         },
         success: function(data)
         {
           if(data == 'Falha ao gerar boleto, tente novamente.'){
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Falha ao emitir boleto! Preencha o campo CPF corretamente',
             })
           }else{
             Swal.close();
             var html = '<a target="_blank" href="'+data+'" type="button" class="btn btn-blue" download>Baixar Boleto</a>';
             $("#insere-botao-boleto").html(html);

             document.getElementById("amount").style.display = "none";
             document.getElementById("method").style.display = "none";
             document.getElementById("confirmation").style.display = "flex";
             document.getElementById("divbtn").style.display = "none";
             document.getElementById("divbtn1").style.display = "none";
             document.getElementById("pix1").style.display = "none";
             document.getElementById("boleto1").style.display = "flex";
             document.getElementById("confirm").classList.add("backBlue");
             document.getElementById("confirm").classList.remove("backWhite");
             document.getElementById('tres').classList.add("border");
             document.getElementById('dois').classList.remove("border");
             document.getElementById('one').classList.remove("border");
             document.getElementById('conf').style.display = "none";

             let valor = document.getElementById("number").value;
             document.getElementById("bolNumber").value = valor;
           }
         }
     });

}

document.getElementById("number").onblur = function() {
    let valorInput = document.getElementById("number").value;
    let vOriginal = document.getElementById("valorDown");
    let vDesconto = document.getElementById("valorUp");

    vOriginal.innerHTML = valorInput;
    let novo_valor = valorInput * 1.3;
    novo_valor = novo_valor.toFixed(2);
    vDesconto.innerHTML = novo_valor;

}

document.getElementById("select").addEventListener("click", function() {
    if(document.getElementById("number").value.length < 2 || document.getElementById("cpf").value.length < 11) {

        if(document.getElementById("number").value.length < 2) {
            alert("Oi,  favor preencher o campo valor com R$10 ou mais.");
            document.getElementById("number").focus();
        }
        if(document.getElementById("cpf").value.length < 11) {
            alert("Por favor, preencha o campo cpf");
            document.getElementById("cpf").focus();
        }
    } else if(document.getElementById("number").value.length >= 2 && document.getElementById("cpf").value.length >= 11) {
        document.getElementById("method").style.display = "flex";
        document.getElementById("pagamento").classList.add("backBlue");
        document.getElementById("pagamento").classList.remove("backWhite");
        document.getElementById("amount").style.display = "none";
        document.getElementById("one").classList.remove("border");
        document.getElementById("tres").classList.remove("border");
        document.getElementById("dois").classList.add("border");
    }

});
