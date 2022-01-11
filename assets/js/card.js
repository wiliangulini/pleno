$(document).ready(function() {
    $("#go").on('click', function() {
        $("#two").css("display","flex");
        $("#one").css("display", "none");
    });
    $("#go2").on('click', function() {
        $("#three").css("display","flex");
        $("#two").css("display", "none");
    });
    $("#go3").on('click', function() {
        $("#four").css("display","flex");
        $("#three").css("display", "none");
    });
    $("#go4").on('click', function() {
        $("#five").css("display","flex");
        $("#time").css("display","flex");
        $(".progress").css("display","flex");
        $("#four").css("display", "none");
    });

    $("#search").on("click", function() {
        $("#esp2").css("display","none");
        $("#md4").css("display","block");
        $("#margin").css("margin","3% 0")
    });

    $("#close").on("click", function() {
        $("#low").css("display","none");
    });
    
});

function sumir() {
    document.getElementById("form").style.display = "none";
}

function enviar() {
    if(document.getElementById("textarea").value == "") {
        alert("preencha o campo antes de enviar!!!");
    } else if(document.getElementById("textarea").value.length > 3) {
        sumir();
    }
}

