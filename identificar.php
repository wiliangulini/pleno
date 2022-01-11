<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Nossos Psicólogos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="" />
  <meta content="Gabriel Oliveira, Guilherme Menegussi, Wilian Gulini" name="author" />
  <?php include "assets/includes/cssgeral.php"; ?>
  <link rel="stylesheet" href="assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/header-user.css" />
  <link rel="stylesheet" href="assets/css/footer-logout.css" />
  <link rel="stylesheet" href="assets/css/identificar.css" />
  <link rel="stylesheet" href="assets/css/stepNumber.css" />
  <link rel="stylesheet" href="assets/css/cardFixPleno.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-user.php"; ?>
  <div class="main-content">
    <div class="container identificar">
      <div class="row step">
        <?php include "assets/includes/stepNumber.php"; ?>
        <div class="line"></div>
      </div>
      <div class="row cadastro">
        <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8" id="cadastro">
          <img src="assets/images/identificar/plenoDarkMob.webp" id="mobLogo" alt="logo pleno" />
          <form method="POST" id="form" action="" class="w-100">
            <div class="title">
              <p class="h4">Realize seu cadastro</p>
              <p class="h6">É necessario o seu cadastro para iniciar o atendimento online</p>
            </div>
            <div class="buttons cad">
              <a href="#" class="btn-google"><img class="googleImg" width="25" src="assets/images/identificar/google.webp" />Google</a>
              <a href="#" class="btn-facebook"><img class="facebookImg" width="25" src="assets/images/identificar/facebook.webp" />Facebook</a>
            </div>
            <div class="inputs">
              <div class="control one">
                <input type="text" placeholder="Nome" name="nome" />
                <input type="text" placeholder="Email" name="email" />
              </div>
              <div class="control">
                <input type="number" placeholder="Celular" name="celular" />
                <input type="text" placeholder="Senha" name="senha" />
              </div>
            </div>
            <div class="terms">
              <label>
                <input type="checkbox" name="checkbox" />
                <span class="chek"></span>
              </label>
              <p class="termsInt">Tenho mais de 18 anos de concordo com os termos de uso e privacidade.</p>
            </div>
            <div class="btn confirm">
              <input class="btn-gradient" value="Cadastrar" />
              <p>Já tem conta? <a id="facaLogin">Faça o Login</a></p>
            </div>
          </form>
        </div>
        <div id="cardFix" class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <div class="img">
            <img src="assets/images/identificar/plenoLogoGrey.webp" alt="logo pleno" />
          </div>
          <div class="compra d-flex align-items-center justify-content-center">
            <img id="seg" src="assets/images/identificar/seguranca.webp" />
            <p class="h5">Compra 100% segura</p>
            <img id="triangle" src="assets/images/identificar/triangle.webp" alt="triangulo" />
          </div>
          <div class="title">
            <p class="h4">Bem vindo ao atendimento de <a class="green">plantão</a> da pleno.</p>
            <p class="h6">Encontramos o seu psicologo em até 5 minutos</p>
          </div>
          <ul class="list">
            <li>Converse com um especialista Instantaneamente </li>
            <li>Converse por audio, video ou chat</li>
            <li>Reembolso garantido </li>
          </ul>
          <div class="total d-flex flex-column">
            <div class="txt d-flex justify-content-between">
              <p class="h4">Total:</p>
              <p class="h4 green">R$46,80</p>
            </div>
            <p class="h6">Ou em até 8x de R$6,35 no cartão</p>
          </div>
          <div class="input">
            <img id="cupom" src="assets/images/identificar/cupom.webp" alt="imagem cupom" />
            <input type="text" name="cupom" placeholder="Insira seu cupom" />
          </div>
          <div class="cartoes">
            <img class="w-100" src="assets/images/identificar/cartoes.webp" alt="cartões a se passar" />
          </div>
          <div class="confirm">
            <a id="continuar" class="btn-gradient">Continuar</a>
          </div>
        </div>
      </div>
      <div class="row cadastro login">
        <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8" id="login">
          <div class="line"></div>
          <img src="assets/images/identificar/plenoDarkMob.webp" id="mobLogo1" alt="logo pleno" />
          <form method="POST" action="" class="w-100">
            <div class="title">
              <p class="h4">Bem vindo de volta!</p>
              <p class="h6">Efetue seu login para continuar na sua jornada de saúde emocional.</p>
            </div>
            <div class="buttons log">
              <a href="#" class="btn-google"><img class="googleImg" width="25" src="assets/images/identificar/google.webp" />Google</a>
              <a href="#" class="btn-facebook"><img class="facebookImg" width="25" src="assets/images/identificar/facebook.webp" />Facebook</a>
            </div>
            <div class="inputs">
              <div class="control one">
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Senha" name="senha" />
              </div>
            </div>
            <div class="btn confirm">
              <input class="btn-gradient" value="Entrar" />
              <p>Não tem conta? <a id="facaCadastro">Cadastre-se</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <?php include "assets/includes/footer-logout.php"; ?>
  </div>
</div>

<?php include "assets/includes/javascript-psico.php"; ?>

  <script src="assets/js/identificar.js"></script>
</body>

</html>
