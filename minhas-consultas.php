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
  <link rel="stylesheet" href="assets/css/minhas-consultas.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado.php"; ?>
  <?php include "assets/includes/menu-vertical.php"; ?>
  <div class="main-content">
    <div class='container-fluid'>
      <div class='row'>
        <div class='card'>
          <div class='title'>
            <div class='titleInt'>
              <img src='assets/images/minhas-consultas/caderno.webp' alt='caderno icon' loading='lazy' />
              <h1 class='h4'>Minhas consultas</h1>
            </div>
            <form method='POST' action='#'>
              <input type='date' name='date' placeholder='Dia/Mês/Ano' />
              <div class="ls-select status">
                <div class="control">
                  <p id="value" class="txt">Status</p>
                  <img id="arrow" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                </div>
                <div class="down val" style="display: none;">
                  <label id="t1" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia realizada" />
                    <p onclick="radiocontainer2(this)" id="label1" class="texto">Terapia Realizada</p>
                  </label>
                  <label id="t2" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia marcada" />
                    <p onclick="radiocontainer2(this)" id="label2" class="texto">Terapia Marcada</p>
                  </label>
                  <label id="t3" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia remarcada" />
                    <p onclick="radiocontainer2(this)" id="label3" class="texto">Terapia Remarcada</p>
                  </label>
                  <label id="t4" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia cancelada" />
                    <p onclick="radiocontainer2(this)" id="label4" class="texto">Terapia Cancelada</p>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <table id='table' class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Data</th>
                <th scope="col">Horário</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr onclick='line(this)' id='linha1' class='one'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status One'><div class='st realizada'></div><p class='txt'>Terapia realizada com sucesso</p></td>
                <td onmouseout='divDrop()' class='linha1 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha2' class='two'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Two'><div class='st marcada'></div><p class='txt'>Terapia marcada</p></td>
                <td class='linha2 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha3' class='three'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Three'><div class='st remarcada'></div><p class='txt'>Terapia remarcada </p></td>
                <td class='linha3 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha4' class='four'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Four'><div class='st cancelada'></div><p class='txt'>Terapia cancelada </p></td>
                <td class='linha4 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha1' class='one'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status One'><div class='st realizada'></div><p class='txt'>Terapia realizada com sucesso</p></td>
                <td onmouseout='divDrop()' class='linha1 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha2' class='two'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Two'><div class='st marcada'></div><p class='txt'>Terapia marcada</p></td>
                <td class='linha2 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha3' class='three'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Three'><div class='st remarcada'></div><p class='txt'>Terapia remarcada </p></td>
                <td class='linha3 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha4' class='four'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>19:20</td>
                <td class='status Four'><div class='st cancelada'></div><p class='txt'>Terapia cancelada </p></td>
                <td class='linha4 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                  <p class='txt'>Reembolso</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  <?php include "assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical.js'></script>
<script src='assets/js/minhas-consultas.js'></script>
</body>

</html>