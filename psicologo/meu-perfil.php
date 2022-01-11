<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Meu Perfil</title>
  <meta name="viewport" content="width=device-width, user-scalable=0">
  <meta name="description" content="" />
  <meta name="robots" content="index, follow" />
  <meta content="Gabriel Oliveira, Guilherme Menegussi, Wilian Gulini" name="author" />
  <?php include "assets/includes/cssgeralPsico.php"; ?>
  <link rel="stylesheet" href="../assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/menu-vertical-psico.css" />
  <link rel="stylesheet" href="../assets/css/footer-interno.css" />
  <link rel="stylesheet" href="assets/css/meu-perfil.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado-psico.php"; ?>
  <?php include "assets/includes/menu-vertical-psico.php"; ?>
  <div class="main-content">
    <div class="container-fluid">
      <div class='title'>
        <img src='assets/images/meu-perfil/user.webp' alt="icon user" class="icon_user" />
        <p class='h5'>Meu Perfil</p>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center justify-content-center'>
          <div class='col-sm-10 col-md-10 col-lg-10 col-xl-10 d-flex align-items-center justify-content-center flex-column'>
            <div class="progressBar">
              <p class='h5'>O seu perfil está: <span class='green'>80% completo</span></p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 80%"  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p class='txt'>Complete o seu perfil para uma melhor experiência em nossa plataforma, pode atingir no aumento do sues atendimentos</p>
            </div>
            <form class='profile needs-validation' method="post" action="" novalidate>
              <div class="img">
                <div class='imgInt'>
                  <input type="file" name="imagem" id="upload" accept="image/jpeg" />
                  <img src='assets/images/meu-perfil/icon_user.webp' alt="icon user" id="img" class="icon_user" />
                </div>
                <p>A imagem deve ter no minimo 300px por 300px</p>
              </div>
              <div class="hello">
                <p class="h4">Olá, Tony Batata</p>
              </div>
              <div class="form" >
                <div class="input one d-flex justify-content-between">
                  <div class="label inputInt one d-flex flex-column align-items-start justify-content-center">
                    <label for="validationCustom01" class="txt">Nome</label>
                    <input type="text" class="form-control" name="nome" placeholder="Tony Batata" id="validationCustom01" required />
                    <div class="valid-feedback">
                      <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                    </div>
                    <div class="invalid-feedback">
                      <i class="fas fa-times closeRed"></i>
                    </div>
                  </div>
                  <div class="label inputInt two d-flex flex-column align-items-start justify-content-center">
                    <label for="validationCustom02" class="txt">Telefone</label>
                    <input type="tel" name="telefone" class="form-control" placeholder="55+ (46) 9383-3323" required id="validationCustom02"/>
                    <div class="valid-feedback">
                      <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                    </div>
                    <div class="invalid-feedback">
                      <i class="fas fa-times closeRed"></i>
                    </div>
                  </div>
                </div>
                <div class="input two d-flex justify-content-between">
                  <div class="label inputInt one d-flex flex-column align-items-start justify-content-center">
                    <label for="validationCustom03" class="txt">Email</label>
                    <input type="email" name="email" class="form-control" placeholder="Escreva seu Email" required id="validationCustom03" />
                    <div class="valid-feedback">
                      <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                    </div>
                    <div class="invalid-feedback">
                      <i class="fas fa-times closeRed"></i>
                    </div>
                  </div>
                  <div class="label inputInt two d-flex flex-column align-items-start justify-content-center">
                    <label for="validationCustom04" class="txt">Telefone</label>
                    <input type="password" name="password" class="form-control" placeholder="**********" required id="validationCustom04" />
                    <div class="valid-feedback">
                      <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                    </div>
                    <div class="invalid-feedback">
                      <i class="fas fa-times closeRed"></i>
                    </div>
                  </div>
                </div>
                <div class="textarea">
                  <label for="validationCustom04" class="txt">Sobre</label>
                  <textarea class="form-control" required id="validationCustom04" placeholder="Conte, em poucas palavras, um pouco da sua experiência profissiona"></textarea>
                  <div class="valid-feedback">
                    <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                  </div>
                  <div class="invalid-feedback">
                    <i class="fas fa-times closeRed"></i>
                  </div>
                </div>
                <div class="formation">
                  <div class="label">
                    <div class="label inputInt one d-flex flex-column align-items-start justify-content-center">
                    <label for="validationCustom05" class="txt">Formação</label>
                    <input type="email" name="email" class="form-control" placeholder="Nome do curso, Ano, Formação" required id="validationCustom05" />
                    <div class="valid-feedback">
                      <img src='assets/images/meu-perfil/check.webp' alt="check" class='checkGreen' />
                    </div>
                    <div class="invalid-feedback">
                      <i class="fas fa-times closeRed format"></i>
                    </div>
                  </div>
                </div>
                <div class="selects d-flex">
                  <div class="control d-flex flex-column align-items-start one">
                    <label class='txt'>Temas</label>
                    <div id='ls-select' class="ls-select status">
                      <div class="control">
                        <p id="value" class="txt">Selecione</p>
                        <img id="seta" src="assets/images/meu-perfil/arrowDown.webp" alt="seta pra baixo" />
                      </div>
                      <div id='baixo' class="down val" style="display: none;">
                        <div class="label radiocontainer d-flex w-100">
                          <input type="radio" class="radio" name="Masculino" />
                          <p onclick="temasSelect(this)" id="option1" class="texto">Masculino</p>
                        </div>
                        <div class="label radiocontainer d-flex w-100">
                          <input type="radio" class="radio" name="Feminino" />
                          <p onclick="temasSelect(this)" id="option2" class="texto">Feminino</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="control d-flex flex-column align-items-start">
                    <label class='txt'>Abordagem</label>
                    <div id='ls-select1' class="ls-select1 status">
                      <div class="control">
                        <p id="value1" class="txt">Selecione</p>
                        <img id="arrow1" src="assets/images/meu-perfil/arrowDown.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down1' class="down val" style="display: none;">
                        <div class="label radiocontainer d-flex w-100">
                          <input type="radio" class="radio" name="Masculino" />
                          <p onclick="abordagemSelect(this)" id="option3" class="texto">Masculino</p>
                        </div>
                        <div class="label radiocontainer d-flex w-100">
                          <input type="radio" class="radio" name="Feminino" />
                          <p onclick="abordagemSelect(this)" id="option4" class="texto">Feminino</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='buttons d-flex justify-content-between'>
                  <a href="#">
                    <div class="dados">
                      <img src="../assets/images/menu-vertical/pagamentos.webp" alt="icon pagamento" class="dados_icon"/>
                      <p class='h5'>Dados bancarios</p>
                    </div>
                  </a>
                  <a href="#">
                    <div class="video">
                      <img src="assets/images/meu-perfil/preview.webp" alt="icon preview" class="preview_icon"/>
                      <p class='h5'>Coloque aqui o seu video!</p>
                    </div>
                  </a>
                </div>
                <div class='info d-flex justify-content-between'>
                  <div class='d-flex justify-content-start align-items-center'>
                    <i class="fas fa-info-circle"></i>
                    <p class='h4'>Está precisando de ajuda? <span class='green'>Ativar suporte da PLENO</span></p>
                  </div>
                  <input type="submit" value="Salvar Alterações" class="btn-gradient" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  <?php include "../assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical-psico.js'></script>
<script src='assets/js/meu-perfil.js'></script>
</body>

</html>