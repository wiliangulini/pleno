<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Nossos Psicólogos</title>
  <meta name="viewport" content="width=device-width, user-scalable=0">
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="robots" content="index, follow" />
  <meta content="Gabriel Oliveira, Guilherme Menegussi, Wilian Gulini" name="author" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/guia_style_psico.css" />
  <link rel="stylesheet" href="assets/css/landing-captacao.css" />
  <style>
    section.one {
      background-image: url('assets/images/landing/fundo-desktop.webp');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  </style>
</head>
<body>
  <header class='container-fluid d-flex justify-content-center'>
    <div class='container'>
      <div class='row'>
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <a class="navbar-brand" href="#"><img src='assets/images/logoPleno.webp' alt='logo' /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <div class='menu d-flex flex-column align-items-center justify-content-around'>
              <div class='menuInt'></div>
              <div class='menuInt'></div>
              <div class='menuInt'></div>
            </div>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">Conhecer</a>
              <a class="nav-item nav-link" href="#">Especialista</a>
              <a class="nav-item nav-link" href="#">Blog</a>
              <a class="nav-item nav-link plant" href="#"><strong>Plantão</strong></a>
              <a class="nav-item nav-link btn-white" href="#"><strong>Entrar</strong></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <section class='one'>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6 col-md-6 col-lg-6 txt'>
          <h1>Começe agora mesmo na pleno é facil e rapido</h1>
          <p class='h4'>Receba diariamente!</p>
          <p class='h6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue egestas in suspendisse. Amet volutpat at molestie in dui eget. Sed et urna urna.
          </p>
          <a href='' class='btn-transparent'>Entenda Mais</a>
        </div>
        <div class='col-sm-6 col-md-6 col-lg-6 form'>
          <form method="post" class='w-100' action=''>
            <div id='c1' class='card'>
              <div class='title'>
                <p class='h5'>Cadastre-se em <span class='green'>poucos passos!</span></p>
                <p class='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue </p>
              </div>
              <div class='form'>
                <label class='w-100'>
                  <p id='input1' class='txt'>Nome</p>
                  <input onfocus='green(this)' onblur='remove(this)' id='1' type='text' name='nome' placeholder="Nome completo" />
                </label>
                <label class='w-100'>
                  <p id='input2' class='txt'>Email</p>
                  <input onfocus='green(this)' onblur='remove(this)' type='email' id='2' name='email' placeholder="aaaa@gmail.com" />
                </label>
                <label class='w-100'>
                  <p id='input3' class='txt'>Telefone</p>
                  <input onfocus='green(this)' onblur='remove(this)' type='tel' id='3' name="telefone" placeholder="(11)-xxxx-xxxx" />
                </label>
                <div class='submit d-flex justify-content-start'>
                  <a id='submit' class='btn-gradient'>Continuar</a>
                </div>
              </div>
            </div>
            <div id='c2' class='card'>
              <div class='title'>
                <p class='h5'>Vamos nos conhecer mais!</p>
                <p class='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue </p>
              </div>
              <div class='form'>
                <label class='w-100'>
                  <p class='txt' id='input4'>Data de nascimento</p>
                  <input onfocus='green(this)' onblur='remove(this)' type='date' id='4' name='date' placeholder="00/00/0000" value='1995-11-30' />
                </label>
                <div id='ls-select' class="ls-select status">
                  <p class='txt' id='ls-select11'>Genêro</p>
                  <div class="control">
                    <p id="value" class="txt">Masculino</p>
                    <img id="arrow" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                  </div>
                  <div id='down' class="down val" style="display: none;">
                    <label id="t1" class="radiocontainer d-flex">
                      <input type="radio" class="radio" name="Masculino" />
                      <p onclick="radiocontainer(this)" id="label1" class="texto">Masculino</p>
                    </label>
                    <label id="t2" class="radiocontainer d-flex">
                      <input type="radio" class="radio" name="Feminino" />
                      <p onclick="radiocontainer(this)" id="label2" class="texto">Feminino</p>
                    </label>
                  </div>
                </div>
                <div class='file'>
                  <input type='file' name="file" id='upload' />
                  <img class='cloud' src='assets/images/landing/cloud_upload.webp' alt='cloud' />
                  <p id='insert' class='green'>Insira aqui <strong>uma foto sua!</strong></p>
                </div>
                <div class='submit d-flex justify-content-between'>
                  <a id='submit2'class='btn-gradient'>Continuar</a>
                  <a id='back2' class='btn-white-bg' href="">Voltar</a>
                </div>
              </div>
            </div>
            <div id='c3' class='card'>
              <div class='title'>
                <p class='h5'>Já estamos finalizando!</p>
                <p class='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue </p>
              </div>
              <div class='form'>
                <div class='control'>
                  <div id='ls-select1' class="ls-select status">
                    <p class='txt' id='ls-select12'>Valor por sessão</p>
                    <div class="control">
                      <p id="value1" class="txt">80,00 R$</p>
                      <img id="arrow1" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>
                    <div id='down1' class="down val" style="display: none;">
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="70" />
                        <p onclick="radiocontainer1(this)" id="label3" class="texto">70,00 R$</p>
                      </label>
                      <label  class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="90" />
                        <p onclick="radiocontainer1(this)" id="label4" class="texto">90,00 R$</p>
                      </label>
                      <label  class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="100" />
                        <p onclick="radiocontainer1(this)" id="label5" class="texto">100,00 R$</p>
                      </label>
                      <label  class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="120" />
                        <p onclick="radiocontainer1(this)" id="label6" class="texto">120,00 R$</p>
                      </label>
                      <label  class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="130" />
                        <p onclick="radiocontainer1(this)" id="label7" class="texto">130,00 R$</p>
                      </label>
                      <label  class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="140" />
                        <p onclick="radiocontainer1(this)" id="label8" class="texto">140,00 R$</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="150" />
                        <p onclick="radiocontainer1(this)" id="label9" class="texto">150,00 R$</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="200" />
                        <p onclick="radiocontainer1(this)" id="label10" class="texto">200,00 R$</p>
                      </label>
                    </div>
                  </div>
                  <div id='ls-select2' class="ls-select status">
                    <p class='txt' id='ls-select13'>Tempo de sessão</p>
                    <div class="control">
                      <p id="value2" class="txt">15 minutos</p>
                      <img id="arrow2" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                    </div>
                    <div id='down2' class="down val" style="display: none;">
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="15 minutos" />
                        <p onclick="radiocontainer2(this)" id="label11" class="texto">15 minutos</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="30 minutos" />
                        <p onclick="radiocontainer2(this)" id="label12" class="texto">30 minutos</p>
                      </label>
                      <label class="radiocontainer d-flex">
                        <input type="radio" class="radio" name="50 minutos" />
                        <p onclick="radiocontainer2(this)" id="label13" class="texto">50 minutos</p>
                      </label>
                    </div>
                  </div>
                </div>
                <label class='w-95'>
                  <p class='txt' id='input5'>Formação</p>
                  <input onfocus='green(this)' onblur='remove(this)' type='text' id='5' name='formacao' placeholder='2018 Bacharelado em psicologia pela USP...' />
                </label>
                <div class='control'>
                  <label class='w-50'>
                    <p class='txt' id='input6'>Número E-PSI</p>
                    <input onfocus='green(this)' onblur='remove(this)' type='number' id='6' name='e-psi' placeholder='320931' />
                  </label>
                  <label class='w-50 two'>
                    <p class='txt' id='input7'>Código CRP</p>
                    <input onfocus='green(this)' onblur='remove(this)' type='number' id='7' name='CRP' placeholder='06-768' />
                  </label>
                </div>
                <div class='link d-flex justify-content-start'>
                  <a href='' class='green'><u>Cadastre-se no E-PSI></u></a>
                </div>
                <div class='submit d-flex justify-content-between'>
                  <input id='submit3' type='submit' value='Finalizar' class='btn-gradient' />
                  <a id='back3' class='btn-white-bg' >Voltar</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class='two'>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6 col-md-6 col-lg-6 one'>
          <div class='number'>
            <div class='control-relative'>
              <div class='line'></div>
              <p class='h4'>1</p>
              <p class='h4'>2</p>
              <p class='h4'>3</p>
            </div>
          </div>
          <div class='one'>
            <p class='h4'>Cadastre-se agora mesmo!</p>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue egestas in suspendisse. Amet volutpat at molestie in dui eget. Sed et urna urna.</p>
          </div>
          <div class='two'>
            <p class='h4'>Comece a atender</p>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue egestas in suspendisse. Amet volutpat at molestie in dui eget. Sed et urna urna.</p>
          </div>
          <div class='three'>
            <p class='h4'>Receba imediatamente!</p>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue egestas in suspendisse. Amet volutpat at molestie in dui eget. Sed et urna urna.</p>
          </div>
        </div>
        <div class='col-sm-6 col-md-6 col-lg-6 two'>
          <p class='h2'>Entenda mais, como funciona aqui na Pleno!</p>
          <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis augue egestas in suspendisse. Amet volutpat at molestie in dui eget. Sed et urna urna.</p>
          <img src='assets/images/landing/logoPleno.webp' alt='logo pleno' />
        </div>
      </div>
    </div>
  </section>
  <section class='three'>
    <div class='container'>
      <div class='row'>
        <div class='title'>
          <div class='control'>
            <p class='h2'>Aqui vale a pena! </p>
            <img src='assets/images/landing/line.webp' alt='line img' />
          </div>
          <p class='h2'>Os prinicipais <span class='green'>benefícios da Pleno:</span></p>
        </div>
        <div class='controlDiv d-flex justify-content-between'>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/dolar.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/calendar.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/sol.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
        </div>
        <div class='controlDiv d-flex justify-content-between'>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/clock.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/local.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
          <div class='col-sm-3 col-md-3 col-lg-3'>
            <div class='img'>
              <img src='assets/images/landing/fullscreen.webp' alt='icon' />
            </div>
            <div class='text'>
              <p class="h4">Cadastre-se</p>
              <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class='four'>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6 col-md-6 col-lg-6 img'>
          <img src='assets/images/landing/homem-pc.webp' alt='imagem homem no notebook' /> 
        </div>
        <div class='col-sm-6 col-md-6 col-lg-6'>
          <div class='title'>
            <p class='h3'><strong>
              Comece agora mesmo!
            </strong></p>
            <p class='h5'>vamos mudar o rumo da sua carreira</p>
          </div>
          <div class='control d-flex'>
            <div class='img'>
              <img class='camera' src='assets/images/landing/camera.webp' alt='icon' />
            </div>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
          </div>
          <div class='control d-flex'>
            <div class='img'>
              <img class='wifi' src='assets/images/landing/wifi.webp' alt='icon' />
            </div>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
          </div>
          <div class='control d-flex'>
            <div class='img'>
              <img class='fone' src='assets/images/landing/fone.webp' alt='icon' />
            </div>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
          </div>
          <div class='control d-flex'>
            <div class='img'>
              <img class='alarm' src='assets/images/landing/alarm_on.webp' alt='icon' />
            </div>
            <p class='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit phasellus lobortis aug</p>
          </div>
          <a class='btn-transparent' href="">Entenda mais</a>
        </div>
      </div>
    </div>
  </section>
  <section class='five'>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6 col-md-6 col-lg-6'>
          <p class='h2'>
            A <span class='green'>pleno</span> planta uma arvore a cada atendimento realizado
          </p>
          <p class='h5'>Ajude nesta causa realize um atendimento conosco e ajude o mundo!</p>
          <div class='control'>
            <p class='txt'>Arvores <span class='strong'>plantadas</span> até o momento:</p>
            <p class='h4'>45</p>
          </div>
          <a class='btn-transparent-bg' href=''>Comeca agora!</a>
        </div>
        <div class='col-sm-6 col-md-6 col-lg-6'>
          <img src='assets/images/landing/desenho-mulher.webp' alt='mulher e plantas' />
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-3 col-md-3 col-lg-3 logo'>
          <img src='assets/images/landing/pleno-rodape.webp' alt='logo pleno cinza' />
          <p class='txt'>“ Lorem ipsum dolor sit amet, conslit. Turpis <strong>pretium massa"</strong></p>
          <div class='social'>
            <a href="">
              <img src='assets/images/landing/instagram.webp' alt='icon instagram' />
            </a>
            <a href="">
              <img src='assets/images/landing/facebook.webp' alt='icon facebook' />
            </a>
            <a href="">
              <img src='assets/images/landing/twitter.webp' alt='icon twitter' />
            </a>
          </div>
        </div>
        <div class='col-sm-3 col-md-3 col-lg-3'>
          <p class='h5'>Sou psicologo</p>
          <p class='txt'><a href=''>Conhecer mais</a></p>
          <p class='txt'><a href=''>Cadastrar</a></p>
          <p class='txt'><a href=''>Benefícios</a></p>
        </div>
        <div class='col-sm-3 col-md-3 col-lg-3'>
          <p class='h5'>Sobre o Pleno</p>
          <p class='txt'><a href=''>Acesse o Blog</a></p>
          <p class='txt'><a href=''>Redes Socias</a></p>
          <p class='txt'><a href=''>Para empresas</a></p>
        </div>
        <div class='col-sm-3 col-md-3 col-lg-3'> 
          <p class='h5'>Dúvidas</p>
          <p class='txt'><a href=''>Fale conosco</a></p>
          <p class='txt'><a href=''>Politica de privacidade</a></p>
          <p class='txt'><a href=''>Perguntas frequentes</a></p>
        </div>
      </div>
    </div>
  </footer>
  <?php include "assets/includes/javascript-psico.php"; ?>
  <script src='assets/js/landing.js'></script>
</body>
</html>