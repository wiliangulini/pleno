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
  <link rel="stylesheet" href="assets/css/nossos-psicologos.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-user.php"; ?>
  <div class="main-content">
    <div class="container-fluid pesquisa ">
      <div class="container justify-content-center align-items-center d-flex">
        <div class="row w-100 justify-content-center align-items-center">
          <div class="col-xl-8 d-flex flex-column align-items-center justify-content-center">
            <h1>Vamos encontrar seu terapeuta?</h1>
            <div class="input-group input-group-lg pesquisa" id="pes">
              <div class="input-group-prepend" id="filtros">
                <span class="input-group-text d-flex justify-content-center align-items-center" id="inputGroup-sizing-lg">Filtros<img src="assets/images/nossos-psicologos/arrowDown.webp" id="close" /></span>
              </div>
              <input type="text" id="place" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Escreva oque deseja procurar:">
              <div id="arrow" class="input-group-append">
                <span class="input-group-text d-flex justify-content-center align-items-center" id="inputGroup-sizing-lg1"><img id="arrowGreen" src="assets/images/nossos-psicologos/pesquisa.webp" alt="pesquisa" /></span>
              </div>
            </div>
            <div class="filter" id="filter" style="display: none;">
              <form method="POST" action="">
                <div class="options">
                  <div class="ls-select temas">
                    <div class="control">
                      <p id="temas" class="txt">Temas que gostaria de conversar</p>
                      <img id="arrowTema" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>
                    <div class="down" style="display: none;">
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)" id="label1" class="texto">Abusos Sexuais</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)"  id="label2" class="texto">Ansiedade</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p  onclick="radiocontainer(this)" id="label3" class="texto">Depressão</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)" id="label4" class="texto">Luto</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)" id="label5" class="texto">Problemas de Saúde</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)" id="label6" class="texto">Relacionamentos</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="temas" />
                        <p onclick="radiocontainer(this)" id="label7" class="texto">Violência Doméstica</p>
                      </label>
                    </div>
                  </div>
                  <input type="text" class="namePsico" name="nomePsicologo" placeholder="Nome do Psicologo" />
                </div>
                <div class="options1">
                  <div class="ls-select especialidade">
                    <div class="control">
                      <p id="especialidades" class="txt">Especialidade</p>
                      <img id="arrowEsp" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>
                    <div class="down esp" style="display: none;">
                      <label id="e_abuso" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p onclick="radiocontainer1(this)" id="label8" class="texto">Abusos Sexuais</p>
                      </label>
                      <label id="e_ansiedade" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p onclick="radiocontainer1(this)" id="label9" class="texto">Ansiedade</p>
                      </label>
                      <label id="e_depressao" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p onclick="radiocontainer1(this)" id="label10" class="texto">Depressão</p>
                      </label>
                      <label id="e_luto" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p  onclick="radiocontainer1(this)" id="label11" class="texto">Luto</p>
                      </label>
                      <label id="e_saude" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p onclick="radiocontainer1(this)" id="label12" class="texto">Problemas de Saúde</p>
                      </label>
                      <label id="e_relacionamento" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p  onclick="radiocontainer1(this)" id="label13" class="texto">Relacionamentos</p>
                      </label>
                      <label id="e_violencia" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="especialidade" />
                        <p  onclick="radiocontainer1(this)" id="label14" class="texto">Violência Doméstica</p>
                      </label>
                    </div>
                  </div>
                  <div class="select d-flex justify-content-between">
                  <div class="ls-select value">
                    <div class="control">
                      <p id="value" class="txt">Valor R$ 20,00</p>
                      <img id="arrowVal" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>
                    <div class="down val" style="display: none;">
                      <label id="v_20" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_20" />
                        <p onclick="radiocontainer2(this)" id="label15" class="texto">Valor R$ <strong>20,00</strong></p>
                      </label>
                      <label id="v_30" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_30" />
                        <p onclick="radiocontainer2(this)" id="label16" class="texto">Valor R$ <strong>30,00</strong></p>
                      </label>
                      <label id="v_40" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_40" />
                        <p onclick="radiocontainer2(this)" id="label17" class="texto">Valor R$ <strong>40,00</strong></p>
                      </label>
                      <label id="v_50" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_50" />
                        <p onclick="radiocontainer2(this)" id="label18" class="texto">Valor R$ <strong>50,00</strong></p>
                      </label>
                      <label id="v_60" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_60" />
                        <p onclick="radiocontainer2(this)" id="label19" class="texto">Valor R$ <strong>60,00</strong></p>
                      </label>
                      <label id="v_70" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_70" />
                        <p onclick="radiocontainer2(this)" id="label20" class="texto">Valor R$ <strong>70,00</strong></p>
                      </label>
                      <label id="v_100" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="value_100" />
                        <p onclick="radiocontainer2(this)" id="label21" class="texto">Valor R$ <strong>100,00</strong></p>
                      </label>
                    </div>
                  </div>
                  <div class="ls-select genero">
                    <div class="control">
                      <p id="genero" class="txt">Gênero</p>
                      <img id="arrowGen" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>  
                    <div class="down gen" style="display: none;">
                      <label id="e_abuso" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="radio" />
                        <p onclick="radiocontainer3(this)" id="label22" class="texto">Masculino</p>
                      </label>
                      <label id="e_ansiedade" class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="radio" />
                        <p onclick="radiocontainer3(this)" id="label23" class="texto">Feminino</p>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
                <input class="btn-gradient" value="Buscar" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="online d-flex">
        <div class="col-sm-6 d-flex justify-content-center align-items-center one">
          <img src="assets/images/nossos-psicologos/online.webp" alt="icone de pessoa falando" />
          <p><strong>24 </strong>Online</p>
        </div>
        <div class="col-sm-6 d-flex justify-content-center align-items-center two">
          <img src="assets/images/nossos-psicologos/psicologo_online.png" alt="icone de psicólogo online" />
          <p><strong>233 </strong>Psicólogos</p>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="container-fluid nossosPsicologos">
        <div class="row justify-content-center">
          <div class="col-xl-8" id="cardPsico">
            <?php include "blocks/card-psicologo.php"; ?>
          </div>
        </div>
      </div>
    </div>
    <?php include "assets/includes/footer-logout.php"; ?>
  </div>
</div>

<?php include "assets/includes/javascript-psico.php"; ?>
  <script src="assets/js/nossos-psicologos.js"></script>
</body>

</html>
