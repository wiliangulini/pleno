<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Faça sua Recarga  |  Eyhe - Conversas acolhedoras em minutos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="psicólogo online gratuito, ajuda psicológica, conversa online, conversar online, grupo de apoio, desabafo online, +desabafo +online, chat de bate papo, bate papo, bate papo online, site bate papo, quero conversar com alguém, como controlar crise de ansiedade, preciso de ajuda psicológica, como controlar a ansiedade, como acabar com a ansiedade, como dimnuir a ansiedade, como controlar a crise de ansiedade, site de desabafo, crise de ansiedade tem cura, preciso de ajuda emocional, chat ajuda emocional, +conversar +online, controlar a ansiedade, desabafo online auto ajuda, desabafar por chat, preciso de suporte emocional." />
  <meta content="Wilian Gulini" name="author" />
  <?php include "assets/includes/cssgeral.php"; ?>
  <!-- Style Css -->
  <link rel="stylesheet" href="assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/header-user.css" />
  <link rel="stylesheet" href="assets/css/footer-logout.css" />
  <link rel="stylesheet" href="assets/css/stepNumber.css" />
  <link rel="stylesheet" href="assets/css/checkout.css" />
  <link rel="stylesheet" href="assets/css/cardFixPleno.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-user.php"; ?>
  <div class="main-content">
    <div class="page-content financial">
      <div class="container financial">
        <div class="row flex-column">
          <?php include "assets/includes/stepNumber.php"; ?>
          <?php include "assets/includes/cardFix.php"; ?>
          <form class="w-100" method="POST" action="" id="form-recarga-geral">
            <div class="line"></div>
            <div class="resumo d-flex flex-column align-items-start justify-content-center">
              <p class="txt">Resumo:</p>
              <div class="control one">
                <p class="plant">1 - Plantao Pleno</p>
                <p class="valor">R$46,80</p>
              </div>
              <div class="control two">
                <div class="txt d-flex"> 
                  <p class="h5">Total:</p>
                  <p class="h5 green">R$46,80</p>
                </div>
                <div class="input">
                  <img id="cupom" src="assets/images/identificar/cupom.webp" alt="imagem cupom" />
                  <input type="text" name="cupom" placeholder="Insira seu cupom" />
                </div>
              </div>
            </div>
            <div class="title">
              <p class="h4">1. Forma de pagamento</p>
              <img src="assets/images/checkout/arrowMob.webp" alt="seta pra baixo" />
            </div>
            <div class="card method" id="method">
              <div class="d-flex justify-content-between">
                <div class="cred">
                  <label id="credito" class="radiocontainer minCard d-flex flex-column align-items-center justify-content-center">
                    <input type='radio' class="radio" name='cred' id='3' />
                    <div class="control d-flex flex-column-reverse align-items-center justify-content-center">
                      <p class="colCred">Cartão Crédito</p>
                      <img id="imgCred" src="assets/images/financeiro/credit-card.webp" />
                    </div>
                  </label>
                </div>
                <div class="cred">
                  <label id="debito" class="radiocontainer minCard d-flex flex-column align-items-center justify-content-center">
                      <input type='radio' name='cred' id='2' />
                      <div class="control d-flex flex-column-reverse align-items-center justify-content-center">
                        <p class="colDeb">Cartão Débito</p>
                        <img id="imgDeb" src="assets/images/financeiro/debito.webp" />
                      </div>
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="cred">
                  <label id="pix" class="radiocontainer minCard d-flex flex-column align-items-center justify-content-center">
                    <input type='radio' class="radio" name='cred' id='4' />
                    <div class="control d-flex flex-column-reverse align-items-center justify-content-center">
                      <p class="colPix">Pix</p>
                      <img id="imgPix" src="assets/images/financeiro/pix.webp" />
                    </div>
                  </label>
                </div>
                <div class="cred">
                  <label id="boleto" class="radiocontainer minCard d-flex flex-column align-items-center justify-content-center">
                    <input type='radio' class="radio" name='cred' id='1' />
                    <div class="control d-flex flex-column-reverse align-items-center justify-content-center">
                      <p class="colBol">Boleto Bancário</p>
                      <img id="imgBol" src="assets/images/financeiro/boleto.webp" class="boleto" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
            <div class="title prenc">
              <p class="h4">2. Preencha os dados</p>
              <img src="assets/images/checkout/arrowUpGrey.webp" id="arrowUp" alt="seta pra baixo" />
            </div>
            <div id="seven" class="card seven">
              <div class="option one">
                <div class="cartao pic">
                  <div class="cred">
                    <div id="imgCard">
                      <img src="assets/images/financeiro/visa.webp" alt="imagem da bandeira do cartao" />
                    </div>
                    <div id="numCard" class="d-flex justify-content-between">
                      <p id="numeroCartao" class="h3">
                        <strong id="n_one">XXXX</strong>
                        <strong id="n_two">XXXX</strong>
                        <strong id="n_three">XXXX</strong>
                        <strong id="n_four">2431</strong>
                      </p>
                    </div>
                    <div id="nameCard">
                      <p class="nome"><strong>SEU NOME AQUI </strong></p>
                      <p id="date">07/19</p>
                    </div>
                  </div>
                </div>
                <div class="cartao flex-column" id="cred">
                  <div id="divbtn" class="btn flex-column align-items-center">
                      <div class="card cart">
                        <input required type="text" name="nomecartao" id="nometitularCred" placeholder="Nome Títular do Cartão" />
                        <input required type="tel" name="numero-cartao" data-inputmask="'mask': '9999 9999 9999 9999'" id="numerocartao1" placeholder="Número do Cartão" />
                        <input required type="text" name="cpf" id="cpf" data-inputmask="'mask': '999.999.999-99'" placeholder="CPF Títular do Cartão" />
                        <div class="input d-flex justify-content-between">
                          <input required type="text" id="expiracaoCred" name="expiracao" data-inputmask="'mask': '99/99'" placeholder="MM/AA ex: 08/28" />
                          <input required type="number" maxlength="7" id="codigo" name="codseguranca" placeholder="CVV" />
                        </div>
                        <br/>
                      </div>
                  </div>
                </div>
                <div class="cartao flex-column" id="cardDeb">
                  <div id="divbtn" class="btn flex-column align-items-center">
                      <div class="card cart">
                        <input required type="text" name="nomecartao" id="nometitular1" placeholder="Nome Títular do Cartão" />
                        <input required type="tel" name="numero-cartao" data-inputmask="'mask': '9999 9999 9999 9999'" id="numerocartao2" placeholder="Número do Cartão" />
                        <input required type="text" name="cpf" id="cpf" data-inputmask="'mask': '999.999.999-99'" placeholder="CPF Títular do Cartão" />
                        <div class="input d-flex justify-content-between">
                          <input required type="text" id="expiracaoDeb" name="expiracao" data-inputmask="'mask': '99/99'" placeholder="MM/AA ex: 08/28" />
                          <input required type="number" maxlength="7" id="codigo" name="codseguranca" placeholder="CVV" />
                        </div>
                        <br/>
                      </div>
                  </div>
                </div>
              </div>
              <div class="option two" id="cardPix">
                <div class="pix">
                  <div class="qrcode">
                    <p class="h4 mob">Pix QRCode</p>
                    <img src="assets/images/checkout/qrcode.webp" />
                  </div>
                  <div class="pixInt">
                    <p class="h4">Pix QRCode</p>
                    <div class="input">
                      <p class="h6">Chave pix:</p>
                      <div class="control">
                        <img src="assets/images/checkout/copy.webp" id="copyPix" alt="icon copy" />
                        <input type="text" id="chavepix" name="chavepix" placeholder="231412-21112412-12220000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="option three">
                <div class="boleto" id="divBoleto">
                  <div class="bolDados" id="bolDados">
                    <div class="boletoImg">
                      <img src="assets/images/financeiro/boletoGrande.webp" alt="icon boleto" />
                    </div>
                    <div class="bolInt">
                      <div class="input">
                        <p class="h6">Para gerar o boleto prencha:</p>
                        <input type="text" id="cpfBol" name="cpf" placeholder="Digite seu CPF:" />
                      </div>
                    </div>
                  </div>
                  <div class="bolGer two" id="bolGer">
                    <img src="assets/images/financeiro/boletoGrande.webp" alt="icon boleto" />
                    <div class="control">
                      <p class="h4">Boleto gerado com sucesso!</p>
                      <ul>
                        <li>Boleto é validado em até 5 dias</li>
                        <li>Sua conta será creditada após confirmar o pagamento</li>
                      </ul>
                    </div>
                    <div class="openBol">
                      <div class="control one">
                        <p class="h6">Abrir boleto</p>
                        <img src="assets/images/checkout/open.webp" alt="open icon" />
                      </div>
                      <div class="control two">
                        <img src="assets/images/checkout/copy.webp" id="boletoCopy" alt="icon copy" />
                        <input type="text" id="numBol" name="boleto" placeholder="231412-21112412-12220000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button w-100" id='btnProx'>
                <input class="btn-grey" type="submit" id="btn" value="Próximo" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <?php include "assets/includes/footer-logout.php"; ?>
  </div>
  <!-- end main content-->
</div>
<!-- END layout-wrapper -->

<!-- JAVASCRIPT -->
<?php include "assets/includes/javascript-psico.php"; ?>
<script src="assets/js/checkout.js"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/jquery.inputmask.bundle.js"></script>
<script>
  //input mask
  $(":input").inputmask();
  $("#numerocartao1").inputmask({'mask':'9999 9999 9999 9999'});
  $("#cpfBol").inputmask({'mask':'999.999.999-99'});
</script>
</body>
</html>
