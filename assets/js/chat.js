$(document).ready(function() {
    if(screen.width > 768) {
        $("#verPerfil").on("click", function() {
            $("#cardMain").css("display","none");
            $("#cardSituation").css("display","none");
            $("#cardPerfil").toggle();
        });

        $("#sitDif").on("click", function() {
            $("#cardMain").css("display","none");
            $("#cardPerfil").css("display","none");
            $("#cardSituation").toggle();
        });

        $("#suicidio").on("click", function() {
            $("#cardSuicidio").css("display","block");
            $("#cardSituation").css("display","none");
        });
        
        $("#depressao").on("click", function() {
            $("#cardDepressao").css("display","block");
            $("#cardSituation").css("display","none");
        });
        
        $("#violencia").on("click", function() {
            $("#cardViolencia").css("display","block");
            $("#cardSituation").css("display","none");
        });
    
        $("#close").on("click", function() {
            $("#cardPerfil").css("display","none");
        });
    
        $("#close1").on("click", function() {
            $("#cardMain").css("display","none");
            $("#cardCartao").css("display","none");
        });
    
        $("#close2").on("click", function() {
            $("#cardPag").css("display","none");
            $("#cardCartao").css("display","block");
        });

        $("#close3").on("click", function() {
            $("#cardSituation").css("display","none");
        });

        
        $("#close4").on("click", function() {
            $("#cardDepressao").css("display","none");
            $("#cardSituation").css("display","block");
        });

        $("#close5").on("click", function() {
            $("#cardSuicidio").css("display","none");
            $("#cardSituation").css("display","block");
        });
        
        $("#close6").on("click", function() {
            $("#cardViolencia").css("display","none");
            $("#cardSituation").css("display","block");
        });

        $("#close7").on("click", function() {
            $("#cupom").css("display","none");
        });

        $("#close8").on("click", function() {
            $("#cardCartao").css("display","block");
            $("#cardPIX").css("display","none");
        });
    
        $("#reenviar").on("click", function() {
            $("#cardPerfil").css("display","none");
            $("#cardSituation").css("display","none");
            $("#cardCartao").css("display","block");
            $("#cardMain").toggle();
        });

        $("#enviar").on("click", function() {
            $("#cardPerfil").css("display","none");
            $("#cardMain").css("display","none");
            $("#cardSituation").css("display","none");
            $("#cardViolencia").css("display","none");
            $("#cardSuicidio").css("display","none");
            $("#cardDepressao").css("display","none");
            $("#cupom").css("display","flex");
        });
    
        $("#pagCred").on("click",function() {
            $("#cardCartao").css("display","none");
            $("#cardPag").toggle();
        });    

        $("#pagPIX").on("click", function() {
            $("#cardCartao").css("display","none");
            $("#cardPIX").css("display","flex");
        });
    
    }
    if(screen.width < 768) {
        $("#verPerfil").on("click", function() {
            $("#cardChat").css("display","none");
            $("#cardPerfil").css("display","block");
        });

        $("#reenviar").on("click", function() {
            $("#cardChat").css("display","none");
            $("#cardCartao").css("display","block");
            $("#cardMain").css("display","block");
        });

        $("#sitDif").on("click", function() {
            $("#cardChat").css("display","none");
            $("#cardSituation").css("display", "block");
        });
        
        $("#enviar").on("click", function() {
            $("#cardChat").css("display","none");
            $("#cupom").css("display", "flex");
        });

        $("#suicidio").on("click", function() {
            $("#cardSuicidio").css("display","block");
            $("#cardSituation").css("display","none");
        });
        
        $("#depressao").on("click", function() {
            $("#cardDepressao").css("display","block");
            $("#cardSituation").css("display","none");
        });
        
        $("#violencia").on("click", function() {
            $("#cardViolencia").css("display","block");
            $("#cardSituation").css("display","none");
        });

        $("#pagCred").on("click", function() {
            $("#cardCartao").css("display","none");
            $("#cardPag").css("display","block");
        });  

        $("#pagPIX").on("click", function() {
            $("#cardCartao").css("display","none");
            $("#cardPIX").css("display","flex");
        });

        $("#close").on("click", function() {
            $("#cardChat").css("display","block");
            $("#cardPerfil").css("display","none");
        });

        $("#close1").on("click", function() {
            $("#cardChat").css("display","flex");
            $("#cardCartao").css("display","none");
            $("#cardMain").css("display","none");
        });
        
        $("#close2").on("click", function() {
            $("#cardPag").css("display","none");
            $("#cardCartao").css("display","block");
        });

        $("#close3").on("click", function() {
            $("#cardSituation").css("display","none");
            $("#cardChat").css("display","block");
        });
        
        $("#close4").on("click", function() {
            $("#cardDepressao").css("display","none");
            $("#cardSituation").css("display","block");
        });

        $("#close5").on("click", function() {
            $("#cardSuicidio").css("display","none");
            $("#cardSituation").css("display","block");
        });
        
        $("#close6").on("click", function() {
            $("#cardViolencia").css("display","none");
            $("#cardSituation").css("display","block");
        });
        
        $("#close7").on("click", function() {
            $("#cardChat").css("display","block");
            $("#cupom").css("display","none");
        });
        
        $("#close8").on("click", function() {
            $("#cardCartao").css("display","block");
            $("#cardPIX").css("display","none");
        });
    }
});