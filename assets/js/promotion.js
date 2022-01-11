$(document).scroll(function() {
  if($(document).scrollTop() > 171) {
    $("#promotion").css("height","0");
    $("#page-topbar, #verticalMenu").css("margin-top","0");
  } else {
    $("#promotion").css("height","10vh");
    $("#page-topbar, #verticalMenu").css("margin-top","10vh");
  }
});

var tempo = new Number();

// Tempo em segundos

tempo = 604800;

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
		horaImprimivel = days+':'+ hor +':'+ min +':'+ seg;
		
		//JQuery pra setar o valor

		$("#timer").html(horaImprimivel);

		// Define que a função será executada novamente em 1000ms = 1 segundo

		setTimeout('startCountdown()',1000);

		// diminui o tempo

		tempo--;

		// Quando o contador chegar a zero faz esta ação

	}

}

// Chama a função ao carregar a tela
startCountdown();



//local Storage

let dataInicial = new Date();

//localstorage data inicial
localStorage.setItem('dataInicial',dataInicial);



window.addEventListener("beforeunload", function() {
	let dataFinal = new Date();
	localStorage.setItem("horaImprimivel", horaImprimivel);
	localStorage.setItem("dataFinal",dataFinal);
	localStorage.setItem("horaFinal",horaFinal);
});  

	
let hourPrint = localStorage.getItem('horaImprimivel');
let dateEnd = localStorage.getItem('dataFinal');
let dateEarly = localStorage.getItem('dataInicial');

console.log("data final :"+dateEnd);
console.log("data inicial :"+dateEarly);
console.log("hora imprimivel :"+hourPrint);

