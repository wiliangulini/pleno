
            const FULL_DASH_ARRAY = 283;
            // O aviso ocorre às 10s
            const WARNING_THRESHOLD = 10;
            // Alerta ocorre aos 5s
            const ALERT_THRESHOLD = 5;

            const COLOR_CODES = {
            info: {
                color: "green"
            },
            warning: {
                color: "orange",
                threshold: WARNING_THRESHOLD
            },
            alert: {
                color: "red",
                threshold: ALERT_THRESHOLD
            }
            };
            // Comece com um valor inicial de 20 segundos
            const TIME_LIMIT = 20;
            // Inicialmente, nenhum tempo passou, mas isso contará e subtrairá do TIME_LIMIT 
            let timePassed = 0;
            let timeLeft = TIME_LIMIT;
            let timerInterval = null;
            let remainingPathColor = COLOR_CODES.info.color;
            

            document.getElementById("app").innerHTML = `
            <div class="text_one"><i class="fas fa-times close"></i><p>Você está em uma Sala de Espera! Aguarde seu Anjo.</p></div>
            <div class="text_two"><i class="fas fa-times close"></i><p>Seu anjo chegoou e está te esperando!</p></div>
            <div class="text_three"><i class="fas fa-times close"></i><p>Seu anjo não chegou. Moio a jogada kkkkkkkk </p></div>
            <div class="base-timer" id="baseTimer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="283"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    "
                ></path>
                </g>
            </svg>
            <span id="base-timer-label" class="base-timer__label">
                <div id="number">
                ${formatTime(timeLeft)}
                </div>
                <picture><img id="img" src='../assets/images/sala/02.png'/></picture>
            </span>
            </div>
            `;

            startTimer();

            function onTimesUp() {
            clearInterval(timerInterval);
            }

            function startTimer() {
            timerInterval = setInterval(() => {
                // A quantidade de tempo passada em incrementos de um
                timePassed++;
                timeLeft = TIME_LIMIT - timePassed;
                // O rótulo de tempo restante é atualizado
                //document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
                setCircleDasharray();
                setRemainingPathColor(timeLeft);

                if (timeLeft === 0) {
                onTimesUp();
                }
            }, 1000);
            }

            function formatTime(time) {
            // O maior número inteiro menor ou igual ao resultado do tempo dividido por 60.
            const minutes = Math.floor(time / 60);
            // Os segundos são o restante do tempo dividido por 60 (operador de módulo)
            let seconds = time % 60;
            // Se o valor de segundos for menor que 10, então exiba os segundos com um zero à esquerda
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            // A saida no formato MM:SS
            return `${minutes}:${seconds}`;
            }

            

            function setRemainingPathColor(timeLeft) {
            const { alert, warning, info } = COLOR_CODES;
            if(timeLeft == 0) {
               $(".text_two").css("display","none");
               $(".text_three").css("display","flex");
               $("#baseTimer").addClass("txt");
            }
            else if(timeLeft == 6) {
                $("#img").css("height",200);
                $("#img").css("margin-left",0);
                $("#img").attr("src","../assets/images/sala/success.png");
                $(".text_two").css("display","flex");
                $(".text_one").css("display","none");
                $("#baseTimer").addClass("txt");
            }
            // Se o tempo restante for menor ou igual a 5, remova a classe "aviso" e aplique a classe "alerta".
            else if (timeLeft <= alert.threshold) {
                document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
                document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);

            }
            // Se o tempo restante for menor ou igual a 10, remova a cor base e aplique a classe "aviso". 
            else if (timeLeft <= warning.threshold) {
                document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
                document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
            }
            // imagem
            else if(timeLeft == 15) {
                $(".text_one").css("display","flex");
                $("#baseTimer").addClass("txt");
            }  
            }

            // Divide o tempo restante pelo limite de tempo definido.
            function calculateTimeFraction() {
            const rawTimeFraction = timeLeft / TIME_LIMIT;
            return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
            }

            //Atualize o valor dasharray conforme o tempo passa, começando com 283
            function setCircleDasharray() {
            const circleDasharray = `${(
                calculateTimeFraction() * FULL_DASH_ARRAY
            ).toFixed(0)} 283`;
            document
                .getElementById("base-timer-path-remaining")
                .setAttribute("stroke-dasharray", circleDasharray);
            }

            //fechar o texto 
            $(document).ready(function(){
                $(".close").on("click", function() {
                    $(".text_one").css("display","none");
                    $("#baseTimer").removeClass("txt");
                    $(".text_two").css("display","none");
                    $(".text_three").css("display","none");
                });
            });