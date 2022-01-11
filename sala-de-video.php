<!DOCTYPE html>
<html>

<head>
    <title> OpenTok Signaling Sample </title>
    <meta charset="uft-8" />
    <meta name="viewport" content="width=device-width, user-scalable=0" >
    <script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
    <!-- Polyfill for fetch API so that we can fetch the sessionId and token in IE11 -->
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@7/dist/polyfill.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js" charset="utf-8"></script>
    <link href="assets/css/salaVideo.css" rel="stylesheet" type="text/css">
</head>

<body>
  <main class='main'>
    <div id="videos">
      <div id="subscriber"></div>
      <div id="publisher"></div>
    </div>

    <div id="textchat" style="display: flex;">
      <div id="history">
        <!-- div de textos criadas apenas para ver como ira ficar, pois essas divs sao inseridas via js pelo opentok-->
        <div class='title'>
          <p class="titleInt">Mensagens da chamada</p>
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
        <p class="mine"><span class='nameT'>Você <span class='hora'>12:33</span><br></span>Ola</p>
        <p class="theirs"><span class='theirsT'>Psicologo <span class='hora'>12:33</span><br></span>Ola, tudo bem?</p>

        <!-- end divs chat -->
      </div>
      <form method="POST" id='forms' action="">
        <input type="text" placeholder="Escreva aqui sua mensagem" id="msgTxt"></input>
        <input type="submit" class="submit" name="submit" />
        <img src='assets/images/video/enviar.png' alt='enviar' class='enviar' />
      </form>
    </div>
  </main>
  <div class='controls'>
    <div class="text">
      <p class="hour">12:33</p>
      <p class="name">Psicologa Roberta mendes <span class="circleGreen"></span></p>
    </div>
    <div class="buttons">
      <div class="img mic">
        <img src="assets/images/video/microphone.png" alt="microfone icon" class="microphone" />
      </div>
      <div class="img cam">
        <img src="assets/images/video/camera.png" alt="camera icon" class="camera" />
      </div>
      <div class="img fone">
        <img src="assets/images/video/phone.png" alt="fone icon" class="fone" />
      </div>
    </div>
    <div class="chat">
      <div class='chatInt' id="chatInt">
        <img src="assets/images/video/chat.png" alt="chat icon" class="chat_text" />
        <p class="txt">Chat</p>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="assets/js/config.js"></script>
  <script type="text/javascript" src="assets/js/app.js"></script>
  <script type="text/javascript" src="assets/js/salaVideo.js"></script>
</body>

</html>
