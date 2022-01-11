<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Sala de Espera</title>
  <meta name="viewport" content="width=device-width, user-scalable=0">
  <meta name="description" content="" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="psicologo online, Psicologo online, terapia online" />
  <meta content="Gabriel Oliveira, Guilherme Menegussi, Wilian Gulini" name="author" />
  <?php include "assets/includes/cssgeral.php"; ?>
  <link rel="stylesheet" href="assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/menu-vertical.css" />
  <link rel="stylesheet" href="assets/css/footer-interno.css" />
  <link rel="stylesheet" href="assets/css/sala-de-espera.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado.php"; ?>
  <?php include "assets/includes/menu-vertical.php"; ?>
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <form method="POST" action="">
          <div class="card" id="cardInitial">
            <div class="title">
              <p class="h4"><span class="strong_light">Aguarde!</span> seu psicologo está vindo.</p>
            </div>
            <div class="barra-progresso">
              <?php include "assets/includes/progress-bar.php"; ?>
            </div>
            <div class="cardInt" id="c0">
              <div class="img">
                <p class="h5">Pronto para começar?</p>
                <img src='assets/images/sala-espera/psicologo.webp' alt="imagem psicologo atendendo" class="psicologo" />
              </div>
              <div class="text">
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt">Enquanto seu Piscologo chega podemos nos preparar!</p>
                </div>
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt">Escolha um lugar <span class="strong_early">calmo e silencioso</span></p>
                </div> 
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt">Se desligue de outras atividades</p>
                </div> 
              </div>
              <div class="button">
                <a id="btn0" class="btn-gradient">Continuar <img src="assets/images/sala-espera/arrow-right.webp" class="arrow_right" alt="arrow right" /></a>
              </div>
            </div>

            <div class="cardInt" id="c1">
              <div class="img">
                <p class="h5">Pronto para começar?</p>
                <img src='assets/images/sala-espera/mobile-login.webp' alt="imagem mobile login" class="mobile-login" />
              </div>
              <div class="text">
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt"><span class="strong_early">Reembolso</span> garantido em 24 horas</p>
                </div>
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt">Ambiente seguro para o sua sessão</p>
                </div> 
                <div class="control d-flex">
                  <div class='circle-green'></div>
                    <p class="txt">Converse apenas por chat</p>
                </div> 
              </div>
              <div class="button">
                <a id="btn1" class="btn-gradient">Continuar <img src="assets/images/sala-espera/arrow-right.webp" class="arrow_right" alt="arrow right" /></a>
              </div>
            </div>

            <div class="cardInt" id="c2">
              <div class="img">
                <p class="h5">Vamos nos conhecer mais</p>
                <p class="h6">Você já fez terapia?</p>
              </div>
              <div class="inputs d-flex justify-content-between align-items-center">
                <label class="label no">
                  <input type="radio" name="yes-no" value="nao" />
                  <span class="check"></span>
                  <p>Não</p>
                </label>
                <label class="label yes">
                  <input type="radio" name="yes-no" value="sim" />
                  <span class="check"></span>
                  <p>Sim</p>
                </label>
              </div>
              <div class="range">
                <p class="h6">Sente seu sintoma a quanto tempo?</p>
                <input type="range" value="40" min="0" max="100" step="1" class="inputR" list='tickmarks'>
                <!--<datalist id="tickmarks">
                  <option value="0"></option>
                  <option value="20"></option>
                  <option value="40"></option>
                  <option value="60"></option>
                  <option value="80"></option>
                  <option value="100"></option>
                </datalist>-->
                <div class="year">
                  <p class="yearInt">1 ano</p>
                  <p class="yearInt">2</p>
                  <p class="yearInt">3</p>
                  <p class="yearInt">4</p>
                  <p class="yearInt">5 anos</p>
                </div>
              </div>
              <div class="button">
                <a id="btn2" class="btn-gradient">Continuar <img src="assets/images/sala-espera/arrow-right.webp" class="arrow_right" alt="arrow right" /></a>
              </div>
            </div>

            <div class="cardInt" id="c3">
              <div class="img">
                <p class="h5">Vamos nos conhecer mais</p>
                <p class="h6">Você já fez terapia?</p>
              </div>
              <div class="inputs d-flex justify-content-between align-items-center">
                <label id='switch' class="switch">
                  <input type="checkbox" name='comportamento' value="introvertido">
                  <span id='slider' class="slider round"></span>
                  <p>Introvertido</p>
                </label>
                <label id='switch1' class="switch">
                  <input type="checkbox" name='comportamento' value="extrovertido">
                  <span id='slider1' class="slider round"></span>
                  <p>Extrovertido</p>
                </label>
              </div>
              <div class="range">
                <p class="h6">Como define seu Humor?</p>
                <div class="labels w-100 d-flex justify-content-between">
                  <label>
                    <input type="radio" id="estavel" name="humor" value="estavel" />
                    <span class="backgroundHumor">Estável</span>
                  </label>
                  <label>
                    <input type="radio" id="otimo" name="humor" value="otimo" />
                    <span class="backgroundHumor">Ótimo</span>
                  </label>
                  <label>
                    <input type="radio" id="bom" name="humor" value="bom" />
                    <span class="backgroundHumor">Bom</span>
                  </label>
                </div>
                <div class="labels w-100 d-flex justify-content-between">
                  <label>
                    <input type="radio" id="ruim" name="humor" value="ruim" />
                    <span class="backgroundHumor">Ruim</span>
                  </label>
                  <label>
                    <input type="radio" id="pessimo" name="humor" value="pessimo" />
                    <span class="backgroundHumor">Péssimo</span>
                  </label>
                  <label>
                    <input type="radio" id="nao_sei" name="humor" value="nao sei" />
                    <span class="backgroundHumor">Não sei</span>
                  </label>
                </div>
              </div>
              <div class="button">
                <a id="btn3" class="btn-gradient">Continuar <img src="assets/images/sala-espera/arrow-right.webp" class="arrow_right" alt="arrow right" /></a>
              </div>
            </div>
          </div>
          <div class="card" id="c4">
            <div class="cardInt" >
              <div class="title">
                <p class="h4">Oops, Tivemos alguma problema com o seu psicologo</p>
              </div>
              <div class="img">
                <img class="error" src="assets/images/sala-espera/error.webp" alt="error imagem" />
              </div>
              <div class="texto">
                <p class="h6 one">Infelizmente seu psicologo não pode te atender, mas pode ficar tranquilo o seu <span class="strong_early">saldo continua valido.</span></p>
                <p class="h6">Como um forma de desculpas vamos te dar <span class="strong_early">14,00 Reais de bônus</span> para o seu proximo agendamento</p>
              </div>
              <div class="button">
                <a id="btn4" class="btn-gradient">Continuar <img src="assets/images/sala-espera/arrow-right.webp" class="arrow_right" alt="arrow right" /></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <?php include "assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical.js'></script>
<script src='assets/js/timer.js'></script>
<script src="assets/js/sala-de-espera.js"></script>
</body>

</html>