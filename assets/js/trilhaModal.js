if($("#oneModal").hasClass("check") == true) {
  $("#oneCheck").attr("src","assets/images/trilha/check.webp");
  $("#oneModal, .line.one, .texto .one").css("opacity","1");
  $(".line.one").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($("#oneModal").hasClass("nocheck") == true) {
  $("#oneCheck").attr("src","assets/images/trilha/nocheck.webp");
  $("#oneModal, .texto .one").css("opacity","0.5");
  $(".line.one").css("opacity","3");
}

if($("#twoModal").hasClass("check") == true) {
  $("#twoCheck").attr("src","assets/images/trilha/check.webp");
  $("#twoModal, .line.two, texto .two").css("opacity","1");
  $(".line.two").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($("#twoModal").hasClass("nocheck") == true) {
  $("#twoCheck").attr("src","assets/images/trilha/nocheck.webp");
  $("#twoModal, .texto .two").css("opacity","0.5");
  $(".line.two").css("opacity","0.3");
}

if($("#threeModal").hasClass("check") == true) {
  $("#threeCheck").attr("src","assets/images/trilha/check.webp");
  $("#threeModal, .line.three, .texto .three").css("opacity","1");
  $(".line.three").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($("#threeModal").hasClass("nocheck") == true) {
  $("#threeCheck").attr("src","assets/images/trilha/nocheck.webp");
  $("#threeModal, .texto .three").css("opacity","0.5");
  $(".line.three").css("opacity","0.3");
}

if($("#fourModal").hasClass("check") == true) {
  $("#fourCheck").attr("src","assets/images/trilha/check.webp");
  $("#fourModal, .line.four, .texto .four").css("opacity","1");
  $(".line.four").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($("#fourModal").hasClass("nocheck") == true) {
  $("#fourCheck").attr("src","assets/images/trilha/nocheck.webp");
  $("#fourModal, .texto .four").css("opacity","0.5");
  $(".line.four").css("opacity","0.3");
}


$("#verTrilha").on("click", function() {
  if($("#verTrilha").hasClass("show") == true) {
    $("#cardModal").css("height","230px");
    $("#cardModal").css("overflow","hidden");
    $("#verTrilha").removeClass("show");
    $("#i").css("transform","rotate(0deg)");
  } else {
    $("#cardModal").css("height","auto");
    $("#cardModal").css("overflow","initial");
    $("#verTrilha").addClass("show");
    $("#i").css("transform","rotate(180deg)");
  }
});