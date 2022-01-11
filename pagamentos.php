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
  <link rel="stylesheet" href="assets/css/pagamentos.css" />
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
              <img src='assets/images/pagamentos/pagamentos.webp' alt='caderno icon' loading='lazy' />
              <h1 class='h4'>Pagamentos</h1>
            </div>
            <p class='h6'>Consultas pagas: <strong>80</strong></p>
            <form method='POST' action='#'>
              <p class='h6'>Filtros:</p>
              <input type='date' name='date' placeholder='Dia/Mês/Ano' />
              <div class="ls-select status">
                <div class="control">
                  <p id="value" class="txt">Status</p>
                  <img id="arrow" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                </div>
                <div class="down val" style="display: none;">
                  <label id="t1" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia realizada" />
                    <p onclick="radiocontainer2(this)" id="label1" class="texto">Terapia realizada</p>
                  </label>
                  <label id="t2" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia marcada" />
                    <p onclick="radiocontainer2(this)" id="label2" class="texto">Terapia marcada</p>
                  </label>
                  <label id="t3" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia remarcada" />
                    <p onclick="radiocontainer2(this)" id="label3" class="texto">Terapia remarcada</p>
                  </label>
                  <label id="t4" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia cancelada" />
                    <p onclick="radiocontainer2(this)" id="label4" class="texto">Terapia cancelada</p>
                  </label>
                </div>
              </div>
              <div class="ls-select status forma">
                <div class="control">
                  <p id="forma" class="txt">Forma</p>
                  <img id="arrow2" src="assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                </div>
                <div class="down two val" style="display: none;">
                  <label id="ter1" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia realizada" />
                    <p onclick="radiocontainer(this)" id="label5" class="texto">Terapia realizada</p>
                  </label>
                  <label id="ter2" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia marcada" />
                    <p onclick="radiocontainer(this)" id="label6" class="texto">Terapia marcada</p>
                  </label>
                  <label id="ter3" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia remarcada" />
                    <p onclick="radiocontainer(this)" id="label7" class="texto">Terapia remarcada</p>
                  </label>
                  <label id="ter4" class="radiocontainer d-flex">
                    <input type="radio" class="radio" name="Terapia cancelada" />
                    <p onclick="radiocontainer(this)" id="label8" class="texto">Terapia cancelada</p>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <table id='table' class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Terapeuta</th>
                <th scope="col">Data</th>
                <th scope="col">Forma</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr onclick='line(this)' id='linha1' class='one'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Cartão de crédito</td>
                <td class='status One'><div class='st confirm'></div><p class='txt'>Pagamento Confirmado</p></td>
                <td class='linha1 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha2' class='two'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Cartão de débito</td>
                <td class='status Two'><div class='st confirm'></div><p class='txt'>Pagamento Confirmado</p></td>
                <td class='linha2 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha3' class='three'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>PIX</td>
                <td class='status Three'><div class='st wait'></div><p class='txt'>Pagamento em Aguardo</p></td>
                <td class='linha3 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha4' class='four'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Boleto</td>
                <td class='status Four'><div class='st rejected'></div><p class='txt'>Pagamento Rejeitado</p></td>
                <td class='linha4 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha1' class='one'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Cartão de crédito</td>
                <td class='status One'><div class='st confirm'></div><p class='txt'>Pagamento Confirmado</p></td>
                <td class='linha1 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha2' class='two'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Cartão de débito</td>
                <td class='status Two'><div class='st confirm'></div><p class='txt'>Pagamento Confirmado</p></td>
                <td class='linha2 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha3' class='three'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>PIX</td>
                <td class='status Three'><div class='st wait'></div><p class='txt'>Pagamento em Aguardo</p></td>
                <td class='linha3 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
                </td>
              </tr>
              <tr onclick='line(this)' id='linha4' class='four'>
                <td>Murilo carrara</td>
                <td>20/10/2021</td>
                <td>Boleto</td>
                <td class='status Four'><div class='st rejected'></div><p class='txt'>Pagamento Rejeitado</p></td>
                <td class='linha4 ext' style='display: none;'>
                  <p class='txt'>Mais detalhes</p>
                  <p class='txt'>Avaliar</p>
                  <p class='txt'>Excluir</p>
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
<script src='assets/js/pagamentos.js'></script>
</body>

</html>