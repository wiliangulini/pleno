$(function () {
    // adicionar recarga
    $('a.lightbox, #btnR, #rec').on('click', function() {
        
        $(".bgbox, .divbox, #bgbox2, #divbox2").fadeIn('fast');

    });

    $(".bgbox, .divbox button, #bgbox2, #divbox2 button").on("click", function() {
        
        $(".bgbox, .divbox, #bgbox2, #divbox2").fadeOut('fast');

    });

    $('#btnR').on("click", function() {
        $("#card1").css("display", "none");
        $("#reembolso").css("display", "flex");
    });

    $("#fundos").on("click", function() {
        $("#reembolso").css("display", "none");
        $("#card1").css("display", "flex");
    });

    $("#rec").on("click", function() {
        $("card-one").css("display","flex");
    });

});

let inter = document.getElementById("collapseInter");
let inter2 = document.getElementById("collapseInter2");
let inter3 = document.getElementById("collapseInter3");
let inter4 = document.getElementById("collapseInter4");

function credito() {
    if(inter.style.display == "none") {
        inter.style.display = "block";
        inter2.style.display ="none";
        inter3.style.display ="none";
        inter4.style.display ="none";
    } else {
        inter.style.display = "none";
    }
}
function debito() {
    if(inter2.style.display == "none") {
        inter2.style.display = "block";
        inter.style.display ="none";
        inter3.style.display ="none";
        inter4.style.display ="none";
    } else {
        inter2.style.display = "none";
    }
}

function boleto() {
    if(inter3.style.display == "none") {
        inter3.style.display = "block";
        inter2.style.display ="none";
        inter.style.display ="none";
        inter4.style.display ="none";
    } else {
        inter3.style.display = "none";
    }
}

function pix() {
    if(inter4.style.display == "none") {
        inter4.style.display = "block";
        inter2.style.display ="none";
        inter3.style.display ="none";
        inter.style.display ="none";
    } else {
        inter4.style.display = "none";
    }
}