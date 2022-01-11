<div id='menu-vertical' class='opened'>
  <div class='logo'>
    <a class="navbar-brand" href="dashboard.php">
      <img src="../assets/images/menu-vertical/logoPleno.webp" alt="logo pleno" />
    </a>
  </div>
  <div class='menu-vertical'>
    <div class='menuVertical'>
      <p class='h5'>Menu</p>
      <ul class='menu'>
        <li id='home' class='item'>
          <a href="dashboard.php">
            <div class='img'>
              <img src='../assets/images/menu-vertical/home.webp' alt='icon menu vertical'>
            </div>
            <span>Início</span>
          </a>
        </li>
        <li id='perfil' class='item'>
          <a href="meu-perfil.php">
            <div class='img'>
              <img src='../assets/images/menu-vertical/meuPerfil.webp' alt='icon menu vertical'>
            </div>
            <span>Meu Perfil</span>
          </a>
        </li>
        <li id='agenda' data-toggle="modal" data-target="#agenda_menu" class='item'>
          <a>
            <div class='img'>
              <img src='assets/images/menu-vertical/agenda.webp' alt='icon menu vertical'>
            </div>
            <span>Agenda</span>
          </a>
        </li>
        <li id='consultas' class='item'>
          <a href="consultas.php">
            <div class='img'>
              <img src='../assets/images/menu-vertical/minhasConsultas.webp' alt='icon menu vertical'>
            </div>
            <span>Consultas</span>
          </a>
        </li>
        <li id='pagamentos' class='item'>
          <a href="pagamentos.php">
            <div class='img'>
              <img src='../assets/images/menu-vertical/pagamentos.webp' alt='icon menu vertical'>
            </div>
            <span>Pagamentos</span>
          </a>
        </li>
        <li id='sair' class='item'>
          <a href="">
            <div class='img'>
              <img src='../assets/images/menu-vertical/sair.webp' alt='icon menu vertical'>
            </div>
            <span>Sair</span>
          </a>
        </li>
      </ul>
    </div>
    <div class='menuVertical two'>
      <p class='h5'>Outros</p>
      <ul class='menu'>
        <li id='blog' class='item'>
          <a href=''>
            <div class='img'>
             <img src='../assets/images/menu-vertical/acesseBlog.webp' alt='icon menu vertical' />
            </div>
            <span>Acesse o Blog</span>
          </a>
        </li>
        <li id='qmSomos' class='item'>
          <a href=''>
            <div class='img'>
              <img src='../assets/images/menu-vertical/qmSomos.webp' alt='icon menu vertical' />
            </div>
            <span>Quem somos</span>
          </a>
        </li>
      </ul>
    </div>
    <?php include 'assets/includes/menuVerticalGreen-psico.php'; ?>
    <div class='menuVertical spotify'>
      <p class='txt'>Relaxe ouvindo nossa playlist</p>
      <div id='spotify' class='spotify'>
        <img id='spotifyImg' src='../assets/images/menu-vertical/spotify.webp' alt='icon spotify' />
        <p class='h5'>Spotify</p>
      </div>
    </div>
  </div>
