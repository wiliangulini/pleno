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
  <?php include "assets/includes/cssgeralPsico.php"; ?>
  <link rel="stylesheet" href="../assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/menu-vertical-psico.css" />
  <link rel="stylesheet" href="../assets/css/footer-interno.css" />
  <link rel="stylesheet" href="assets/css/index.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado-psico.php"; ?>
  <?php include "assets/includes/menu-vertical-psico.php"; ?>
  <div class="main-content">
    <div class="container-fluid">
      <div class="row">
        <div id='eight' class="col-sm-8 col-md-8 col-lg-8 col-xl-8">

          <?php include 'assets/includes/cardGreen-psico.php'; ?>
  
          <div class='card calendar'>
            <div class='top'>
              <div class='control one'>
                <div class='arrows'>
                  <div class='arrowInt one'>
                    <img src='assets/images/index/arrow-white-left.webp' alt='arrow button left' />
                  </div>
                  <div class='arrowInt'>
                    <img src='assets/images/index/arrow-white-right.webp' alt='arrow button right' />
                  </div>
                </div>
                <div class='date_today'>
                  <p>Hoje</p>
                </div>
              </div>
              <div class='title'>
                <p class='h4'>Outubro de 2021</p>
              </div>
              <div class='control two'>
                <div id='ls-select' class="ls-select status">
                  <div class="control">
                    <p id="value" class="txt">Mês</p>
                    <img id="arrow" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                  </div>
                  <div class="down val" style="display: none;">
                    <label id="t1" class="radiocontainer d-flex">
                      <input type="radio" class="radio" name="Dia" />
                      <p onclick="radiocontainer(this)" id="label1" class="texto">Dia</p>
                    </label>
                    <label id="t2" class="radiocontainer d-flex">
                      <input type="radio" class="radio" name="Semana" />
                      <p onclick="radiocontainer(this)" id="label2" class="texto">Semana</p>
                    </label>
                    <label id="t3" class="radiocontainer d-flex">
                      <input type="radio" class="radio" name="Mês" />
                      <p onclick="radiocontainer(this)" id="label3" class="texto">Mês</p>
                    </label>
                  </div>
                </div>
                <div class='filter' data-toggle="modal" data-target="#calendarMobile"><img src='assets/images/index/filter.webp' alt='icon filter' id='filterIcon' /></div>

                <!-- Modal -->
                <div class="modal fade" id="calendarMobile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class='title'>
                          <p class='h4'>Outubro de 2021</p>
                        </div>
                        <div id='ls-select' class="ls-select status">
                          <div class="control">
                            <p id="value" class="txt">Mês</p>
                            <img id="arrow" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                          </div>
                          <div class="down val" style="display: none;">
                            <label id="t1" class="radiocontainer d-flex">
                              <input type="radio" class="radio" name="Dia" />
                              <p onclick="radiocontainer(this)" id="label1" class="texto">Dia</p>
                            </label>
                            <label id="t2" class="radiocontainer d-flex">
                              <input type="radio" class="radio" name="Semana" />
                              <p onclick="radiocontainer(this)" id="label2" class="texto">Semana</p>
                            </label>
                            <label id="t3" class="radiocontainer d-flex">
                              <input type="radio" class="radio" name="Mês" />
                              <p onclick="radiocontainer(this)" id="label3" class="texto">Mês</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='mais'>+</div>
              </div>
            </div>
            <div class='mid agend'>
              <img src='assets/images/index/calendar.webp' height='600' class='w-100' alt='calendario pra agendamento imagem ilustrativa' />
            </div>
            <div class='bottom'>
              <div class='d-flex circle'>
                <div class='int one'>
                  <div class='circle'></div>
                  <p class='h6'>8</p>
                </div>
                <div class='int two'>
                  <div class='circle'></div>
                  <p class='h6'>5</p>
                </div>
              </div>
              <div class='d-flex expand'>
                <img src='assets/images/index/expandir.webp' alt='iconde de expandir' id='expandir' />
              </div>
            </div>
          </div>

          <div class="card plantao">
            <div class="minhas-consultas">
              <div class="top">
                <div class='d-flex one'>
                  <img src='assets/images/index/plantao.webp' alt='plantao icon' loading='lazy' />
                  <p class='h5'>Plantão</p>
                </div>
                <div class='d-flex two'>
                  <p class='simbol'>+</p>
                </div>
              </div>
              <div class='mid'>
                <div class='d-flex one'>
                  <div class='psico'>
                    <img src='../assets/images/users/avatar-1.jpg' alt='foto psicologo' />
                    <div class='ball-green'></div>
                    <p class='name'>Guabiju andré</p>
                  </div>
                  <div class='txt'>
                    <p class="name">Guabiju andré</p>
                    <p class='textoInt'>Atenda agora mesmo! 30Min, Chat/Video</p>
                  </div>
                  <div class='button one'>
                    <div class='buttonInt one'>
                      <a href='#' class='btn-white'>Atender</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card consultas">
            <div class="minhas-consultas">
              <div class="top">
                <div class='d-flex one'>
                  <img src='../assets/images/index/caderno.webp' alt='caderno icon' loading='lazy' />
                  <p class='h5'>Consultas</p>
                </div>
                <div class='d-flex two'>
                  <p class='simbol'>+</p>
                </div>
              </div>
              <div class='mid'>
                <p class='txt'>Próximas consultas:</p>
                <div class='d-flex one'>
                  <div class='psico'>
                    <img src='../assets/images/users/avatar-1.jpg' alt='foto psicologo' />
                    <div class='ball-red'></div>
                    <div class='txt two'>
                      <p class='h5'>Tony Batata</p>
                      <p class='date'>
                        <img src='../assets/images/index/clock.webp' alt='relogio icon' loading='lazy' />
                        25/03/2021. 19:00 - 20:00
                      </p>
                    </div>
                  </div>
                  <div class='button'>
                    <div class='buttonInt one'>
                      <a class='btn-yellow'>Remarcar</a>
                      <a class='btn-gradient'>Iniciar terapia</a>
                    </div>
                    <img src='../assets/images/menu-vertical/points.webp' alt='icon points' id='p1' class='point one' />
                  </div>
                </div>
              </div>
            </div>
            <div class='consultas0'>
              <div class='top'>
                <div class='d-flex one'>
                  <img src='../assets/images/index/caderno.webp' alt='caderno icon' loading='lazy' />
                  <p class='h5'>Consultas</p>
                </div>
              </div>
              <div class='mid'>
                <p class='h5'>0 Sessões marcadas :(</p>
              </div>
            </div>
          </div>
        </div>
        <div id='four' class='col-sm-4 col-md-4 col-lg-4 col-xl-4 flex-column' style='display:flex;'>
          <?php include 'assets/includes/cardGreen-psico.php'; ?>

          <div class='card status'>
            <div class='top'>
              <i class="fas fa-signal"></i>
              <p class='h4'>Status</p>
            </div>
            <div class='mid'>
              <div class='agend one'>
                <div class='control'>
                  <div class='img'>
                    <img src='assets/images/index/agendamentos.webp' alt='icon chat' />
                  </div>
                  <div class='txt'>
                    <p class='h5'>Agendamentos</p>
                  </div>
                </div>
                <div class='number'>
                  <p class='h4'>65</p>
                </div>
              </div>
              <div class='plantoes one'>
                <div class='control'>
                  <div class='img'>
                    <img src='assets/images/index/plantoes.webp' alt='icon chat' />
                  </div>
                  <div class='txt'>
                    <p class='h5'>Plantões</p>
                  </div>
                </div>
                <div class='number'>
                  <p class='h4'>12</p>
                </div>
              </div>
              <div class='avaliacoes one'>
                <div class='control'>
                  <div class='img'>
                    <img src='assets/images/index/avaliacoes.webp' alt='icon chat' />
                  </div>
                  <div class='txt'>
                    <p class='h5'>Avaliações</p>
                  </div>
                </div>
                <div class='number'>
                  <p class='h4'>50</p>
                </div>
              </div>
            </div>
          </div>

          <div class='card financeiro'>
            <div class='top'>
              <img src='assets/images/index/financeiro.webp' alt='icon financeiro' />
              <p class='h4'>Financeiro</p>
            </div>
            <div class='mid'>
              <p class='h4'>Total: R$53,40</p>
              <p class='h6'>Acesse seu financeiro para <span>transferir,</span> ou para mais informações de <span>seus pagamentos.</span></p>
              <a href='' class='btn-gradient'>Ver Financeiro</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php include '../assets/includes/menuVerticalGreen.php'; ?>
  <?php include "../assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical-psico.js'></script>
<script src='assets/js/dashboard.js'></script>
</body>

</html>
