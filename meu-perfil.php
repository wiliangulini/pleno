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
  <link rel="stylesheet" href="assets/css/meu-perfil.css" />
</head>
<body>
<div id="layout-wrapper">
  <?php include "assets/includes/header-logado.php"; ?>
  <?php include "assets/includes/menu-vertical.php"; ?>
  <div class="main-content">
    <div class='container-fluid'>
      <div class='row'>
        <div class='title'>
          <div class='titleInt'>
            <img src='assets/images/meu-perfil/meu-perfil.webp' alt='caderno icon' loading='lazy' />
            <h1 class='h4'>Meu Perfil</h1>
          </div>
        </div>
        <div class='card'>
          <form method="POST" action="" id="alterafoto" enctype="multipart/form-data">
            <div class='photo'>
                <input type="file" name="imagem" id="upload" accept="image/jpeg" />
                <img width='120' height='120' id="img" src="assets/images/meu-perfil/user.webp" />
                <span>A imagem deve ter no minimo 300px por 300px</span>
              <div class='name'>
                <p class='h6'>Olá, Tonho Bizonho</p>
              </div>
            </div>
            <div class='inputs d-flex flex-column align-items-center justify-content-center'>
              <div class='d-flex align-items-center justify-content-between'>
                <label>
                  <p>Nome</p>
                  <input type='text' name='name' placeholder='Tonho Bizonho' />
                </label>
                <label>
                  <p>Telefone</p>
                  <input type='tel' name='phone' placeholder='55+ (99) 9999-9999' />
                </label>
              </div>
              <div class='d-flex align-items-center justify-content-between'>
                <label>
                  <p>Email</p>
                  <input type='text' name='name' placeholder='tonho.bizonho@gmail.com' />
                </label>
                <label>
                  <p>Senha</p>
                  <input type='password' name='password' placeholder='**********' />
                </label>
              </div>
            </div>
            <div class='bottom'>
              <p class='txt'><i class="fas fa-info-circle"></i>Está precisando de ajuda?<span class='green'>Ativar suporte da PLENO</span></p>
              <input type='submit' value='Salvar Alterações' class='btn-gradient' />
            </div>
          </form>
        </div>
      </div>
    </div>

  <?php include "assets/includes/footer-interno.php"; ?>
  </div>
</div>
<?php include "assets/includes/javascript-psico.php"; ?>
<script src='assets/js/menu-vertical.js'></script>
<script src='assets/js/meu-perfil.js'></script>
</body>

</html>