if($(".image.one").hasClass("check") == true) {
  $("#one").attr("src","assets/images/trilha/check.webp");
  $(".image.one, .line.one, .texto .one").css("opacity","1");
  $(".line.one").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($(".image.one").hasClass("nocheck") == true) {
  $("#one").attr("src","assets/images/trilha/nocheck.webp");
  $(".image.one, .texto .one").css("opacity","0.5");
  $(".line.one").css("opacity","3");
}

if($(".image.two").hasClass("check") == true) {
  $("#two").attr("src","assets/images/trilha/check.webp");
  $(".image.two, .line.two, texto .two").css("opacity","1");
  $(".line.two").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($(".image.two").hasClass("nocheck") == true) {
  $("#two").attr("src","assets/images/trilha/nocheck.webp");
  $(".image.two, .texto .two").css("opacity","0.5");
  $(".line.two").css("opacity","0.3");
}

if($(".image.three").hasClass("check") == true) {
  $("#three").attr("src","assets/images/trilha/check.webp");
  $(".image.three, .line.three, .texto .three").css("opacity","1");
  $(".line.three").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($(".image.three").hasClass("nocheck") == true) {
  $("#three").attr("src","assets/images/trilha/nocheck.webp");
  $(".image.three, .texto .three").css("opacity","0.5");
  $(".line.three").css("opacity","0.3");
}

if($(".image.four").hasClass("check") == true) {
  $("#four").attr("src","assets/images/trilha/check.webp");
  $(".image.four, .line.four, .texto .four").css("opacity","1");
  $(".line.four").css("background","linear-gradient(180deg, rgb(209, 214, 230), transparent)");
} else if($(".image.four").hasClass("nocheck") == true) {
  $("#four").attr("src","assets/images/trilha/nocheck.webp");
  $(".image.four, .texto .four").css("opacity","0.5");
  $(".line.four").css("opacity","0.3");
}