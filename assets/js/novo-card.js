$(document).ready(function() {
    $("#go1").on("click", function() {
        $("#zero").css("display","none");
        $("#one").css("display","flex");
    });
    $("#go").on('click', function() {
        $("#two").css("display","flex");
        $("#one").css("display", "none");
    });
    $("#go2").on('click', function() {
        $("#dois5").css("display","flex");
        $("#two").css("display", "none");
    });
    $("#go25").on('click', function() {
        $("#three").css("display","flex");
        $("#dois5").css("display", "none");
    });
    $("#go3").on('click', function() {
        $("#four").css("display","flex");
        $("#three").css("display", "none");
    });
    $("#go4").on('click', function() {
        $("#four_meio").css("display","flex");
        $("#four").css("display", "none");
    });
    $("#go45").on('click', function() {
        $("#five").css("display","flex");
        $("#four_meio").css("display", "none");
    });
    $("#go5").on('click', function() {
        $("#seis").css("display","flex");
        $("#five").css("display", "none");
        $("#time").css("display","flex");
        $(".progress").css("display","flex");
        
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

function range(){
    let valor = document.getElementById("valor").value;
    if(valor == "0") {
        document.getElementById("valor").style.background = "rgb(244, 106, 106)";
        document.getElementById("autoEstima").innerHTML = "Baixíssima";
        document.getElementById("bad").style.display = "flex";
        document.getElementById("normal").style.display = "none";
        document.getElementById("happy").style.display = "none";
    }else if(valor >= "50") {
        document.getElementById("valor").style.background = "rgb(251, 183, 24)";
        document.getElementById("autoEstima").innerHTML = "Razoável";
        document.getElementById("normal").style.display = "flex";
        document.getElementById("bad").style.display = "none";
        document.getElementById("happy").style.display = "none";
    }else if(valor == "100") {
        document.getElementById("valor").style.background = "rgb(49, 211, 114)";
        document.getElementById("autoEstima").innerHTML = "Lá em cima";
        document.getElementById("happy").style.display = "flex";
        document.getElementById("bad").style.display = "none";
        document.getElementById("normal").style.display = "none";
    }
}

range()

document.addEventListener("change", range);


function clickRadio(elmnt) {
    var n, i, x;
    n = elmnt.id;
    for (i = 0; i < 9; i++) {
        x = document.getElementById("label" + i);
        if (x) {x.className = x.className.replace(" checkedlabel", "");}
    }
    document.getElementById("label" + n).className += " checkedlabel";
    }