</div>
<!-- Modal agendamento -->
<div class="modal fade" id="agenda_menu" tabindex="-1" role="dialog" aria-labelledby="agenda_menuTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="agenda_menuLongTitle"><i class="far fa-calendar-alt"></i>Agenda</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>
      <div class="modal-body" id='accordion'>
        <form method='post' action='' class='w-100'>
          <div class='card available one'>
            <div class='card-header' data-toggle='collapse' data-target='#card1' aria-controls='card1'>
            <label>
              <p class='h5' >Sua disponibilidade</p>
              <input type="radio" name="checkbox" />
              <span data-toggle='collapse' data-target='#card1' aria-controls='card1' class="chek"></span>
            </label>
            </div>
            <div class='collapse c_one' id='card1' data-parent='#accordion'>
              <div class='card-body'>
                <div class='periodos one'>
                  <p class='inputTitle'>Períodos</p>
                  <div class='control w-100'>
                    <div class="ls-select early">
                      <div class="control">
                        <p id="day" class="txt">24/05/2021</p>
                        <img id="arrow" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down' class="down val" style="display: none;">
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Dia" />
                          <p onclick="radiocontainer(this)" id="label4" class="texto">00/00/0000</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Semana" />
                          <p onclick="radiocontainer(this)" id="label5" class="texto">11/11/1111</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Mês" />
                          <p onclick="radiocontainer(this)" id="label6" class="texto">22/22/2222</p>
                        </label>
                      </div>
                    </div>

                    <p class='ate'>Até</p>
                  
                    <div class="ls-select end">
                      <div class="control">
                        <p id="day2" class="txt">24/05/2021</p>
                        <img id="arrow2" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down2' class="down val" style="display: none;">
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Dia" />
                          <p onclick="radiocontainer2(this)" id="label7" class="texto">00/00/0001</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Semana" />
                          <p onclick="radiocontainer2(this)" id="label8" class="texto">11/11/1112</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Mês" />
                          <p onclick="radiocontainer2(this)" id="label9" class="texto">22/22/2223</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='periodos two'>
                  <div class='add'>
                    <div class='remove_int'><i class="fas fa-times"></i></div>
                    <div class='add_int'><i class="fas fa-times"></i></div>
                  </div>
                  <div class='control w-100'>
                    <div class='controlInt w-100'>
                      <p class='inputTitle'>Dias:</p>
                      <div class="ls-select day">
                        <div class="control">
                          <p id="day3" class="txt">Todos os dias</p>
                          <img id="arrow3" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down3' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer3(this)" id="label10" class="texto">Segunda a Sexta</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer3(this)" id="label11" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer3(this)" id="label12" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class='controlInt w-100'>
                      <p class='inputTitle'>Intervalos:</p>
                      <div class="ls-select interval">
                        <div class="control">
                          <p id="day4" class="txt">09:00</p>
                          <img id="arrow4" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down4' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer4(this)" id="label13" class="texto">Segunda a Sexta</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer4(this)" id="label14" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer4(this)" id="label15" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <p class='ate'>Até</p>
                  
                    <div class="ls-select intervalEnd">
                      <div class="control">
                        <p id="day5" class="txt">09:00</p>
                        <img id="arrow5" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down5' class="down val" style="display: none;">
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Dia" />
                          <p onclick="radiocontainer5(this)" id="label16" class="texto">Dia</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Semana" />
                          <p onclick="radiocontainer5(this)" id="label17" class="texto">Semana</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Mês" />
                          <p onclick="radiocontainer5(this)" id="label18" class="texto">Mês</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='buttons d-flex flex-column align-items-start justify-content-center'>
                  <p class='add_hour'><i class="fas fa-times"></i>Adcionar novo Dia/hora</p>
                  <input type='submit' class='btn-gradient' value='Salvar informações' />
                </div>
              </div>
            </div>
          </div>

          <div class='card compromise one'>
            <div class='card-header' data-toggle='collapse' data-target='#card2' aria-controls='card2'>
              <label>
                <p class='h5' >Compromissos pessoais</p>
                <input type="radio" name="checkbox" />
                <span  data-toggle='collapse' data-target='#card2' aria-controls='card2' class="chek"></span>
              </label>
            </div>
            <div class='collapse c_one' id='card2' data-parent='#accordion'>
              <div class='card-body'>
                <div class='periodos one'>
                  <p class='inputTitle'>Data</p>
                  <div class='control w-100'>
                    <div class="ls-select compromise">
                      <div class="control">
                        <p id="day6" class="txt">24/05/2021</p>
                        <img id="arrow6" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down6' class="down val" style="display: none;">
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Dia" />
                          <p onclick="radiocontainer6(this)" id="label4" class="texto">00/00/0000</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Semana" />
                          <p onclick="radiocontainer6(this)" id="label5" class="texto">11/11/1111</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Mês" />
                          <p onclick="radiocontainer6(this)" id="label6" class="texto">22/22/2222</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='periodos two'>
                  <div class='control w-100'>
                    <div class='controlInt w-100'>
                      <p class='inputTitle'>Hora</p>
                      <div class="ls-select compromise_two">
                        <div class="control">
                          <p id="day7" class="txt">09:00</p>
                          <img id="arrow7" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down7' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer7(this)" id="label10" class="texto">Seg, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer7(this)" id="label11" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer7(this)" id="label12" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <p class='ate ex'>Até</p>
                    <div class='controlInt w-100 ex'>
                      <p class='inputTitle'>Intervalos:</p>
                      <div class="ls-select compromise_three">
                        <div class="control">
                          <p id="day8" class="txt">09:00</p>
                          <img id="arrow8" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down8' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer8(this)" id="label13" class="texto">Segunda a Sexta</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer8(this)" id="label14" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer8(this)" id="label15" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='periodos three'>
                  <p class='inputTitle'>Descrição</p>
                  <textarea class='w-100'></textarea>
                </div>
                <div class='buttons d-flex align-items-start justify-content-start'>
                  <input type='submit' class='btn-gradient' value='Salvar informações' />
                </div>
              </div>
            </div>
          </div>

          <div class='card agend one'>
            <div class='card-header' data-toggle='collapse' data-target='#card3' aria-controls='card3'>
              <label>
                <p class='h5'>Agendamento</p>
                <input type="radio" name="checkbox" />
                <span data-toggle='collapse' data-target='#card3' aria-controls='card3' class="chek"></span>
              </label>
            </div>
            <div class='collapse c_one' id='card3' data-parent='#accordion'>
              <div class='card-body'>
                <div class='periodos one'>
                  <p class='inputTitle'>Data</p>
                  <div class='control w-100'>
                    <div class="ls-select agendamento">
                      <div class="control">
                        <p id="day9" class="txt">24/05/2021</p>
                        <img id="arrow9" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                      </div>
                      <div id='down9' class="down val" style="display: none;">
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Dia" />
                          <p onclick="radiocontainer9(this)" id="label4" class="texto">00/00/0000</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Semana" />
                          <p onclick="radiocontainer9(this)" id="label5" class="texto">11/11/1111</p>
                        </label>
                        <label class="radiocontainer d-flex">
                          <input type="radio" class="radio" name="Mês" />
                          <p onclick="radiocontainer9(this)" id="label6" class="texto">22/22/2222</p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='periodos two'>
                  <div class='control w-100'>
                    <div class='controlInt w-100'>
                      <p class='inputTitle'>Hora</p>
                      <div class="ls-select agendamento_two">
                        <div class="control">
                          <p id="day10" class="txt">09:00</p>
                          <img id="arrow10" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down10' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer10(this)" id="label10" class="texto">Seg, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer10(this)" id="label11" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer10(this)" id="label12" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <p class='ate ex'>Até</p>
                    <div class='controlInt w-100 ex'>
                      <div class="ls-select agendamento_three">
                        <div class="control">
                          <p id="day11" class="txt">09:00</p>
                          <img id="arrow11" src="../assets/images/nossos-psicologos/arrowDownGrey.webp" alt="seta pra baixo" />
                        </div>
                        <div id='down11' class="down val" style="display: none;">
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Dia" />
                            <p onclick="radiocontainer11(this)" id="label13" class="texto">Segunda a Sexta</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Semana" />
                            <p onclick="radiocontainer11(this)" id="label14" class="texto">Seg, Qua, Sex</p>
                          </label>
                          <label class="radiocontainer d-flex">
                            <input type="radio" class="radio" name="Mês" />
                            <p onclick="radiocontainer11(this)" id="label15" class="texto">Seg, Ter, Qui, Sex</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='periodos three'>
                  <div class='control one'>
                    <p class='inputTitle'>Nome do cliente</p>
                    <input type='text' name='nomeCliente' />
                  </div>
                  <div class='control two'>
                    <p class='inputTitle'>Valor</p>
                    <input type='number ' name='valor'  />
                  </div>
                </div>
                <div class='buttons d-flex align-items-start justify-content-start'>
                  <input type='submit' class='btn-gradient' value='Salvar informações' />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>