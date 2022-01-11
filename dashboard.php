<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Dashboard</title>
  <meta name="viewport" content="width=device-width, user-scalable=0">
  <meta name="description" content="" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="psicologo online, Psicologo online, terapia online" />
  <meta content="Gabriel Oliveira, Guilherme Menegussi, Wilian Gulini" name="author" />
  <?php include "assets/includes/cssgeral.php"; ?>
  <link rel="stylesheet" href="assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/menu-vertical.css" />
  <link rel="stylesheet" href="assets/css/footer-interno.css" />
  <link rel="stylesheet" href="assets/css/index.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado.php"; ?>
  <?php include "assets/includes/menu-vertical.php"; ?>
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8">

          <?php include 'assets/includes/cardGreen.php'; ?>
          <div class='search'>
            <a href='#' class='btn-gradient'>Encontrar terapeuta</a>
          </div>
  
          <div class="card">
            <div class="minhas-consultas">
              <div class="top">
                <div class='d-flex one'>
                  <img src='assets/images/index/caderno.webp' alt='caderno icon' loading='lazy' />
                  <p class='h5'>Minhas consultas</p>
                </div>
                <div class='d-flex two'>
                  <a href="minhas-consultas.php"><p class='simbol'>+</p></a>
                </div>
              </div>
              <div class='mid'>
                <p class='txt'>Próximas consultas:</p>
                <div class='d-flex one'>
                  <div class='psico'>
                    <img src='assets/images/users/avatar-1.jpg' alt='foto psicologo' />
                    <div class='txt'>
                      <p class='h5'>Tony Batata</p>
                      <p class='date'>
                        <img src='assets/images/index/clock.webp' alt='relogio icon' loading='lazy' />
                        25/03/2021. 19:00 - 20:00
                      </p>
                    </div>
                  </div>
                  <div class='button'>
                    <div class='buttonInt one'>
                      <a href='#' class='btn-yellow'>Remarcar</a>
                      <a href='sala-de-espera.php' class='btn-gradient'>Iniciar terapia</a>
                    </div>
                    <img src='assets/images/menu-vertical/points.webp' alt='icon points' id='p1' class='point one' />
                  </div>
                </div>
                <div class='d-flex two'>
                  <div class='psico'>
                    <img src='assets/images/users/avatar-1.jpg' alt="foto psicologo" />
                    <div class='txt'>
                      <p class='h5'>Tony Batata</p>
                      <p class='date'>
                        <img src="assets/images/index/clock.webp" alt="relogio icon" loading="lazy" />
                        25/03/2021. 19:00 - 20:00
                      </p>
                    </div>
                  </div>
                  <div class='button'>
                    <div class='buttonInt two'>
                      <a href='#' class='btn-yellow'>Remarcar</a>
                      <a href='#' class='btn-grey'>Iniciar terapia</a>
                    </div>
                    <img src='assets/images/menu-vertical/points.webp' alt='icon points' id='p2' class='point two' />
                  </div>
                </div>
                <div class='d-flex three'>
                  <div class='psico'>
                    <img src='assets/images/users/avatar-1.jpg' alt="foto psicologo" />
                    <div class='txt'>
                      <p class='h5'>Tony Batata</p>
                      <p class='date'>
                        <img src="assets/images/index/clock.webp" alt="relogio icon" loading="lazy" />
                        25/03/2021. 19:00 - 20:00
                      </p>
                    </div>
                  </div>
                  <div class='button'>
                    <div class='buttonInt three'>
                      <a href='#' class='btn-yellow'>Remarcar</a>
                      <a href='#' class='btn-grey'>Iniciar terapia</a>
                    </div>
                    <img src='assets/images/menu-vertical/points.webp' alt='icon points' id='p3' class='point three' />
                  </div>
                </div>
              </div>
            </div>
            <div class='consultas0'>
              <div class='top'>
                <div class='d-flex one'>
                  <img src='assets/images/index/caderno.webp' alt='caderno icon' loading='lazy' />
                  <p class='h5'>Consultas</p>
                </div>
              </div>
              <div class='mid'>
                <p class='h5'>0 Sessões marcadas :(</p>
                <p class='h6'>Que tal agora mesmo encontrar seu teraputa?</p>
                <a href='' class='btn-gradient'>Encontrar terapeuta</a>
              </div>
            </div>
          </div>

        </div>
        <div class='col-sm-4 col-md-4 col-lg-4 col-xl-4'>
          <?php include 'assets/includes/cardGreen.php'; ?>
          <div class='card onduty options'>
            <div class='control d-flex flex-column align-items-start justify-content-center'>
              <p class='h4'>Plantão <img src='assets/images/index/arrow_right_green.webp' alt='seta pra direita' /></p>
              <p class='h3'>R$46,60</p>
              <p class='txt'>Ou 8X de R$8,50</p>
            </div>
            <div class='list'>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Terapia instantanea </p>
              </div>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Chat, audio, Video</p>
              </div>
              <div class='item fiveMin'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Atendimento em até 5 minutos</p>
              </div>
            </div>
            <img src='assets/images/index/border_green.webp' alt='border' class='border_green' />
          </div>
          <div class='card agend options'>
            <div class='control d-flex flex-column align-items-start justify-content-center'>
              <p class='h4'>Agende <img src='assets/images/index/arrow_right_green.webp' alt='seta pra direita' /></p>
              <p class='h3'>R$46,60</p>
              <p class='txt'>Ou 8X de R$8,50</p>
            </div>
            <div class='list'>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Terapia instantanea </p>
              </div>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Chat, audio, Video</p>
              </div>
              <div class='item fiveMin'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Atendimento em até 5 minutos</p>
              </div>
            </div>
            <img src='assets/images/index/border_green.webp' alt='border' class='border_green' />
          </div>
          <div class='card match options'>
            <div class='control d-flex flex-column align-items-start justify-content-center'>
              <p class='h4'>Match <img src='assets/images/index/arrow_right_green.webp' alt='seta pra direita' /></p>
              <p class='h3'>R$??,??</p>
              <p class='txt'>Ou 8X de R$8,50</p>
            </div>
            <div class='list'>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Terapia instantanea </p>
              </div>
              <div class='item'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Chat, audio, Video</p>
              </div>
              <div class='item fiveMin'>
                <div class='img'><img src='assets/images/index/checkBlack.webp' alt='check black' /></div>
                <p>Atendimento em até 5 minutos</p>
              </div>
            </div>
            <img src='assets/images/index/border_green.webp' alt='border' class='border_green' />
          </div>
        </div>
      </div>
    </div>
    <?php include 'assets/includes/menuVerticalGreen.php'; ?>
  <?php include "assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical.js'></script>
<script src='assets/js/index.js'></script>
</body>

</html>
