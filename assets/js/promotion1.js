$(document).scroll(function() {
  if($(document).scrollTop() > 171) {
    $("#promotion").css("height","0");
    $("#page-topbar, #verticalMenu").css("margin-top","0");
		$("#promotion").css("opacity","0");
  } else {
    $("#promotion").css("height","9vh");
    $("#page-topbar, #verticalMenu").css("margin-top","9vh");
		$("#promotion").css("opacity","1");
  }
});
/*
window.onload = function index() {
	let url_atual = window.location.href;

	if(url_atual == "https://eyhe.com.br/") {
		document.getElementById("link").setAttribute("href","https://eyhe.com.br/conheca.php");
	} else {
		console.log("nao está na index.html, nada a fazer.");
	}
}
index();*/

var tempo = new Number();

//local Storage

let dataInicial = new Date();

//localstorage data inicial
localStorage.setItem('dataInicial',dataInicial); 

let dateEnd = localStorage.getItem('dataFinal');
let dateEarly = localStorage.getItem('dataInicial');

let fim = new Date(dateEnd).getTime();
let inicio = new Date(dateEarly).getTime();
let result = inicio - fim;
let segAdicionais = result / 1000;


// Tempo em segundos - verificação
if(new Date(dateEnd) < 1) {
	tempo = 604800;
} else {
	let getTimer = localStorage.getItem("tempo");
	tempo = getTimer - segAdicionais;
}
//repetiçao do cronometro
$(document).scroll(function() {
	if($(document).scrollTop() == 0) {
		if($("#dia").html() == "0" && $("#hora").html() == "00" && $("#minuto").html() == "00" && $("#segundo").html() == "01") {
      tempo = 604800;
			startCountdown();
		}
	}else {
		if($("#dia").html() == "0" && $("#hora").html() == "00" && $("#minuto").html() == "00" && $("#segundo").html() == "01") {
      tempo = 604800;
			startCountdown();
		}
	}
});


function startCountdown(){

	// Se o tempo não for zerado

	if((tempo - 1) >= 0){

		// Pega a parte inteira dos minutos
		var min = parseInt(tempo/60);

		// horas, pega a parte inteira dos minutos
		var hor = parseInt(min/60);

		//dias
		var days = parseInt(hor/24);

		//atualiza a variável minutos/horas/dias obtendo o tempo restante dos minutos, horas
		min = min % 60;
		hor = hor % 24;

		// Calcula os segundos restantes
		var seg = tempo%60;

		// Formata o número menor que dez, ex: 08, 07, …

		//JQuery pra setar o valor
			if(min < 10){
				min = "0"+min;
	
				min = min.substr(0, 2);
	
			}
	
			if(seg <=9){
				seg = "0"+seg;
	
			}
	
			if(hor <=9){
				hor = "0"+hor;
			}
	
			if(days >= 1) {
				days = "0"+days;
			}

			// Cria a variável para formatar no estilo hora/cronômetro

			$("#dia").html(days);
			$("#hora").html(hor);
			$("#minuto").html(min);
			$("#segundo").html(seg);

		//local storage
		window.addEventListener("beforeunload", function() {
			let dataFinal = new Date();
			let timer = tempo;
			localStorage.setItem("tempo", timer);
			localStorage.setItem("dataFinal",dataFinal);
		}); 

		// Define que a função será executada novamente em 1000ms = 1 segundo

		setTimeout('startCountdown()',1000);

		// diminui o tempo

		tempo--;
	} 
}

// Chama a função ao carregar a tela
startCountdown();

